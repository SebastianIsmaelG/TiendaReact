import React from 'react';
import {Modal,Button,Container,ModalBody,CardGroup,Col,Row} from 'reactstrap'

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
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <h6>{this.props.props.titulo}</h6>
                                </Col>
                            </Row>
                        </Container>
                        <Button close onClick={this.toggle} />
                        <Button onClick={this.toggle}>Agregar al carrito</Button>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;