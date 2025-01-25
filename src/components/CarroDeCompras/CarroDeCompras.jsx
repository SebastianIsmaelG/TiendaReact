import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import { useCarrito } from "../../context/CarritoContext.jsx";
import { useState } from "react";

export const CarroDeCompras = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const { carrito } = useCarrito(); // Obtener el carrito desde el contexto

  const tablaCarrito = carrito.map((item, i) => (
    <tr key={i}>
      <td>{item.cantidad}</td>
      <td>{item.titulo}</td>
      <td>$ {new Intl.NumberFormat().format(item.precio)}</td>
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
      <Button id="myPopover">
        <span className="material-icons">shopping_cart</span>
        <Badge id="badge1">{carrito.length}</Badge>
      </Button>
      <Popover isOpen={popoverOpen} target="myPopover" toggle={toggle}>
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
                <td colSpan={2}><strong>Total:</strong></td>
                <td>${sumaTotal()}</td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default CarroDeCompras;
