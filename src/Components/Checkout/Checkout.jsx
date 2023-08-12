import { useContext, useState } from "react";
import { CartContext } from "../Contexto/CartContext";
import { collection, getDocs, writeBatch, where, query, documentId, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { Link, Navigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

  const [tiketId, setTiketId] = useState(null)

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    direccion: '',
    otro: ''
  })

  const handleChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value

    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad, })),
      total: totalCompra(),
      fyh: new Date()
    }

    const batch = writeBatch(db)
    const ticketRef = collection(db, "ticket")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

    const productos = await getDocs(q)
    const outOfStock = []

    productos.docs.forEach((doc) => {
      const item = cart.find(prod => prod.id === doc.id)
      const stock = doc.data().stock

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad
        })

      } else {
        outOfStock.push(item)
      }

    })

    if (outOfStock.length === 0) {
      await batch.commit()
      const doc = await addDoc(ticketRef, orden)
      vaciarCarrito()
      setTiketId(doc.id)
    } else {
      alert("No hay stock del producto ")
    }

  }
  if (tiketId) {
    return (
      <div>
        <h2> tu compra se registro con exito</h2>
        <hr />
        <p> tu numero de orde es : <strong> {tiketId}</strong> </p>
        <Link to="/Inicio">volver</Link>

      </div>
    )
  }

  if (cart.lenght === 0) {
    return <Navigate to="/Inicio" />
  }


  return (

    <div className="ordenFinal">
      <h2>Complete los campos para finalizar la compra</h2>
      <p>Gracias por elegirnos!!</p>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.nombre}
          type="text"
          className="form-control my-2"
          placeholder="Nombre"
          name="nombre"
        />

        <input
          onChange={handleChange}
          value={values.email}
          type="text"
          className="form-control my-2"
          placeholder="email"
          name="email"
        />
        <input
          onChange={handleChange}
          value={values.direccion}
          type="text"
          className="form-control my-2"
          placeholder="Dirección"
          name="direccion"
        />
        <input
          onChange={handleChange}
          value={values.otro}
          type="text"
          className="form-control my-1"
          placeholder="Otros"
          name="otro"
        />

        <button className=" btn btn-success" type="submit"> Enviar </button>

      </form>







    </div>


  )


}

export default Checkout 