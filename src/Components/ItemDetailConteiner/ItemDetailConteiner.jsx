import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import ItemDetail from "../ItemDetail/ItemDetail"
import {doc , getDoc} from "firebase/firestore"
import{db}  from "../../Firebase/config"


const ItemDetailConteiner=()=>{
    const[ item, setItem]=useState(null)
    const[loading, setLoading]=useState (true)

    const{itemId}= useParams()

    useEffect(() => {
    setLoading(true)

    const itemRef =doc(db,"productos",itemId)
    getDoc(itemRef)
    .then((doc)=>{
        setItem({
            id:doc.id,
            ...doc.data()



        })


     } )
     .catch(e =>console.log(e))
     .finally (() => setLoading(false))



    }, [])

    return(

        <div className= "container my-5">
            {
                loading
                ?<Loader/>
                :<ItemDetail item={item}/>


            }

        </div>
    )

}


export default ItemDetailConteiner