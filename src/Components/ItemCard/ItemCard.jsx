import { Link } from "react-router-dom"
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';


const ItemCard = ({item}) => {

    return (
        <div className="col-2 m-3 ">
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={item.img} alt= {item.nombre}/>
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
          precio:$ {item.precio} </Card.Text>
          <Link to={`/detail/${item.id}`} className='btn btn-success'>Ver más</Link>
        </Card.Body>
      </Card>
        </div>
                
    )
}

export default ItemCard