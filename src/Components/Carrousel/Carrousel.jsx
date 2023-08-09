
import './Carrousel.scss'
import Carousel from 'react-bootstrap/Carousel';

function Carrousel() {
  return (
    <Carousel fade>
  
      <Carousel.Item>
      <img
          className="fotoCarrousel"
          src="/imagen4.jpg"
          alt="First slide"
        />
          {/* <Carousel.Caption>
          <h3>Los Mejores Diseños</h3>
          <p>Podes encontrar este y muchos productos mas! Se realizan personalizados.</p>
        </Carousel.Caption> */}
       
      </Carousel.Item>
      <Carousel.Item>
    
      <img
          className="fotoCarrousel"
          src="/carrousel.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Estamos en Calama Chile</h3>
          <p>Diseños personalizados , piezas unicas , pintadas a mano.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="fotoCarrousel"
          src="/pulpo.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Gracias por visitarnos!!</h3>
        
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;