import React from 'react';
import { Badge,Button,Popover,PopoverBody,PopoverHeader,Table} from 'reactstrap';
import './producto.css';
import {listaCarrito} from './listacarro.json';


class Carro extends React.Component{

    constructor(){
        super();
        //Traemos el local storage del carro
        let carro= JSON.parse(localStorage.getItem("carrito"));
        console.log(carro);

        //Revisar en que momento se llama a carro de compras y setear el storage si es que no hay datos
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
    //sumatotal
    sumatotal(){
        let suma = 0;
        this.state.listaCarrito.map(
            (listaCarrito, i)=>{
                suma += parseInt(listaCarrito.precio);
                return(suma*1000)
            }
        );
        //. para el formato de precio total
        return(new Intl.NumberFormat().format(suma))
    }

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i)=>{
                return(
                  <tr>
                      <td key={(i +=1)} >{(i +=1)}</td>
                      <td key={(listaCarrito.titulo)} >{(listaCarrito.titulo)}</td>
                      <td key={new Intl.NumberFormat().format((listaCarrito.precio))}>$ {new Intl.NumberFormat().format((listaCarrito.precio))}</td>
                  </tr>
                  
                );
                
            }  
            
        )
        return(    
            <div>
                <Button id="Popover1">
                    <span className="material-icons">shopping_cart</span>
                    <Badge id="badge1">{listaCarrito.length}</Badge>
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
                            <tfoot>
                                <tr>
                                    <td colSpan="2" className="text-left"><strong>Total :</strong></td>
                                    <td>$ {this.sumatotal()}</td>
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
        
    }
}

export default Carro;