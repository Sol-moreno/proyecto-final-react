import {Link} from 'react-router-dom'
import './footer.scss'

const Footer = () => {


    return (
              <div className='footerTotal'>
              
                
               <div className="fondo-footer">
                <div>
                
                
                <ul className="linkFooter">
                <p><strong >Categorias</strong></p>    
                <Link className="linkFooter" to= "/productos/varios">Varios</Link>  
                <Link className="linkFooter" to="/productos/macetas">Macetas</Link>
                <Link className="linkFooter" to= "/productos/figuras anime">Figuras de Anime</Link>
            
                 </ul>
                 </div>
                 
                 

                <div>
                    <p><strong >Contactanos</strong></p>
                    <a href="https://wa.me/ 38741111" target="_blank">
                        <img src="/wpp.jpg" alt="icono-whatsapp" className="redesw" />
                    </a>
                </div>
                

                <div>
                <p><strong >Visitenos en Nuestras Redes</strong></p>

                    <a href="https://www.instagram.com/lepetitecreativity3d/">
                        <img src="/instagram.png" alt="icono-instagram" className="redes" />
                    </a>
                    <a href=" https://www.facebook.com/florencia.gonzalez.965">
                        <img src="/facebook (2).png" alt="icono-facebook" className="redes" />
                    </a>
                </div>

                </div>
                
                
            
            <div className="posit-fot">
                <p className="copy"> &copy; | Creado por "Le Petite" Creaciones 3D  | - Todos los derechos reservados - 2023.</p>
            </div>
        </div>
    )

}

export default Footer