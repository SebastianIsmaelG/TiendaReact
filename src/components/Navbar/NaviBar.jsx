import {Navbar,NavbarBrand,Nav,NavItem,NavLink,Collapse,NavbarToggler,Input,} from "reactstrap";
import CarroDeCompras from "../CarroDeCompras/CarroDeCompras";
import "../Navbar/NaviBar.css";
import React, { useState } from "react";

export const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" className="navbar navbar-expand-md flex-column flex-md-row">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-md-4 d-flex align-items-center">
            <img className="logo" src="https://i.ibb.co/WHqZFx1/store-icon-icons-com-54371.png" alt="logo" />
            <NavbarBrand href="/" className="mr-auto">
              <span className="nombre_tienda">Nombre Tienda</span>
            </NavbarBrand>
          </div>
          <div className="col-md-8">
            <Input type="search" placeholder="Buscar productos..." className="w-100 mx-3" />
          </div>
        </div>

        <div className="row w-100 mt-3">
          <div className="col d-flex align-items-center">
            <div className="w-100">
              <NavbarToggler onClick={toggle} className="mr-2" />

              <Collapse isOpen={isOpen} navbar className="w-100">
                <Nav className="ml-auto d-flex flex-column flex-md-row w-100" navbar>
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
