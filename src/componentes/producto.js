import React from 'react';
import{
    Container,
    CardSubtitle,
    CardTitle,
    Card,
    Col,
    CardImg,
    CardBody
} from 'reactstrap';
import './producto.css';
import FichaProducto from './fichaproducto.js';

class Producto extends React.Component{

    render(){
        return(
            <Col lg="3" md="6" sm="6" xs="12">
                <div>
                    <Card>
                        <Container className="text-center titulo_articulo">
                            <small className="text-muted text">{this.props.marca}</small>
                            <CardTitle className="font_articulo">{this.props.titulo}</CardTitle>
                        </Container>
                        <Container>
                            <CardImg className="cardfoto" src={this.props.imagen}/>
                        </Container>
                        <CardBody>
                            <div className="my-2 mx-2 text-center">
                                <CardSubtitle><span>Precio Oferta</span></CardSubtitle>
                                <CardSubtitle className="text-danger"><strong>$ {this.props.precio}</strong></CardSubtitle>
                            </div>
                            <div className="my-2 mx-2">
                                <FichaProducto props={this.props}/>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <br></br>
            </Col>
        );
    }
}

export default Producto;