import {Badge,Button,Popover,PopoverBody,PopoverHeader,Table,} from "reactstrap";
import "../Producto/Producto.css"; //cambiarr
import { useState } from "react";
import CarritoJson from "../../json/listacarro.json";

export const CarroDeCompras = () => {

  const [popoverOpen,setPopoverOpen] = useState(false);
  const listaCarrito = CarritoJson.listaCarrito;
  const toggle = () => setPopoverOpen(!popoverOpen);

  const sumaTotal = () => {
    let suma = 0;
    listaCarrito.forEach((item) =>{
      suma += parseInt(item.precio,10);
    });
    return new Intl.NumberFormat().format(suma);
  }
  const arregloCarrito = listaCarrito.map((item, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{item.titulo}</td>
      <td>$ {new Intl.NumberFormat().format(item.precio)}</td>
    </tr>
  ));

  return (
    <div>
      <Button id="Popover1">
        <span className="material-icons">shopping_cart</span>
        <Badge id="badge1">{listaCarrito.length}</Badge>
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
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
            <tbody>{arregloCarrito}</tbody>
            <tfoot>
              <tr>
                <td colSpan="2" className="text-left" key="total">
                  <strong>Total :</strong>
                </td>
                <td>${sumaTotal()}</td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </Popover>
    </div>
  );
};
