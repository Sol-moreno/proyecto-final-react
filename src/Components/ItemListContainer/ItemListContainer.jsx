
import { useState } from "react";
import { useEffect } from 'react'; 
import ItemList from "../ItemList/ItemList.jsx";
import {useParams} from 'react-router-dom';
import {collection, getDocs,query,where} from 'firebase/firestore';
import { db } from "../../Firebase/config.js";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    console.log (productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar la referencia (sync)
        const productosRef = collection (db, "productos")
        console.log(categoryId)
        const q = categoryId
                    ? query(productosRef,  where('categoria', "==", categoryId) )
                    : productosRef
        // 2.- llamar a esa ref (async)
        console.log (q)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

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