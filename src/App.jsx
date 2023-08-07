import { useState } from 'react'
import {Navbar} from './Components/Nabvar/Navbar'
import ItemDetailContainer from "./Components/ItemDetailConteiner/ItemDetaiConteiner"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto"
import QuienesSomos from "./Components/Quienes Somos/QuienesSomos"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
   
         <Routes>
            
         
         <Route path="/" element={ <ItemListContainer /> }/>
         <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
         <Route path= "/detail/:itemId" element= {<ItemDetailContainer/>}  />
         <Route path= "/Contacto" element= {<Contacto/>}  />
         <Route path= "/QuienesSomos" element= {<QuienesSomos/>}  />
         {/* { <Route path="/cart" element={ <CartView /> }/> } */}
         <Route path= "*" element= {<Navigate to ="/"/>}  />
          

         </Routes>

         <Footer/>
      
         </BrowserRouter>

        
      
     
  ) 
}

  


export default App
