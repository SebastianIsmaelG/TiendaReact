import React from 'react';
import {Container,Row} from 'reactstrap';
import Navegacion from './componentes/navegacion.js'
import Producto from './componentes/producto.js';
import {listaProductos} from './componentes/listaproducto.json';


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }

  render(){
    const ArregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
            key={i}
            codigo={listaProductos.codigo}
            titulo={listaProductos.titulo}
            marca={listaProductos.marca}
            precio={listaProductos.precio}
            imagen={listaProductos.imagen}
            descripcion={listaProductos.descripcion}
            stock={listaProductos.stock}
          />
        )
      }
    );
    return (
      <Container className="body">
        <Navegacion NombreTienda="Facherita's Store" />
        <br></br>
        <Container>
          <Row>
            {ArregloComponentes}          
          </Row>
        </Container>
      </Container>
    );
  }

}

export default App;