//import { useState } from 'react'
import { Container, Row } from "reactstrap";
import './App.css';
import './components/Producto/Producto.css';
import ProductosJson from "./json/listaproducto.json";
import { NaviBar } from "./components/Navbar/NaviBar.jsx";
import { Producto } from "./components/Producto/Producto.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  const { listaProductos } = ProductosJson;

  const ArregloComponentes = listaProductos.map((producto, i) => {  //lista productos??
    return (
      <Producto
        key={i}
        codigo={producto.codigo}
        titulo={producto.titulo}
        marca={producto.marca}
        precio={producto.precio}
        imagen={producto.imagen}
        descripcion={producto.descripcion}
        stock={producto.stock}
      />
    );
  });

  return (
    <Container className="body container-fluid">
      <NaviBar NombreTienda="Facherita's Store" />
      <hr></hr>
      <br></br>
      <Container>
        <Row>{ArregloComponentes}</Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
