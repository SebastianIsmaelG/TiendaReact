import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Modal, Button, Container, ModalBody, Col, Row } from "reactstrap";
import "../Producto/Producto.css"; // TENGO QUE CREAR OTRO CSS PARA ESTE LADO
import CarritoJson from "../../json/listacarro.json";
import ProductosJson from "../../json/listaproducto.json";
import imgmediosdepago from "../../img/medios_pago2016.png";


export const FichaProducto = ({stock , titulo, precio, codigo, marca, imagen, descripcion}) => {

  const [modal, setModal] = useState(false);
  const [currentStock, setCurrentStock] = useState(stock);
  const { listaCarrito } = CarritoJson;

  const toggle = () => setModal(!modal);

  const agregarCarrito = () => {
    const cantidad = document.getElementById("id_cantidad_producto").value;
    console.log(cantidad)
    listaCarrito.push({ titulo, cantidad, precio });

    if (currentStock > 0) {
      setCurrentStock((prevStock) => prevStock - 1);
      localStorage.setItem('carrito_storage', JSON.stringify(listaCarrito));
      const badgecarro = document.getElementById('badge1');
      if (badgecarro) badgecarro.innerText = listaCarrito.length;
    } else {
      alert('Stock Agotado');
    }

    toggle();
  };


  const Mediosdepago = () => <img src={imgmediosdepago} alt="Medios de Pago"/>

  return (
    <Container>
      <div className="buttondiv">
        <button className="btnficha" onClick={toggle}>
          Ver Mas
        </button>
      </div>
      <Modal isOpen={modal}>
        <ModalBody>
          <Container>
            <Row>
              <Col lg="12">
                <Button close onClick={toggle} />
              </Col>
              <Col lg="12">
                <Container>
                  <Row>
                    <Col lg="12">
                      <small className="text-muted">COD: {codigo}</small>
                    </Col>
                    <Col lg="12">
                      <span>{marca}</span> | <span>{titulo}</span>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col lg="6" md="6" sm="12" xs="12">
                <img
                  alt="imagen-articulo"
                  className="img_descripcion img-fluid"
                  src={imagen}
                ></img>
              </Col>
              <Col lg="6" md="6" sm="12" xs="12">
                <Container>
                  <Row>
                    <Col lg="12" md="12" sm="6" xs="6">
                      <div className="text-center px-2 py-1 m-1">
                        <span>Precio</span>
                      </div>
                      <div className="text-center px-2 py-1">
                        <strong className="text-danger h5">
                          $ {new Intl.NumberFormat().format(precio)}
                        </strong>
                      </div>
                    </Col>
                    <Col lg="12" md="12" sm="6" xs="6">
                      <div className="p-1 m-1 text-center">
                        <span className="my-1">Cantidad: </span>
                        <select className="my-1" id="id_cantidad_producto">
                          {Array.from({ length: 30 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="p-1 m-1 text-center">
                      <button className="btnficha" onClick={agregarCarrito}> Agregar al Carro </button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="p-1 m-1 text-right">{Mediosdepago()}</div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="m-2 text-center">
                  <small>Disponibles: {currentStock} Uds.</small>
                </div>
              </Col>
              <Col>
                <Container>
                  <div className="m-2 ">
                    <small>{descripcion}</small>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </Container>
  )
};

FichaProducto.propTypes = {
  stock: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  codigo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
};

