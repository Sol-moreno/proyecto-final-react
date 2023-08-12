import { useContext, useState } from "react";
import { CartContext } from "../Contexto/CartContext";
import { collection, getDocs, writeBatch, where, query, documentId, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { Link, Navigate } from "react-router-dom";
import { Formik , Form, Field , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './Checkout'

 


const schema = Yup.object().shape({
   nombre: Yup.string().min(6,"El nombre es demasiado corto")
               .max(20,'El nombre excede los 20 caracteres')
               .required("Este campo es obligatorio"),
  direccion:Yup.string().min(6,"El dato ingresado es demasiado corto")
                .max(20,'La dirección excede los 20 caracteres')
                .required("Este campo es obligatorio"),
   email: Yup.string().required("Este campo es obligatorio")
                .email('El email es invalido'),
   otro:  Yup.string()
})

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

  const handleSubmit = async (values) => {
    

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
     <div className="ordenFinal">
     <h2 className="tituloOrden"> Tu compra se registro con exito</h2>
     <hr />
      <p className="tituloOrden" > Tu numero de orden es : <strong> {tiketId}</strong> </p>
      <Link to="/Inicio" className="btn btn-success mx-3">Volver al inicio</Link>

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

      <Formik
      initialValues={{
        nombre: '',
        email: '',
        direccion: '',
        otro: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}

   >
      {()=>(
        <Form>
          <Field placeholder="Nombre y Apellido" className= "form-control my-2" type="text" name="nombre"/>
          <ErrorMessage name= "nombre" component= "p"/>
          <Field placeholder="Email"className= "form-control my-2" type="text" name="email"/>
          <ErrorMessage name= "email" component= "p"/>
          <Field placeholder="Dirección"className= "form-control my-2" type="text" name="direccion"/>
          <ErrorMessage name= "direccion" component= "p"/>
          <Field placeholder="Otro"className= "form-control my-2" type="text" name="otro"/>
          <ErrorMessage name= "otro" component= "p"/>
          <br />
          <button type="submit" className="btn btn-success"> Enviar </button>
        </Form>
      )}

      </Formik>

  


    </div>


  )}

export default Checkout 