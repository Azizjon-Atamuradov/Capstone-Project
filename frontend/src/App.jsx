import { useState, useEffect } from "react" 
import "./App.css";
import {Route, Routes} from "react-router-dom"
import axios from 'axios'

import Electronics from "./components/Electronics";
import Home from "./components/Home";
import Appliances from "./components/Appliances";
import Clothing from "./components/Clothing";
import Nav from "./components/Nav";
import Header from "./components/header"; 
import Searchbar from "./Searchbar";

function App() {
 
  const [products, setProducts] = useState([])

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
    <Route path="/electronics" element={<Electronics/>}/>
    <Route path="/appliances" element={<Appliances/>}/>
    <Route path="/clothing" element={<Clothing/>}/>

    </Routes>
    <Searchbar/>
           
    </>
  )
}

export default App
