import { Link } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const MenuList = ( {close} ) => {


    return (
        <nav onClick={(e) => e.stopPropagation()}  className="menulist">
            <AiOutlineCloseCircle onClick={close} className='ml-auto'/>
            <Link onClick={close} className="menulist__link" to="/">Inicio</Link>
            <Link onClick={close} className="menulist__link" to="/productos/figuras anime">Figuras de Anime</Link>
            <Link onClick={close} className="menulist__link" to="/productos/macetas">Macetas</Link>
            <Link onClick={close} className="menulist__link" to="/productos/varios">Varios</Link>
            <Link onClick={close} className="menulist__link" to="/QuienesSomos">Quienes Somos</Link>
            
        </nav>
    )
}

export default MenuList