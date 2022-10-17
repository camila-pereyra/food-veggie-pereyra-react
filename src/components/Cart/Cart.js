import { useContext, useEffect, useState } from "react";
import { doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const { cart, removeItem, clear, calculateTotal } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [orderGenered, setOrderGenered] = useState(false);
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const db = getFirestore();

  const createOrder = () => {
    const order = {
      buyer: {
        name: `${values.name}`,
        surname: `${values.surname}`,
        phone: `${values.phone}`,
        email: `${values.email}`,
      },
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };
    const query = collection(db, "orders");
    addDoc(query, order)
      .then((resp) => {
        Swal.fire({
          title: `Felecitaciones ${values.name}! Su numero de orden es ${resp.id}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        updateStockProducts();
        clear();
      })
      .catch(() =>
        alert("No se pudo realizar su compra. Vuelve a intentarlo mas tarde")
      );
  };
  const updateStockProducts = () => {
    cart.forEach((element) => {
      const queryDoc = doc(db, "items", element.id);
      updateDoc(queryDoc, {
        category: element.category,
        description: element.description,
        image: element.image,
        price: element.price,
        tittle: element.tittle,
        stock: element.stock - element.quantity,
      })
        .then(() => console.log("Stock actualizado"))
        .catch(() => console.log("Error al actualizar stock"));
    });
  };
  useEffect(() => {
    setTotal(calculateTotal());
  }, [cart]);

  const buy = () => {
    if (!values.name || !values.email || !values.surname || !values.phone) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete todos los campos del Checkout!",
      });
    } else {
      createOrder();
    }
  };
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };
  return cart.length !== 0 ? (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <ul className="cartRow">
        <li className="cartColumnImage">Imagen</li>
        <li className="cartColumnTittle">Titulo</li>
        <li className="cartColumnDescription">Descripcion</li>
        <li className="cartColumnPrice">Precio</li>
        <li className="cartColumnQuantity">Cantidad</li>
        <li className="cartColumnTotal">Total</li>
        <li className="cartColumnDelete">Eliminar</li>
      </ul>
      {cart.map((item) => (
        <div key={item.id} className="cartRow">
          <div className="cartColumnImage">
            <img src={item.image} alt={item.tiitle} />
          </div>
          <p className="cartColumnTittle">{item.tittle} </p>
          <p className="cartColumnDescription">{item.description}</p>
          <p className="cartColumnPrice">${item.price}</p>
          <p className="cartColumnQuantity">{item.quantity}</p>
          <p className="cartColumnTotal">${item.price * item.quantity}</p>
          <div className="cartColumnDelete">
            <button
              className="cartColumnDelete-button"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
      <h3 className="total">Total: ${total}</h3>
      <div className="container-button">
        <button onClick={() => clear()}>Vaciar carrito</button>
        <button onClick={() => setOrderGenered(true)}>Crear orden</button>
      </div>
      {orderGenered && (
        <>
          <h1 className="mt-3 mb-5 pt-5">Checkout</h1>
          <Form className="mb-3">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="alguien123@hotmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre aquí"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido aquí"
                name="surname"
                value={values.surname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="movil">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="text"
                placeholder="1534567890"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="container-button">
              <Button type="button" onClick={buy}>
                Finalizar compra
              </Button>
            </div>
          </Form>
        </>
      )}
    </div>
  ) : (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <h3>El carrito de compras esta vacío</h3>
      <Link to={"/"} className="btnShowProducts">
        Ver productos
      </Link>
    </div>
  );
};

export default Cart;
