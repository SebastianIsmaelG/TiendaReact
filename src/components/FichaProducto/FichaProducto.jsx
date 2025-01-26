import { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button, Container, ModalBody, Col, Row } from "reactstrap";
import "../FichaProducto/FichaProducto.css";
import imgmediosdepago from "../../img/medios_pago2016.png";
import { useCarrito } from "../../context/CarritoContext.jsx";

export const FichaProducto = ({ stock, titulo, precio, codigo, marca, imagen, descripcion }) => {
  const Mediosdepago = () => <img src={imgmediosdepago} alt="Medios de Pago" />;
  const [modal, setModal] = useState(false);
  const [currentStock, setCurrentStock] = useState(stock);
  const { agregarAlCarrito } = useCarrito(); // Usar el contexto

  const toggle = () => setModal(!modal);

  const AgregarCarrito = () => {
    const cantidad = parseInt(document.getElementById("id_cantidad_producto").value, 10);
    
    if (cantidad > currentStock) {
      alert("Stock insuficiente");
      return;
    }

    const producto = { codigo, titulo, cantidad, precio };
    agregarAlCarrito(producto); // Llamar a la función del contexto

    setCurrentStock((prevStock) => prevStock - cantidad);
    toggle();
  };

  return (
    <Container>
      <button className="btnficha" onClick={toggle}>Ver Más</button>
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
            <br />
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
                        <button className="btnficha" onClick={AgregarCarrito}>
                          Agregar al Carro
                        </button>
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
  );
};

FichaProducto.propTypes = {
  stock: PropTypes.number,
  titulo: PropTypes.string,
  precio: PropTypes.number,
  codigo: PropTypes.number,
  marca: PropTypes.string,
  imagen: PropTypes.string,
  descripcion: PropTypes.string,
};
