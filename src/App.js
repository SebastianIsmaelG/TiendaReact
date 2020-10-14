import React from 'react';
import {Container,Row} from 'reactstrap';
import Navegacion from './componentes/navegacion.js'
import Producto from './componentes/producto.js';

class App extends React.Component{
  render(){
    return(

      <Container className="body">
        <Navegacion NombreTienda="Facherita's Store"/>
        <br></br>
        <Container>
          <Row>
            <Producto titulo="Audifonos" precio="9.990" descripcion="Audifonos bonitos de motorola" marca="Motorola" imagen="https://image.freepik.com/vector-gratis/auriculares_23-2147511567.jpg"/>
            <Producto titulo="Smartwatch" precio="39.990" descripcion="Smartwatch tarjeta sim contactos bla bla" marca="GP" imagen="https://image.freepik.com/vector-gratis/fondo-reloj-inteligente-blanco_1412-32.jpg"/>
            <Producto titulo="Parlantes Mp3" precio="25.990" descripcion="Altos parlantes señora" marca="Kioto" imagen="https://image.freepik.com/foto-gratis/grupo-altavoces_1155-37.jpg"/>
            <Producto titulo="Pendrai con musica" precio="4.990" descripcion="Pura musica pura noveda" marca="Fugitel" imagen="https://image.freepik.com/foto-gratis/pendrive-aislado-blanco_1368-6389.jpg"/>
          </Row>
        </Container>
        
      </Container>
    );
  }

}

export default App;