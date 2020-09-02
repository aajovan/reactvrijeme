import React from 'react';

function PrikazDan ({dan}) {
    let prikaz = [];
    dan.forEach((obj,index) => {
        prikaz.push(
        <div key={index} className="rounded text-center p-4 my-1 my-md-0 mx-1 bg-dark d-flex flex-row flex-md-column justify-content-center">
            <h5 className="pt-3 px-2 px-md-0 pt-md-2 text-white">{obj.sat}h</h5>
            <img className="ikona pt-md-2 px-2 px-md-0" alt="vrijeme" src={"https://meteo.hr/assets/images/icons/"+obj.simbol+".svg"} />
            <h5 className="pt-3 pt-md-2 px-2 px-md-0 text-white">{obj.t2_m} °C</h5>
            <img className="ikona pt-md-2 px-2 px-md-0" alt="vjetar" src={"https://meteo.hr/assets/images/icons/"+obj.vjetar+".svg"} />
        </div>)
    });
    return (
        <div className="bg-secondary m-2 py-2 rounded ">
            <div className="text-center text-white px-2">
		        <h4>{dan[0].datum} - {dan[0].dtj}</h4>
	        </div>
            <div className="d-flex flex-column flex-md-row">
                    {prikaz}
            </div>
        </div>
        
    )
}

export default PrikazDan;

