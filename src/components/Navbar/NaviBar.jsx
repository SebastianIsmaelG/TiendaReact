import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { CarroDeCompras } from "../CarroDeCompras/CarroDeCompras.jsx";
import "../Producto/Producto.css"; //cambiarrr
import "../Navbar/Navibar.css";
export const NaviBar = () => {
  return (
    <Navbar color="light" className="navbar navbar-expand-md">
      <img
        className="logo"
        src="https://i.ibb.co/WHqZFx1/store-icon-icons-com-54371.png"
        alt="log"
      ></img>
      <NavbarBrand href="/">
        <span className="nombre_tienda">Nombre Tienda</span>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar className="w-100">
        <Nav className="ml-auto d-flex w-100" navbar>
          <NavItem>
            <NavLink className="nav_link" href="/components/">
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav_link" href="/components/">
              Productos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav_link" href="/">
              Contacto
            </NavLink>
          </NavItem>
          <NavItem className="ml-auto nav_carro">
            <CarroDeCompras placement="bottom"/>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
