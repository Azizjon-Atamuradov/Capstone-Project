import { useState, useEffect } from "react" 
import "./App.css";
import {Route, Routes} from "react-router-dom"
import axios from 'axios'

import Electronics from "./pages/Electronics";
import Home from "./pages/Home";
import Appliances from "./pages/Appliances";
import Clothing from "./pages/Clothing";
import Nav from "./components/Nav";
import Header from "./components/header"; 
import Index from "./components"; 

function App() {
 
  const [products, setProducts] = useState(null)

  const getProducts = async () => {

    const response = await axios.get("http://localhost:5000/api/products")
    const info = await response.data
    await setProducts(info)
    
     

  }

  useEffect(() => {
    getProducts()
  },[])
 

  return (
    <>
    <Header/>
    <Nav/>
  
    <Routes>
      
    <Route path="/home" element={<Home/>}/>

     
    <Route path="/electronics"   element={<Electronics />}/>
    
    <Route path="/appliances" element={<Appliances/>}/>

    <Route path="/clothing" element={<Clothing/>}/>

    </Routes>
   
   {products ? (
    <Index info={products} /> ) : <p>No Products Available</p>
   }
   
  
           
    </>
  )
}

export default App
