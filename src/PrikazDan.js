import React from 'react';

function PrikazDan ({dan}) {
    let prikaz = [];
    dan.forEach((obj,index) => {
        prikaz.push(
        <div key={index} className="rounded text-center p-3 my-1 my-md-0 mx-1 bg-dark d-flex flex-row flex-md-column justify-content-center align-items-center">
            <h5 className="text-white text-center px-1">{obj.sat}h</h5>
            <img className="ikona text-center px-1 pb-1" alt="vrijeme" src={"https://meteo.hr/assets/images/icons/"+obj.simbol+".svg"} />
            <h5 className=" text-white text-center px-1">{obj.t2_m} °C</h5>
            <img className="ikona text-center px-1" alt="vjetar" src={"https://meteo.hr/assets/images/icons/"+obj.vjetar+".svg"} />
        </div>)
    });
    return (
        <div className="bg-secondary m-2 py-2 rounded ">
            <div className="text-center text-white px-2">
		        <h5>{dan[0].datum} - {dan[0].dtj}</h5>
	        </div>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                    {prikaz}
            </div>
        </div>
        
    )
}

export default PrikazDan;

