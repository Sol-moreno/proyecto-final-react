import {useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../Contexto/CartContext"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    
  const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
      const newItem = {
          ...item,
          cantidad
      }

      agregarAlCarrito(newItem)
  }
    
    return (

        <div className= 'cardEstilo'>
        <Card style={{ width: '25rem' }}>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Body>
        <Card.Img variant="top" src={item.img} alt= {item.nombre}/>
        
          <Card.Text>{item.descripcion}</Card.Text>
          <Card.Title> $ {item.precio} </Card.Title>

        </Card.Body>
         </Card>
        
            {  
                       isInCart(item.id)
                    
                       ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                         
                       : <ItemCount 
                           max={item.stock}
                           cantidad={cantidad}
                           setCantidad={setCantidad}
                           agregar={handleAgregar}
                       />
                
            }
                        
        </div>
    )
        }

        export default ItemDetail