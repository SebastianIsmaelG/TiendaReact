import {Badge,Button,Popover,PopoverBody,PopoverHeader,Table,} from "reactstrap";
import PropTypes from "prop-types";
import "../CarroDeCompras/CarroDeCompras.css";
import { useState, useEffect } from "react";
import CarritoJson from "../../json/listaproducto.json"; 

const CarroDeCompras = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const [listaCarrito, setListaCarrito] = useState([]);

  const toggle = () => setPopoverOpen(!popoverOpen);

  useEffect(() => {
    // Cargar los datos del localStorage o inicializar con los productos de CarritoJson
    const carritoStorage = JSON.parse(localStorage.getItem("carrito_storage") || "[]");
    CarritoJson.listaProductos; // Cambiado aquí
    

    // Guardar los datos en localStorage si no existen
    if (!localStorage.getItem("carrito_storage")) {
      localStorage.setItem("carrito_storage", JSON.stringify(carritoStorage));
    }

    // Actualizar el estado del carrito
    setListaCarrito(carritoStorage);
  }, []);

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


  // Componente para el Popover con validación de props
  const MyPopover = ({ placement = "bottom", ...props }) => {
    return (
      <Popover placement={placement} {...props} transition={{ timeout: 150 }} />
    );
  };

  MyPopover.propTypes = {
    placement: PropTypes.string, 
  };

  return (
    <div>
      <Button id="myPopover">
        <span className="material-icons">shopping_cart</span>
        <Badge id="badge1">{listaCarrito.length}</Badge>
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
            <tbody>{arregloCarrito}</tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="text-left" key="total">
                  <strong>Total :</strong>
                </td>
                <td>${sumaTotal()}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className={`btnCompra ${ listaCarrito.length === 0 ? "disabled" : "enabled"}`} disabled={listaCarrito.length === 0}> Completar Compra </button>
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