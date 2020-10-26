import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import './producto.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-light">
                <Container>
                    <hr></hr>
                   <Row>
                      <Col lg="4" md="6" sm="6" xs="12">
                         <div className="p-2 text-center">
                                <div className="p-1">
                                    <img className="logo" src="https://i.ibb.co/WHqZFx1/store-icon-icons-com-54371.png" alt="log"></img>
                                </div>
                                <div className="p-1">
                                    <span className="nombre_tienda">Facherita's Store</span>
                                </div>
                                <div className="p-1">
                                    <button className="btn_contactame" value="contacto">Contactanos</button>
                                </div>             
                         </div> 
                      </Col>  
                      <Col lg="4" md="6" sm="6" xs="12">
                        <div className="p-2 text-center">
                            <h5 className="noto_sans">SERVICIO AL CLIENTE</h5>
                            <ul className="text-decoration-none ul_none text-left m-1 ">
                                <li><a className="text-decoration-none text-dark" href="/"><span>• </span>Términos y Condiciones</a></li>
                                <li><a className="text-decoration-none text-dark" href="/"><span>• </span>Despachos</a></li>
                                <li><a className="text-decoration-none text-dark" href="/"><span>• </span>Preguntas Frecuentas</a></li>
                                <li><a className="text-decoration-none text-dark" href="/"><span>• </span>Contacto</a></li>    
                            </ul>
                        </div>    
                      </Col>  
                      <Col lg="4" md="6" sm="6" xs="12">
                        <div className="p-2 text-center">
                            <h5 className="noto_sans">REDES SOCIALES</h5>
                            <ul className="text-decoration-none ul_none text-center m-1 list-inline ">
                                <li className="list-inline-item"><a className="text-decoration-none" href="/"><img alt="facebook" src="https://img.icons8.com/color/48/000000/facebook.png"/></a></li>
                                <li className="list-inline-item"><a className="text-decoration-none" href="/"><img alt="youtube" src="https://img.icons8.com/color/48/000000/youtube-play.png"/></a></li>
                                <li className="list-inline-item"><a className="text-decoration-none" href="/"><img alt="instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a></li>
                                
                            </ul>
                        </div>    
                      </Col>  
                      <Col lg="3" md="6" sm="6" xs="12"></Col>  
                   </Row>
                </Container>
                <div className="text-dark  text-right">
                    <div className="py-1 px-3">
                         <p className="">Made with <span className="material-icons corazon">favorite</span> © 2020</p>
                    </div>
                </div>
            </footer>
            
        );
    }
}

export default Footer;