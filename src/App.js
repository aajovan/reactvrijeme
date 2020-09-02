import React, {Component} from 'react';
import Select from 'react-select'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import VrijemePrikaz from './VrijemePrikaz'
import { withCookies} from 'react-cookie';
import './App.css';
import logo from './logo.png';

let options = [];

const customStyles = {
  input: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  menuList: (provided, state) => ({
    ...provided,
    color: 'white',
    backgroundColor:'#343a40',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    backgroundColor: state.isSelected ? '#6c757d' : '#343a40',

  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#343a40",
    border:'transparent',

  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
    
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: "white"
  })
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {gradPostoji:true,podaci: "",odabranGrad: "",error:false, dana7: (this.props.cookies.get('dana7')===true) || false};
  }
  
  handleSelect (value) {
    for (let item of this.state.podaci) {
       if(item.getAttribute("ime") === (value.value)) {
            this.setState({odabranGrad:item,gradPostoji:true});
            this.props.cookies.set('odabranGrad', value.value, { path: '/' });
          }
    }
  };
  promijeniDan() {
    this.setState({podaci: "",odabranGrad: "",error:false,dana7: !this.state.dana7},()=>{
      this.ucitajPodatke();
      this.props.cookies.set('dana7', this.state.dana7, { path: '/' });
    })
  };
  handleSelect = this.handleSelect.bind(this);
  promijeniDan = this.promijeniDan.bind(this);



  render() {
   
    return (

      <div className="stranica d-flex flex-column">
            <div className="d-flex flex-column content bg-dark">
                <nav className="navbar navbar-dark bg-secondary p-3 d-flex justify-content-center">
                  <div className="text-center">
                     <p className="text-white">reactVrijeme</p>
                     <img className="ikona" alt="reactVrijeme" src={logo} />
                  </div>
                   
                </nav>
                {
                  this.state.podaci ? (
                <div className="py-3 bg-secondary">
                  <div className="container text-white d-flex flex-column">
                    <h1 className="display-4 text-center">{this.state.odabranGrad !== "" ? this.state.odabranGrad.getAttribute("ime").replace(/_/g, " ") : "Lokacija nije odabrana"}</h1>
                    <p className="lead text-center">Ovdje pretražujte vrijeme</p>
                    <Select styles={customStyles} className='col-md-4 p-0 align-self-center' options={options} onChange={this.handleSelect} placeholder="Odaberite lokaciju"/> 
                    <form className="text-center pt-2">
                          <input name="dana7" type="checkbox" className="form-check-input" checked={this.state.dana7} onChange={this.promijeniDan} />
                          <label className="form-check-label" htmlFor="dana7">7 dana </label>
                    </form>
                  </div>
                </div>)
                : this.state.error ? (

                  <div className="text-center my-auto">
                  <h3 className="text-white pt-4">Greška prilikom dohvaćanja podataka</h3>
                </div>

                ) : (

                <div className="text-center pt-4 my-auto">
                  <Loader type="Oval" color="white" height={100} width={100}/>
                  <h3 className="text-white pt-4">Dohvaćanje podataka...</h3>
                </div>)
                }
                {
                  !this.state.gradPostoji?  <div className="text-center pt-4 my-auto">
                  <h3 className="text-white pt-4">Nema podataka za izabrani grad</h3>
                </div> : null
                }
                { 
                  this.state.odabranGrad === "" && !this.state.error ? null
                          :
                          !this.state.error ?
                <div className="">
                  <VrijemePrikaz podaci={this.state.odabranGrad}/>
                </div>
                : null
                }
          
          </div>
          <footer className="footer bg-secondary p-3">
              <div className="text-center">
                <span className="text-light">reactVrijeme</span>
              </div>
          </footer>
    </div>
  ) }
  ucitajPodatke() {
    options=[];
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let url ="";
    this.state.dana7 ? url = "https://prognoza.hr/sedam/hrvatska/7d_meteogrami.xml" :
    url = "https://prognoza.hr/tri/3d_graf_i_simboli.xml";
    
    fetch(proxyurl + url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Ups!');
          
        }
        return response.text()
      })
       .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
          const podaci = data.getElementsByTagName("grad");
          for (let item of podaci) {
            options.push({value: item.getAttribute("ime"), label: item.getAttribute("ime").replace(/_/g, " ")});
           }
           
          this.setState({podaci: podaci})

          if(this.props.cookies.get('odabranGrad')) {
            this.handleSelect({value: this.props.cookies.get('odabranGrad')})
          }
          if(this.state.odabranGrad==="") {
            this.setState({gradPostoji:false});
          }
         })
        .catch(() => this.setState({error: true}))
  }
  componentDidMount() {
   this.ucitajPodatke();
  }
}

export default withCookies(App);
