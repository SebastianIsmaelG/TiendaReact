import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Input,
} from "reactstrap";
import CarroDeCompras from "../CarroDeCompras/CarroDeCompras";
import ProductosJson from "../../json/listaproducto.json";
import "../Navbar/NaviBar.css";
import React, { useState } from "react";

export const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { listaProductos } = ProductosJson; //Object 
    // Estado para almacenar el valor de la búsqueda
    const [searchTerm, setSearchTerm] = useState("");
    // Estado para almacenar las sugerencias
    const [suggestions, setSuggestions] = useState([]);
  
    // Función para manejar el cambio en el input
    const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
  
      // Filtrar productos que coincidan con la búsqueda (usando la propiedad "titulo")
      const filteredSuggestions = listaProductos.filter((producto) =>
        producto.titulo.toLowerCase().includes(value.toLowerCase())
      );
  
      // Actualizar las sugerencias
      setSuggestions(filteredSuggestions);
    };
  
    // Función para manejar la selección de una sugerencia
    const handleSuggestionClick = (producto) => {
      setSearchTerm(producto.titulo); // Establece el título del producto seleccionado
      setSuggestions([]); // Limpiar las sugerencias
    };

  return (
    <Navbar
      color="light"
      className="navbar navbar-expand-md flex-column flex-md-row"
    >
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <img
              className="logo"
              src="https://i.ibb.co/WHqZFx1/store-icon-icons-com-54371.png"
              alt="logo"
            />
            <NavbarBrand href="/" className="mr-auto">
              <span className="nombre_tienda">Nombre Tienda</span>
            </NavbarBrand>
          </div>
          <div className="col-md-8">
            <div style={{position: "relative"}}>
            <Input
              type="search"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Buscar productos..."
              className="w-100 mx-3"
            />
            {suggestions.length > 0 && (
              <ul className="w-100 mx-3"
                style={{
                  position: "absolute",
                  listStyle: "none",
                  padding: "0",
                  border: "1px solid #ccc",
                  width: "auto",
                  marginTop: "0",
                  backgroundColor: "#fff", // Fondo blanco
                  zIndex: 1000, // Asegura que esté por encima de otros elementos
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para mejor visibilidad
                }}
              >
                {suggestions.map((producto, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(producto)}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    {producto.titulo}
                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>
        </div>

        <div className="row w-100 mt-3">
          <div className="col d-flex align-items-center">
            <div className="w-100">
              <NavbarToggler onClick={toggle} className="mr-2" />

              <Collapse isOpen={isOpen} navbar className="w-100">
                <Nav
                  className="ml-auto d-flex flex-column flex-md-row w-100"
                  navbar
                >
                  <NavItem>
                    <NavLink className="nav_link" href="/components/">
                      Computación
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav_link" href="/components/">
                      Gaming y Streaming
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav_link" href="/">
                      Conectividad y Redes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav_link" href="/">
                      Ver Todo
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end">
            <div className="nav_carro">
              <CarroDeCompras />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};
