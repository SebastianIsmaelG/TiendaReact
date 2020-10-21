import React from 'react';
import {Container,Row} from 'reactstrap';
import Navegacion from './componentes/navegacion.js'
import Producto from './componentes/producto.js';

class App extends React.Component{
  render(){
    return (
      <Container className="body">
        <Navegacion NombreTienda="Facherita's Store" />
        <br></br>
        <Container>
          <Row>
            <Producto
              titulo="Audifonos Facheros Inalambricos negros"
              precio="9.990"
              descripcion="Audífono On Ear RP-HS46 Negro
              Audifonos que se ajustan a tu oido. Los audifonos RP-HS46 estan diseñados para proporcionar un perfecto ajuste al oido y mantener la comodidad de uso.
              
              Auriculares ultradelgados
              Diseño ergonómico en el gancho
              Perfecto ajuste al oído
              Seguro y cómodo
              Características
              Marca: Panasonic
              Modelo: RP-HS46
              Color: Negro
              Tipo de audifono: On Ear
              Bluetooth: No
              NFC: No
              Driver: 14.8 mm
              Rango de frecuencia: 10 Hz- 25KHz
              Sensibilidad: 140 dB/mW(a 500Hz)
              Impedancia: 16 Ω
              Conector: Jack 3.5 mm
              Tipo imán: Neodimio
              Longitud del cable: 1.1 m
              Peso: 16 gr"
              marca="Motorola®"
              imagen="https://image.freepik.com/vector-gratis/auriculares_23-2147511567.jpg"
            />
            <Producto
              titulo="Smartwatch Chino"
              precio="39.990"
              descripcion="Smartwatch GP Gran pantalla táctil, resistente al agua 50 metros.
              Los mensajes, las llamadas y mucha más información se muestran directamente en la pantalla. Sumérgete hasta 50 metros de profundidad y comprueba el registro de tu actividad simplemente levantando la muñeca. Frecuencia cardíaca, calidad del sueño, recuento de pasos y control de la salud | Batería de hasta 20 días."
              marca="GP®"
              imagen="https://image.freepik.com/vector-gratis/fondo-reloj-inteligente-blanco_1412-32.jpg"
            />
            <Producto
              titulo="Parlantes sin cable"
              precio="25.990"
              descripcion="Altos parlantes señora
              
              Caracteristicas:

              Modelo:  Cobra 6W
              Conexiones: Conexión vía USB (Energía)
              Conexión Jack: 3.5mm(Audio)
              Potencia: 3W RMS por cada parlante
              Frecuencia:  Rango de frecuencia de 90Hz-20KHz
              Indepencia:  4Ω(Ohms)"

              marca="Kioto®"
              imagen="https://image.freepik.com/foto-gratis/grupo-altavoces_1155-37.jpg"
            />
            <Producto
              titulo="Pendrive con musica"
              precio="4.990"
              descripcion="Pura musica pura noveda
              Características

              Marca: SanDisk
              Modelo: SDCZ50-016G-B35
              Capacidad: 16 GB
              Tipo de Puerto: USB 2.0
              Características Físicas: Diseño en una sola pieza, transformando el mismo cuerpo del pendrive en el conector USB.
              Dimensiones: 42 mm x 17 mm x 6 mm"
              marca="SanDisk®"
              imagen="https://image.freepik.com/foto-gratis/pendrive-aislado-blanco_1368-6389.jpg"
            />
          </Row>
        </Container>
      </Container>
    );
  }

}

export default App;