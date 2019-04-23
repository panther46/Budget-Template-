import React, {Component} from 'react';
import '../css/main.css';
import Gasto from './Gasto.js';
import PropTypes from 'prop-types';


class Listado extends Component{
    render() {
        return(
            <div className= "gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastosProp).map(key =>(
                    <Gasto
                        key={key}
                        gasto = {this.props.gastosProp[key]}
                    />
                ) ) }
            </div>
        )

    }
}    


// Checking Proptypes:

Listado.propTypes = {
    gastos : PropTypes.object.isRequired

}


export default Listado;