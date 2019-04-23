import React, { Component } from 'react';
import '../css/main.css';
import Header from './Header';
import FormularioGasto from './Formulario.js';
import Listado from './Listado.js';
import ControlPresupuesto from './ControlPresupuesto.js';
import {validarPresupuesto} from '../helpers.js';



class App extends Component {
 //Se crea un objeto vacio
state = {
  presupuesto: "",
  restante: "",
  gastos: {}
}
//Metodo relacionado con el estado de vida de un componente, se ejecuta cuando todo el componente ya fue mostrado en pantalla 
componentDidMount(){
  this.obtenerPresupuesto();
}
//Metodo aparte que ejecutaremos por medio del componentDidMount() para no cargar el componente de ciclo de vida directamente
obtenerPresupuesto = () =>{
  let presupuesto = prompt ('Cual es su presupuesto?')
  // 1) Se crea un prompt en una variable, 2) se usa un helper con el parametro que se usa en el prompt
  let resultado = validarPresupuesto(presupuesto);

  if (resultado){
    this.setState({
      presupuesto:presupuesto,
      restante:presupuesto
    })
  }else{
      this.obtenerPresupuesto();
    }
  }

//A continuacion una configuracion del state para incluirle llaves a los objetos, basicamente se crea una copia del mismo con el spread opertor, se le añade un metodo para agregar fecha exacta de creacion y se sobre escribe el objeto con setstate
  //Metodo para agregar un nuevo gasto al state 
    agregarGasto = gasto => {
      //tomar una copia del state actual
    const gastos = {...this.state.gastos};
      // el spread operator crea una copia del objeto vacio previamente creado

      // agregar el gasto al objeto del state, se crea una llave time stamp de cada gasto introducido
      gastos[`gasto${Date.now()}`] = gasto;
      
      // Restar el presupuesto
      this.restarPresupuesto(gasto.cantidadGastoRef);

      // ponerlo en el state

      this.setState({
        gastos
      })

    }

    // Metodo para restar presupuesto cuando entra un gasto

    restarPresupuesto = (cantidad) =>{
      // convertimos el tipo de dato en un numero ya que la consola nos indica que es un string
      let conversion = Number(cantidad);
      // tomamos una copia del state actual, (sin spread... ya que en este caso es diferente, solo vamos a tratar un dato, no el objeto completo)

      let restante = this.state.restante;

      // Lo restamos
      restante -= conversion;
      // Lo pasamos a string nuevamente
      restante = String(restante);

      // Re escribimos el state, solo el restante
      this.setState({
        restante
      })
    }

  render() {
    return (
      
      <div className="Container">
        <Header
        titulo= "Gasto Semanal" 
        />
          <div className="container contenido-principal contenido">
            <div className="row">
              <div className="col-6">
                <FormularioGasto 
                  agregarGastoProp = {this.agregarGasto}
                />
                </div>
                <div className="col-6">
                <Listado
                gastosProp= {this.state.gastos}
                />
                <ControlPresupuesto 
                  presupuestoProp= {this.state.presupuesto}
                  restanteProp = {this.state.restante}
                />
                </div>
                
              </div>
            </div>
          </div>
    );
  }
}

export default App;
