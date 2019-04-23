import React from 'react';
import Presupuesto from './Presupuesto.js';
import Restante from './Restante.js';
import PropTypes from 'prop-types';


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

// PropTypes Checking:

ControlPresupuesto.propTypes = {
    presupuestoControlProp: PropTypes.string.isRequired,
    restanteControlProp: PropTypes.string.isRequired

}

export default ControlPresupuesto;