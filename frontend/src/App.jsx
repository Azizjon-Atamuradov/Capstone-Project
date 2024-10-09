 
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Header from "./components/Header";  
import 'bootstrap/dist/css/bootstrap.min.css';
 
import Brands from "./pages/Brands";


function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      console.log(response);  
      setProducts(response.data.data);  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home info={products} />} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/Products" element={<Products setProducts={setProducts} products={products} />} />
        <Route path="/about" element={<About setProducts={setProducts} products={products} />} />
        <Route path="/contact" element={<Contact setProducts={setProducts} products={products}/>} />
      </Routes>
     
    </>
  );
}

export default App;

//////  variant 
 