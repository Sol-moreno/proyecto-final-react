import logo from '../../assets/logo.jpg'
import {CartWidget} from '../CartWidget/CartWidget'
import './Navbar.scss'
import{Link} from 'react-router-dom'

export const Navbar = () => {



return (

    <header className="header">

        <div className="headerContainer">

         <nav>
         <Link className="linkNavbar" to= "/Ubicacion"><img src="/ubicacion.png" alt="ubicacion" className='ubicacion' /> </Link>
             
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