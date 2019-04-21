import React from 'react';


const Presupuesto = (props) =>{
    return(
        <div className = "alert alert-primary">
            <p>Presupuesto: ${props.presupuestoControlProp}</p>
        </div>
    )
}


export default Presupuesto;