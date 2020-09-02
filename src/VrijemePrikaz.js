import React from 'react';
import PrikazDan from './PrikazDan'

function VrijemePrikaz ({podaci}) {

  let vrijemeDani= [[]];
  let prethodniDatum ="";
  let datumBrojac=0;

for (let item of podaci.getElementsByTagName("dan")) {
      let obj = {
        datum: item.getAttribute("datum"),
        dtj: item.getAttribute("dtj"),
        sat: item.getAttribute("sat"),
        t2_m: item.getElementsByTagName("t_2m")[0]["innerHTML"],
        simbol: item.getElementsByTagName("simbol")[0]["innerHTML"],
        vjetar: item.getElementsByTagName("vjetar")[0]["innerHTML"],
        oborina: item.getElementsByTagName("oborina")[0]["innerHTML"]
      };

      if(prethodniDatum === "" || prethodniDatum === item.getAttribute("datum")) {
        vrijemeDani[datumBrojac].push(obj)

      } else {
        datumBrojac ++;
        vrijemeDani.push([])
        vrijemeDani[datumBrojac].push(obj)
      }
      prethodniDatum = item.getAttribute("datum");

    }
    let dani = [];
    vrijemeDani.forEach((element,index) => {
          
      dani.push(<PrikazDan key = {index} dan={element}/>)
      })
      
      return <div className="d-md-flex flex-wrap justify-content-center">{dani}</div>
}
  

export default VrijemePrikaz;
