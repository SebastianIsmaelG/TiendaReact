import React from 'react';
import {Modal,Button,Container,ModalBody,Col,Row,Nav,} from 'reactstrap'


class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal:false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
        console.log(this.props);
    }
    render(){
        return(
            <Container>
                <div className="buttondiv">
                 <button className="btnficha" onClick={this.toggle}>Ver Mas</button>
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <Button close onClick={this.toggle} />
                                </Col>
                                <Col lg="12">
                                    <Container>
                                     <Row>
                                         <Col lg="12">
                                           <small className="text-muted">COD: 0000</small> 
                                         </Col>
                                         <Col lg="12">
                                            <span>{this.props.props.marca}</span> | <span>{this.props.props.titulo}</span>
                                         </Col>   
                                     </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col lg="6">
                                    <Container>
                                        <img alt="imagen-articulo" className="img_descripcion" src={this.props.props.imagen}></img>
                                    </Container>
                                </Col>
                                <Col lg="6">
                                <Container>
                                    <Row>
                                        <Col lg="12">
                                            <span>Precio</span>
                                        </Col>
                                        <Col lg="12">
                                            <strong className="text-danger">$ {this.props.props.precio}</strong>
                                        </Col>
                                        <Col lg="12">
                                            <button className="btnficha" onClick={this.toggle}>Agregar al Carro</button>
                                            <img alt="" src={require("../imagenes/medios_pago2016.png")} ></img>
                                        </Col>
                                    </Row>
                                </Container>
                                </Col>
                                <Col>
                                <Container>
                                     <small>{this.props.props.descripcion}</small>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;