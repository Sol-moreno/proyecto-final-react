import carrito from '../../assets/carrito.jpg'
import './CartWidget.scss'
import{Link}from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Contexto/CartContext'


export const CartWidget = () => {
    const{ totalCantidad } = useContext(CartContext)


return (
    <div className='numerador'>
        <Link to ="/cart" className= "cursor-pointer">
        <img className="carrito" src={carrito}></img>
         <span className='cero'>{totalCantidad()}</span> 
         </Link>
        </div>

)


}

