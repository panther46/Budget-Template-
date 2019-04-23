import React from 'react';
import PropTypes from 'prop-types';


const Presupuesto = (props) =>{
    return(
        <div className = "alert alert-primary">
            <p>Presupuesto: ${props.presupuestoControlProp}</p>
        </div>
    )
}


//Checking PropTypes:

Presupuesto.propTypes = {
    presupuestoControlProp: PropTypes.string.isRequired

}

export default Presupuesto;