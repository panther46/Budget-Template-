import React, {Component} from 'react';


class Gasto extends Component {
    render(){
        // Se hace un distructuring del objeto, el sabe donde acceder, hay que colocar el nombre de los ref que viene del formulario o puedes ver como sale actualmente en el objeto
        const {cantidadGastoRef, nombreGastoRef} = this.props.gasto;
        console.log(cantidadGastoRef);
        console.log(nombreGastoRef);

        return(
            <li className="gastos">
                <p>
                    {nombreGastoRef}
                    <span className = "gasto"> $ {cantidadGastoRef}</span>
                </p>
            </li>
        )
    }

}

export default Gasto;