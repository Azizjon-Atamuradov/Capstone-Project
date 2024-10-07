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
 

function App() {
 
  const [products, setProducts] = useState([]) ///kerak
 

return (
    <>
    <Header/>
    <Nav/>

    










  
    <Routes>
      
    <Route path="/home" element={<Home info={products}/>}/>

     
    <Route path="/electronics"   element={<Electronics info={products} />}/>
    
    <Route path="/appliances" element={<Appliances/>}/>

    <Route path="/clothing" element={<Clothing/>}/>

    </Routes>
   
   
   
  
           
    </>
  )
}

export default App
