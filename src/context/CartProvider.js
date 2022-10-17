import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {}, [cart]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success m-2",
          cancelButton: "btn btn-danger m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title:
            "El producto ya esta en el carrito. Quieres agregarlo de todos modos?",
          text: `Se sumarán ${quantity} unidad/es al producto ya existente en tu carrito`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si, quiero agregarlo",
          cancelButtonText: "No, cancelalo",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Agregado!",
              "Se añadió la cantidad!",
              "success"
            );
            const newProdCount = {
              ...cart.find((product) => product.id === item.id),
            };
            const newCart = cart.filter((producto) => producto.id !== item.id);
            newProdCount.quantity = newProdCount.quantity + quantity;
            setCart([...newCart, { ...newProdCount }]);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "No añadiste la cantidad nueva"
            );
          }
        });
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
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
