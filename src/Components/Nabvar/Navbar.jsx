import logo from '../../assets/logo.jpg'
import {CartWidget} from '../CartWidget/CartWidget'
import MenuDesplegable from '../Menu desplegable/MenuDesplegable'
import './Navbar.scss'
import{Link} from 'react-router-dom'

export const Navbar = () => {



return (

    <header className="header">

        <div className="headerContainer">

         <nav>
            <ul className="numerador">
             
            <li>
                <CartWidget />
            </li>
            
            </ul>
           
            <img className="logo" src={logo}></img>
            <ul className="Navbar">
            <Link className="linkNavbar" to="/Inicio">Inicio</Link>
            <MenuDesplegable/>
             <Link className="linkNavbar" to= "/QuienesSomos">Quienes Somos</Link>
             <Link className="linkNavbar" to= "/Contacto"> Contacto</Link>
             
            </ul>
             
            
         </nav>
        </div>
    </header>
)


}