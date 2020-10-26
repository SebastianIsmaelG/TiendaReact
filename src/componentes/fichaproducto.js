import React from 'react';
import {Modal,Button,Container,ModalBody,Col,Row} from 'reactstrap';
import './producto.css';
import {listaCarrito} from './listacarro.json';




class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal:false,
            listaCarrito,
            //declarancion del stock
            stock: props.props.stock 
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }
    
    toggle(){
        this.setState(prevState=>({
            modal: !prevState.modal
        }));
        
    }
    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState=>({
            modal: !prevState.modal,
            
        }));

        if (this.state.stock !== 0 ){
            this.setState(prevState =>({
                //resto del stock
                 stock: parseInt(prevState.stock) - 1
            }));
        }else{
            alert("Stock Agotado");
        }

        const badgecarro = document.getElementById("badge1")
        badgecarro.innerText = listaCarrito.length;
        
        localStorage.setItem( "carrito", JSON.stringify(listaCarrito));
        //Objeto console.log(listaCarrito);
      
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
                                           <small className="text-muted">COD: {this.props.props.codigo}</small> 
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
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <img alt="imagen-articulo" className="img_descripcion img-fluid" src={this.props.props.imagen}></img>
                                </Col>
                                <Col lg="6" md="6" sm="12" xs="12">
                                    <Container>
                                        <Row>
                                            <Col lg="12" md="12" sm="6" xs="6">
                                                <div className="text-center px-2 py-1 m-1"><span>Precio</span></div>
                                                <div className="text-center px-2 py-1"><strong className="text-danger h5">$ {new Intl.NumberFormat().format((this.props.props.precio))}</strong></div>
                                            </Col>
                                            <Col lg="12" md="12" sm="6" xs="6">
                                                <div className="p-1 m-1 text-center">
                                                    <span className="my-1">Cantidad: </span> 
                                                    <select className="my-1" id="id_cantidad_producto" disabled>
                                                        <option  value="1" defaultValue="1">1</option>
                                                        <option  value="2">2</option>
                                                        <option  value="3">3</option>
                                                        <option  value="4">4</option>
                                                        <option  value="5">5</option>
                                                        <option  value="6">6</option>
                                                        <option  value="7">7</option>
                                                        <option  value="8">8</option>
                                                        <option  value="9">9</option>
                                                        <option  value="10">10</option>
                                                        <option  value="11">11</option>
                                                        <option  value="12">12</option>
                                                        <option  value="13">13</option>
                                                        <option  value="14">14</option>
                                                        <option  value="15">15</option>
                                                        <option  value="16">16</option>
                                                        <option  value="17">17</option>
                                                        <option  value="18">18</option>
                                                        <option  value="19">19</option>
                                                        <option  value="20">20</option>
                                                        <option  value="21">21</option>
                                                        <option  value="22">22</option>
                                                        <option  value="23">23</option>
                                                        <option  value="24">24</option>
                                                        <option  value="25">25</option>
                                                        <option  value="26">26</option>
                                                        <option  value="27">27</option>
                                                        <option  value="28">28</option>
                                                        <option  value="29">29</option>
                                                        <option  value="30">30</option>
                                                    </select>
                                                </div>
                                                <div className="p-1 m-1 text-center"><button className="btnficha" onClick={this.agregarCarrito}>Agregar al Carro</button></div>
                                                
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col lg="6" md="6" sm="6" xs="6">
                                    <div className="p-1 m-1 text-right"><img alt="" src={require("../imagenes/medios_pago2016.png")} ></img></div>
                                </Col>
                                <Col lg="6" md="6" sm="6" xs="6">
                                    <div className="m-2 text-center"><small>Disponibles:{this.state.stock} Uds.</small></div>
                                </Col>
                                <Col>
                                    <Container>
                                        <div className="m-2 "><small>{this.props.props.descripcion}</small></div>
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