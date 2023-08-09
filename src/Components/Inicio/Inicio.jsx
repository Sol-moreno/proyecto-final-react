import Carrousel from "../Carrousel/Carrousel"
import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Inicio.scss'



const Inicio= ()=>{

    return(
        <div className="Presentacion">
          <h1 className="Titulop">
            Bienvenidos a "Le Petite" Creaciones 3D
          </h1>
           <p className="Parrafop"> La mejor calidad en productos hechos con resina , impresora 3D y mucho mas!
          </p>
          <Carrousel/>
          <div>
            <Link to="/Productos" element={ <ItemListContainer /> }><button className="botonp" type="submit">Conoce todos nuestros PRODUCTOS!!</button></Link>

          </div>

        </div>
        
    )

}


export default Inicio
