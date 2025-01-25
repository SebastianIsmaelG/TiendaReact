import {Badge,Button,Popover,PopoverBody,PopoverHeader,Table,} from "reactstrap";
import PropTypes from "prop-types";
import "../CarroDeCompras/CarroDeCompras.css";
import { useState, useEffect } from "react";
//import CarritoJson from "../../json/listaproducto.json"; No lo necesito po si trabajo los datos del localstorage

const CarroDeCompras = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const toggle = () => setPopoverOpen(!popoverOpen);
  const MyPopover = ({ placement = "bottom", ...props }) => {
    return (
      <Popover placement={placement} {...props}/>
    );
  };

  MyPopover.propTypes = {
    placement: PropTypes.string, 
  };

  //Manejo del localstorage hay que hacerlo use state par que vuelva a renderizar
  const setcarritoStorage = JSON.parse(localStorage.getItem("carrito_storage") || "[]");

  const tablaCarrito = setcarritoStorage.map((item, i) => (
    <tr key={i}>
      <td>{item.cantidad}</td>
      <td>{item.titulo}</td>
      <td>$ {new Intl.NumberFormat().format(item.precio)}</td>
    </tr>
  ));

  const sumaTotal = () => {
    return setcarritoStorage.reduce((total, item) => {
      const precio = parseInt(item.precio, 10) || 0;
      const cantidad = parseInt(item.cantidad, 10) || 0;
      return total + precio * cantidad;
    }, 0);
  };



  return (
    <div>
      <Button id="myPopover">
        <span className="material-icons">shopping_cart</span>
        <Badge id="badge1">{setcarritoStorage.length}</Badge>
      </Button>
      <MyPopover
        placement={placement}
        isOpen={popoverOpen}
        target="myPopover"
        toggle={toggle}
      >
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
            <tbody>{tablaCarrito}</tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="text-left" key="total">
                  <strong>Total :</strong>
                </td>
                <td>${sumaTotal()}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className={`btnCompra ${ setcarritoStorage.length === 0 ? "disabled" : "enabled"}`} disabled={setcarritoStorage.length === 0}> Completar Compra </button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </MyPopover>
    </div>
  );
};
export default CarroDeCompras;