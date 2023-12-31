
import { useState } from "react";
import { useEffect } from 'react'; 
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import { collection, getDocs,query,where } from "firebase/firestore";
import{db} from '../../Firebase/config';
import Loader from "../Loader/Loader";





const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    console.log (productos)
    const [loading, setLoading] = useState(true)
    console.log (productos)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef= collection(db , "productos")
        const q =categoryId
                        ? query(productosRef, where('categoria', "==", categoryId))
                        : productosRef
        getDocs(q)
        .then ((resp) =>{
        const docs = resp.docs.map((doc) => {
              return{
                id:doc.id,
                ...doc.data()
              }
        })

        setProductos(docs)
     })
     .catch(e => console.log(e))
     .finally(() =>setLoading (false))

    }, [categoryId])



    return (
        <div>
            {
                loading
                    ? <Loader/>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer