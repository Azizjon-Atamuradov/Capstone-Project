// import { useState, useEffect } from "react" 
// import "./App.css";
// import {Route, Routes} from "react-router-dom"
// import axios from 'axios'

// import Electronics from "./pages/Electronics";
// import Home from "./pages/Home";
// import Appliances from "./pages/Appliances";
// import Clothing from "./pages/Clothing";
// import Nav from "./components/Nav";
// import Header from "./components/header"; 
 

// function App() {
 
//   const [products, setProducts] = useState([]) ///kerak
 
 

// return (
//     <>
//     <Header/>
//     <Nav/>

    










  
//     <Routes>
      
//     <Route path="/home" element={<Home info={products}/>}/>

     
//     <Route path="/electronics"   element={<Electronics info={products} />}/>
    
//     <Route path="/appliances" element={<Appliances/>}/>

//     <Route path="/clothing" element={<Clothing/>}/>

//     </Routes>
   
   
   
  
           
//     </>
//   )
// }

// export default App
////// 2 variant

// import { useState, useEffect } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import axios from 'axios';

// import Electronics from "./pages/Electronics";
// import Home from "./pages/Home";
// import Appliances from "./pages/Appliances";
// import Clothing from "./pages/Clothing";
// import Nav from "./components/Nav";
// import Header from "./components/Header"; // Ensure the file name matches

// function App() {
//   const [products, setProducts] = useState([]);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/products");
//       console.log(response); // Log the entire response
//       setProducts(response.data.data); // Adjust based on actual response structure
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       <Header />
//       <Nav />
//       <Routes>
//         <Route path="/home" element={<Home info={products} />} />
//         <Route path="/electronics" element={<Electronics info={products} />} />
//         <Route path="/appliances" element={<Appliances />} />
//         <Route path="/clothing" element={<Clothing />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
///////////////////////////////
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
      console.log(response); // Log the entire response
      setProducts(response.data.data); // Adjust based on actual response structure
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
        <Route path="/electronics" element={<Electronics info={products} />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
    </>
  );
}

export default App;

////// 4 variant 
 