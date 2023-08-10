
import { useState } from "react";
import { useEffect } from 'react'; 
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from 'react-router-dom';
import{pedirDatos}from '../helpers/pedirDatos.js'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log (productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then(r => {
            if (categoryId) {
                setProductos( r.filter(prod => prod.categoria === categoryId) )
            } else {
                setProductos(r)
            }
        })
        .catch(e => console.log(e))
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])



    return (
        <div>
            {
                loading
                    ? <h2> Cargando </h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer