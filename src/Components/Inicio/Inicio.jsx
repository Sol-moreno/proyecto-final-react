import Carrousel from "../Carrousel/Carrousel"
import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Inicio.scss'
import Loader from "../Loader/Loader"



const Inicio= ()=>{

    return(
        <div className="Presentacion">
          <h1 className="Titulop">
            Bienvenidos a "Le Petite" Creaciones 3D
          </h1>
           <p className="Parrafop"> Las macetas mas lindas ideales para plantas pequeñas.
                         Figuras de todo tipo ,modelos y colores variados 🌈
          </p>
          <Carrousel/>
          <div>
            <Link to="/Productos" element={ <ItemListContainer /> }><button className="botonp" type="submit">Conoce todos nuestros PRODUCTOS!!</button></Link>

          </div>

          

        </div>
        
    )

}


export default Inicio
