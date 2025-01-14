import{Container,CardSubtitle,CardTitle,Card,Col,CardImg,CardBody} from 'reactstrap';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../Producto/Producto.css';
import {FichaProducto} from '../FichaProducto/FichaProducto.jsx';


export const Producto = ({marca, titulo, imagen, precio, stock, codigo, descripcion}) =>{
    return(
        <Col lg="3" md="6" sm="6" xs="12">
            <div>
                <Card>
                    <Container className="text-center titulo_articulo">
                        <small className="text-muted text">{marca}</small>
                        <CardTitle className="font_articulo">{titulo}</CardTitle>
                    </Container>
                    <Container>
                        <CardImg className="cardfoto" src={imagen}/>
                    </Container>
                    <CardBody>
                        <div className="my-2 mx-2 text-center">
                            <CardSubtitle><span>Precio Oferta</span></CardSubtitle>
                            <CardSubtitle className="text-danger"><strong>$ {new Intl.NumberFormat().format((precio))}</strong></CardSubtitle>
                        </div>
                        <div className="my-2 mx-2">
                            <FichaProducto
                                stock={stock}
                                titulo={titulo}
                                precio={precio}
                                codigo={codigo}
                                marca={marca}
                                imagen={imagen}
                                descripcion={descripcion}
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
            <br></br>
        </Col>
    );
}
Producto.propTypes = {
  stock: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  codigo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
};

