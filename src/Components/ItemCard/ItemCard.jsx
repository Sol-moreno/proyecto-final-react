import { Link } from "react-router-dom"
 import Card from 'react-bootstrap/Card';
import './ItemCard.scss'

const ItemCard = ({item}) => {

    return (
        <div className="col-2 m-3 " >
        <Card style ={{ width: '15rem'}}>
        <Card.Img style ={{height:'15rem'}} src={item.img} alt= {item.nombre}/>
        <Card.Body className="cardInicio">
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text className="precio"> $ {item.precio} </Card.Text>
          <Link to={`/detail/${item.id}`} className='btn btn-success'>Ver más</Link>
        </Card.Body>
      </Card>
        </div>
                
    )
}

export default ItemCard