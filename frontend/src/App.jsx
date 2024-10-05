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
 
  


  const getProducts = async () => {

    const response = await axios.get("http://localhost:5000/api/products")
    const info = await response.data
    await setProducts(info)
    console.log(info);
  }

const createProduct = async (e) => {
  e.preventDefault()
  const res = await axios.post("http://localhost:5000/api/products", createForm)
  setProducts(() => [res.data.product, ...products])

setCreateForm(()=>({
  image:"",
  name:"",
  price:""
}))

}


const updateCreateFormField = (e) => {
  const {name, value} = e.target;

  console.log({name, value});

  setCreateForm(() => ({
    ...createForm,
    [name]: value,
  }))
}




















  const [products, setProducts] = useState()

  // create form
  const [createForm, setCreateForm] = useState({
    image:"",
    name:"",
    price:""
  })

  ///// update form

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    image:"",
    name:"",
    price:""
  })



   useEffect(() => {
     getProducts()
   },[])

 

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
   
   {/* {products ? (
    <Index info={products} /> ) : <p>No Products Available</p>
   } */}
   
  
           
    </>
  )
}

export default App
