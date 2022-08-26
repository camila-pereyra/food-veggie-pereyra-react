import cart from '../../images/cart.png';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <a href="" className="cartWidget"><img src={cart} alt="carrito" /></a>
  )
}

export default CartWidget;