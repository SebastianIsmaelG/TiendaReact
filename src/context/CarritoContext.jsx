import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CarritoContext = createContext();

// Hook para usar el contexto más fácilmente
export const useCarrito = () => useContext(CarritoContext);

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito_storage") || "[]");
  });

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    const carritoActualizado = [...carrito];
    const productoExistente = carritoActualizado.find(
      (item) => item.codigo === producto.codigo
    );

    if (productoExistente) {
      productoExistente.cantidad += producto.cantidad;
    } else {
      carritoActualizado.push(producto);
    }

    setCarrito(carritoActualizado);
    localStorage.setItem("carrito_storage", JSON.stringify(carritoActualizado));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
