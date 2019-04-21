import React, {Component} from 'react';

class FormularioGasto extends Component{

    // Creando ref lectura del formulario
    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

// Metodo que gestiona el gasto una vez que se hace click en submit
    crearGasto = (e) =>{

        // Prevenir default

        e.preventDefault();

        // Crear objeto con los datos

        const gasto = {
            nombreGastoRef : this.nombreGastoRef.current.value,
            cantidadGastoRef: this.cantidadGastoRef.current.value
        }

        console.log(gasto);


        // agregarlo y enviarlo por props

        this.props.agregarGastoProp(gasto);

        // resetear el formulario (esto opcional)

        e.currentTarget.reset();

    };

    render(){
        return(
            <form onSubmit = {this.crearGasto}>
                <div className="form-group">
                    <h2>Agrega tus gastos aqui</h2>
                    <label htmlFor="exampleInputEmail1">Nombre de gasto</label>
                    <input ref= {this.nombreGastoRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej. Transporte"/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                 </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Cantidad</label>
                     <input ref = {this.cantidadGastoRef}type="number" className="form-control" id="exampleInputPassword1" placeholder="Ej. Cantidad" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar gasto</button>
            </form>
        )
    }
}


export default FormularioGasto;