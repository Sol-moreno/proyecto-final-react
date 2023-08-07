const Footer = () => {


    return (
        <div>
            <br /><br /><br />
            
            <div className="fondo-footer">
                <h3 className="texto-footer">
                    ¡Te invitamos a seguirnos en nuestras redes sociales!
                </h3>
                <div className="redes-footer">
                    <a href="https://www.instagram.com/rom.deco.design/">
                        <img src="../src/assets/instagram.png" alt="icono-instagram" className="redes" />
                    </a>
                    <a href=" https://www.facebook.com/florencia.gonzalez.965">
                        <img src="../../../public/facebook (2).png" alt="icono-facebook" className="redes" />
                    </a>
                    <a href="https://wa.me/ 593811111111">
                        <img src="" alt="icono-whatsapp" className="redes" />
                    </a>
                </div>
                <br />
            </div>
            <div className="posit-fot">
                <small> &copy; | Creado por Programer Team | - Todos los derechos reservados.</small>
            </div>
        </div>
    )

}

export default Footer