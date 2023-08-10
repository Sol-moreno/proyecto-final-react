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
         <Link className="linkNavbar" to= "/Contacto"> Contacto</Link>
             
                <CartWidget />
            <img className="logo" src={logo}></img>
            <ul className='Navbar'>
            <Link className="linkNavbar" to="/Inicio">Inicio</Link>
            <Link className="linkNavbar" to= "/productos/varios">Varios</Link>  
             <Link className="linkNavbar" to="/productos/macetas">Macetas</Link>
             <Link className="linkNavbar" to= "/productos/figuras anime">Figuras de Anime</Link>
             <Link className="linkNavbar" to= "/QuienesSomos">Quienes Somos</Link>
           
            </ul>
             
            
         </nav>
        </div>
    </header>
)


}