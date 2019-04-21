import React from 'react';
import Presupuesto from './Presupuesto.js';
import Restante from './Restante.js';


const ControlPresupuesto = (props) => {
    return(
        <div >
            <Presupuesto
            presupuestoControlProp = {props.presupuestoProp}
            />
            <Restante
            presupuestoControlProp = {props.presupuestoProp}
            restanteControlProp = {props.restanteProp}
            />
        </div>
    )

}

export default ControlPresupuesto;