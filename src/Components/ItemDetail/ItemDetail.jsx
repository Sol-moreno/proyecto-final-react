import {useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../Contexto/CartContext"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'

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

        <div className="row">
        <Card style={{ width: '30rem' }}>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Body>
        <Card.Img variant="top" src={item.img} alt= {item.nombre}/>
          <Card.Title> {item.descripcion}</Card.Title>
          <Card.Text>
            $ {item.precio} </Card.Text>
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