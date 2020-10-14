import React from 'react';
import{
    Container,
    CardText,
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
            <Col lg="3" md="6" sm="6" xs="6">
                <div>
                    <Card>
                        <CardImg className="cardfoto" src={this.props.imagen}/>
                        <CardBody>
                            <CardTitle>{this.props.titulo}</CardTitle>
                            <CardSubtitle><span>Valor:</span>{this.props.precio}</CardSubtitle>
                            <CardText>{this.props.descripcion}</CardText>
                            <FichaProducto props={this.props}/>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default Producto;