(this.webpackJsonpreactvrijeme=this.webpackJsonpreactvrijeme||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.2411d418.png"},20:function(e,t,a){e.exports=a(53)},25:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(25),a(26),a(6)),i=a(11),l=a(12),m=a(5),d=a(18),u=a(17),h=a(2),p=a(16),b=a(13),f=a.n(b);a(48);var g=function(e){var t=e.dan,a=[];return t.forEach((function(e,t){a.push(r.a.createElement("div",{key:t,className:"rounded text-center p-4 my-1 my-md-0 mx-1 bg-dark d-flex flex-row flex-md-column justify-content-center"},r.a.createElement("h5",{className:"pt-3 px-2 px-md-0 pt-md-2 text-white"},e.sat,"h"),r.a.createElement("img",{className:"ikona pt-md-2 px-2 px-md-0",alt:"vrijeme",src:"https://meteo.hr/assets/images/icons/"+e.simbol+".svg"}),r.a.createElement("h5",{className:"pt-3 pt-md-2 px-2 px-md-0 text-white"},e.t2_m," \xb0C"),r.a.createElement("img",{className:"ikona pt-md-2 px-2 px-md-0",alt:"vjetar",src:"https://meteo.hr/assets/images/icons/"+e.vjetar+".svg"})))})),r.a.createElement("div",{className:"bg-secondary m-2 py-2 rounded "},r.a.createElement("div",{className:"text-center text-white px-2"},r.a.createElement("h4",null,t[0].datum," - ",t[0].dtj)),r.a.createElement("div",{className:"d-flex flex-column flex-md-row"},a))};var v=function(e){var t,a=e.podaci,n=[[]],c="",o=0,i=Object(s.a)(a.getElementsByTagName("dan"));try{for(i.s();!(t=i.n()).done;){var l=t.value,m={datum:l.getAttribute("datum"),dtj:l.getAttribute("dtj"),sat:l.getAttribute("sat"),t2_m:l.getElementsByTagName("t_2m")[0].innerHTML,simbol:l.getElementsByTagName("simbol")[0].innerHTML,vjetar:l.getElementsByTagName("vjetar")[0].innerHTML,oborina:l.getElementsByTagName("oborina")[0].innerHTML};""===c||c===l.getAttribute("datum")||(o++,n.push([])),n[o].push(m),c=l.getAttribute("datum")}}catch(u){i.e(u)}finally{i.f()}var d=[];return n.forEach((function(e,t){d.push(r.a.createElement(g,{key:t,dan:e}))})),r.a.createElement("div",{className:"d-md-flex flex-wrap justify-content-center"},d)},j=a(54),x=(a(49),a(14)),E=a.n(x),k=[],y={input:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white"})},menuList:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white",backgroundColor:"#343a40"})},option:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white",backgroundColor:t.isSelected?"#6c757d":"#343a40"})},control:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{backgroundColor:"#343a40",border:"transparent"})},placeholder:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white"})},singleValue:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white"})},indicatorsContainer:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{color:"white"})}},N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSelect=n.handleSelect.bind(Object(m.a)(n)),n.promijeniDan=n.promijeniDan.bind(Object(m.a)(n)),n.state={gradPostoji:!0,podaci:"",odabranGrad:"",error:!1,dana7:!0===n.props.cookies.get("dana7")||!1},n}return Object(l.a)(a,[{key:"handleSelect",value:function(e){var t,a=Object(s.a)(this.state.podaci);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.getAttribute("ime")===e.value&&(this.setState({odabranGrad:n,gradPostoji:!0}),this.props.cookies.set("odabranGrad",e.value,{path:"/"}))}}catch(r){a.e(r)}finally{a.f()}}},{key:"promijeniDan",value:function(){var e=this;this.setState({podaci:"",odabranGrad:"",error:!1,dana7:!this.state.dana7},(function(){e.ucitajPodatke(),e.props.cookies.set("dana7",e.state.dana7,{path:"/"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"stranica d-flex flex-column"},r.a.createElement("div",{className:"d-flex flex-column content bg-dark"},r.a.createElement("nav",{className:"navbar navbar-dark bg-secondary p-3 d-flex justify-content-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("p",{className:"text-white"},"reactVrijeme"),r.a.createElement("img",{className:"ikona",alt:"reactVrijeme",src:E.a}))),this.state.podaci?r.a.createElement("div",{className:"py-3 bg-secondary"},r.a.createElement("div",{className:"container text-white d-flex flex-column"},r.a.createElement("h1",{className:"display-4 text-center"},""!==this.state.odabranGrad?this.state.odabranGrad.getAttribute("ime").replace(/_/g," "):"Lokacija nije odabrana"),r.a.createElement("p",{className:"lead text-center"},"Ovdje pretra\u017eujte vrijeme"),r.a.createElement(p.a,{styles:y,className:"col-md-4 p-0 align-self-center",options:k,onChange:this.handleSelect,placeholder:"Odaberite lokaciju"}),r.a.createElement("form",{className:"text-center pt-2"},r.a.createElement("input",{name:"dana7",type:"checkbox",className:"form-check-input",checked:this.state.dana7,onChange:this.promijeniDan}),r.a.createElement("label",{className:"form-check-label",htmlFor:"dana7"},"7 dana ")))):this.state.error?r.a.createElement("div",{className:"text-center my-auto"},r.a.createElement("h3",{className:"text-white pt-4"},"Gre\u0161ka prilikom dohva\u0107anja podataka")):r.a.createElement("div",{className:"text-center pt-4 my-auto"},r.a.createElement(f.a,{type:"Oval",color:"white",height:100,width:100}),r.a.createElement("h3",{className:"text-white pt-4"},"Dohva\u0107anje podataka...")),this.state.gradPostoji?null:r.a.createElement("div",{className:"text-center pt-4 my-auto"},r.a.createElement("h3",{className:"text-white pt-4"},"Nema podataka za izabrani grad")),""!==this.state.odabranGrad||this.state.error?this.state.error?null:r.a.createElement("div",{className:""},r.a.createElement(v,{podaci:this.state.odabranGrad})):null),r.a.createElement("footer",{className:"footer bg-secondary p-3"},r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"text-light"},"reactVrijeme"))))}},{key:"ucitajPodatke",value:function(){var e=this;k=[];var t="";t=this.state.dana7?"https://prognoza.hr/sedam/hrvatska/7d_meteogrami.xml":"https://prognoza.hr/tri/3d_graf_i_simboli.xml",fetch("https://cors-anywhere.herokuapp.com/"+t).then((function(e){if(!e.ok)throw new Error("Ups!");return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(t){var a,n=t.getElementsByTagName("grad"),r=Object(s.a)(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;k.push({value:c.getAttribute("ime"),label:c.getAttribute("ime").replace(/_/g," ")})}}catch(o){r.e(o)}finally{r.f()}e.setState({podaci:n}),e.props.cookies.get("odabranGrad")&&e.handleSelect({value:e.props.cookies.get("odabranGrad")}),""===e.state.odabranGrad&&e.setState({gradPostoji:!1})})).catch((function(){return e.setState({error:!0})}))}},{key:"componentDidMount",value:function(){this.ucitajPodatke()}}]),a}(n.Component),w=Object(j.a)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(55);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,null,r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e1a5e07a.chunk.js.map