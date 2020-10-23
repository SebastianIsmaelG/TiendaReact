import React from 'react';
import { Badge,Button,Popover,PopoverBody,PopoverHeader,Table} from 'reactstrap';
import './producto.css';
import {listaCarrito} from './listacarro.json';


class Carro extends React.Component{

    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
            
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState(prevState=>({
            popoverOpen: !prevState.popoverOpen
        }));
    }
 
    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i)=>{
                return(
                  <tr>
                      <td>{(i +=1)}</td>
                      <td>{(listaCarrito.titulo)}</td>
                      <td>{(listaCarrito.precio)}</td>
                  </tr>
                  
                );
            }  
        )
        return(    
            <div>
                <Button id="Popover1">
                    <span className="material-icons">shopping_cart</span>
                    <Badge>{arregloCarrito.length}</Badge>
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Carro de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
        
    }
}

export default Carro;