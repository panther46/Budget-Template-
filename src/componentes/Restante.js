import React from 'react';
import {revisarPresupuesto} from '../helpers.js';


const Restante = (props) => {
    // constantes que reciben props para usarlar como parametro en el helper revisarPresupuesto()
    const presupuesto = props.presupuestoControlProp;
    const restante = props.restanteControlProp;

    return(
        <div className = {revisarPresupuesto(presupuesto,restante)}>
            <p>Restante: ${props.restanteControlProp}</p>
        </div>
    )
}

export default Restante;