import { useState } from "react";
import PropTypes from "prop-types";
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import { useCarrito } from "../../context/CarritoContext.jsx";
import "./CarroDeCompras.css";

export const CarroDeCompras = () => {
  //Modal Carro de Compras
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

  //Obtiene el carro desde CarritoContext y lo generamos
  const { carrito } = useCarrito();
  const tablaCarrito = carrito.map((item, i) => (
    <tr key={i}>
      <td className="">{item.cantidad}</td>
      <td className="">{item.titulo}</td>
      <td className=""><span className="me-2">$</span>{item.precio.toLocaleString('es-CL')}</td>
      <td className=""><button className="unset"><span className="material-icons">delete</span></button></td>
    </tr>
  ));
  const sumaTotal = () => {
    return carrito.reduce((total, item) => {
      const precio = parseInt(item.precio, 10) || 0;
      const cantidad = parseInt(item.cantidad, 10) || 0;
      return total + precio * cantidad;
    }, 0);
  };


  return (
    <div>

      <Button id="myPopover" aria-label="Abrir carro de compras">
        <span className="material-icons" aria-hidden="true">shopping_cart</span>
        <Badge id="badge1" aria-label={`Artículos en el carrito: ${carrito.length}`}>{carrito.length}</Badge>
      </Button>

      <Popover className="popover-content" isOpen={popoverOpen} placement={placement} target="myPopover" toggle={toggle}>
        <PopoverHeader>Carro de compras</PopoverHeader>
        <PopoverBody className="p-2">
          <Table className="cart-table table-borderless" style={{ tableLayout: "auto", width: "100%" }}>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{tablaCarrito}</tbody>
            <tfoot>
              <tr>
                <td colSpan={2}><strong>Total:</strong></td>
                <td className="justify-content-between align-items-center"><span className="me-2">$</span>{sumaTotal().toLocaleString('es-CL')}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className={`btnCompra ${ carrito.length === 0 ? "disabled" : "enabled"}`} disabled={carrito.length === 0}> Completar Compra </button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default CarroDeCompras;
