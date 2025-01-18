import {Badge,Button,Popover,PopoverBody,PopoverHeader,Table,} from "reactstrap";
import PropTypes from 'prop-types';
import "../CarroDeCompras/CarroDeCompras.css";
import { useState } from "react";
import CarritoJson from "../../json/listacarro.json";

export const CarroDeCompras = () => {
  
  const [popoverOpen,setPopoverOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const listaCarrito = CarritoJson.listaCarrito || [];
  const toggle = () => setPopoverOpen(!popoverOpen);

  const sumaTotal = () => {
    return listaCarrito.reduce((total, item) => {
      const precio = parseInt(item.precio, 10) || 0;
      const cantidad = parseInt(item.cantidad, 10) || 0;
      return total + precio * cantidad;
    }, 0);
  };
  const arregloCarrito = listaCarrito.map((item, i) => (
    <tr key={i}>
      <td>{item.cantidad}</td>
      <td>{item.titulo}</td>
      <td>$ {new Intl.NumberFormat().format(item.precio)}</td>
    </tr>
  ));
  //Popover Warning
  const MyPopover = ({ placement = 'bottom', ...props }) => {
    return (
      <Popover placement={placement} {...props} />
    );
  };

  // Validación de las props de MyPopover
  MyPopover.propTypes = {
    placement: PropTypes.string, // Asegura que 'placement' sea de tipo string
  };

  return (
    <div>
      <Button id="Popover1">
        <span className="material-icons">shopping_cart</span>
        <Badge id="badge1">{listaCarrito.length}</Badge>
      </Button>
      <MyPopover placement={placement} isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Carro de compras</PopoverHeader>
        <PopoverBody>
          <Table borderless>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>{arregloCarrito}</tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="text-left" key="total">
                  <strong>Total :</strong>
                </td>
                <td>${sumaTotal()}</td>
              </tr>
              <tr>
                <td colSpan={2} >
                  <button className="btnCompra">Completar Compra</button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </MyPopover>
    </div>
  );
};
