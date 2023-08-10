import { useState } from 'react'
import {Navbar} from './Components/Nabvar/Navbar'
import ItemDetailContainer from "./Components/ItemDetailConteiner/ItemDetailConteiner"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Inicio from './Components/Inicio/Inicio'
import Footer from "./Components/Footer/Footer";
import Contacto from "./Components/Contacto/Contacto"
import QuienesSomos from "./Components/Quienes Somos/QuienesSomos"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { CartProvider } from './Components/Contexto/CartContext';
import CartView from './Components/CartView/CartView'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
   
         <Routes>
            
         
         <Route path="/Inicio" element={ <Inicio/> }/>
         <Route path="/"element={ <Inicio /> }/>
         <Route path='/productos'element ={ <ItemListContainer /> }/>
         <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
         <Route path= "/detail/:itemId" element= {<ItemDetailContainer/>}  />
         {/* <Route path="/checkout" element={ <Checkout /> }/> */}
         <Route path= "/Contacto" element= {<Contacto/>}  />
         <Route path= "/QuienesSomos" element= {<QuienesSomos/>}  />
         <Route path="/cart" element={ <CartView /> }/>
         <Route path= "*" element= {<Navigate to ="/"/>}  />
          

         </Routes>

         <Footer/>
      
         </BrowserRouter>
         </CartProvider>

        
      
     
  ) 
}

  


export default App
