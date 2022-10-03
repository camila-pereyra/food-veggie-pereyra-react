import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {}, [cart]);

  const addToCart = (item, quantity) => {
    isInCart(item.id)
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El producto ya se encuentra en el carrito!",
        })
      : setCart([...cart, { ...item, quantity }]);
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const removeItem = (id) => {
    const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart);
  };
  const clear = () => {
    setCart([]);
  };
  const calculateTotal = () => {
    return cart.reduce(
      (valorPasado, valorActual) =>
        valorPasado + valorActual.price * valorActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, clear, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
