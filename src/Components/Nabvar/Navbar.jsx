import{Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'
import logo from '../../assets/logo.jpg'
import Menu from '../Menu/Menu'

export const Navbar = () => {

    let productosEnCarrito = 0
   

return (

    <header className="header">

        <div className="headerContainer">

         <nav>
            <ul className="numerador">
            
                <CartWidget />
            
            
            <li> <p className="cero">{productosEnCarrito}</p></li>
            </ul>
             <img className="logo" src={logo}></img>
             
             
         </nav>
         <Menu/>
       
        </div>
    </header>
)


}