import React, { createContext, useState, useContext } from "react";

const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito_storage") || "[]");
  });

  const agregarAlCarrito = (producto) => {  
    const carritoActualizado = [...carrito];
    const productoExistente = carritoActualizado.find(
      (item) => item.codigo === producto.codigo
    );
    if(productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      carritoActualizado.push(producto);
    }
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito_storage", JSON.stringify(carritoActualizado));
  };

  const eliminarDelCarrito = (codigo) => {
    const carritoActualizado = carrito.filter((item) => item.codigo !== codigo);
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito_storage", JSON.stringify(carritoActualizado));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
