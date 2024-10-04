import { useState } from "react" 
import "./App.css";
import {Route, Routes} from "react-router-dom"


import Electronics from "./components/Electronics";
import Home from "./components/Home";
import Appliances from "./components/Appliances";
import Clothing from "./components/Clothing";
import Nav from "./components/Nav";
import Header from "./components/header"; 
import Searchbar from "./Searchbar";

function App() {
 

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
