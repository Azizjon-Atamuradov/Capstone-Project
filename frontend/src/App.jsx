 
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Electronics from "./pages/Electronics";
import Home from "./pages/Home";
import Appliances from "./pages/Appliances";
import Clothing from "./pages/Clothing";
import Nav from "./components/Nav";
import Header from "./components/Header";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


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
        <Route path="/electronics" element={<Electronics setProducts={setProducts} products={products} />} />
        <Route path="/appliances" element={<Appliances setProducts={setProducts} products={products} />} />
        <Route path="/clothing" element={<Clothing setProducts={setProducts} products={products}/>} />
      </Routes>
    </>
  );
}

export default App;

//////  variant 
 