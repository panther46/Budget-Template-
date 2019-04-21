import React, {Component} from 'react';
import '../css/main.css';
import Gasto from './Gasto.js';


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



export default Listado;