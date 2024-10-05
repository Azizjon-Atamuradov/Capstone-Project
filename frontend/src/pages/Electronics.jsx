import React from 'react'
import Product from '../components/Product'
import { useState } from 'react';
import axios from 'axios'
function Electronics ({ info }) {
 
  if (!info || !info.data) {
      return <div>No products available or loading...</div>; 
  }
  ///////////////////////////////////////////////////////////
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

  /////////////////////////////////////////////////////////
  const createProduct = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/api/products", createForm)
    setProducts(() => [res.data.product, ...Product])
  
  setCreateForm(()=>({
    image:"",
    name:"",
    price:""
  }))
  
  }
  ////////////////////////////////////////////////////////
  const updateCreateFormField = (e) => {
    const {name, value} = e.target;
  
    console.log({name, value});
  
    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }))
  }
  ///////////////////////////////////////////////////////


  return (

    <div className="elecPage"> 
 {/* ---------------------------------------------- */}
    <div className="formMajor">

    {/* New Form */}
    <form onSubmit={createProduct}>

    <input 
    type="url" 
    className="newFm"
    name="image"
    value={createForm.image}
    placeholder='Upload Image Url'
    onChange={updateCreateFormField} 
    />

    <input 
    type="text" 
    className="newFm"
    name="name"
    value={createForm.name}
    placeholder='Enter Name'
    onChange={updateCreateFormField} 
    />


    <input 
    type="text" 
    className="newFm"
    name="price"
    value={createForm.price}
    placeholder='Enter Price'
    onChange={updateCreateFormField}  
    />

    <button type='submit'>Submit</button>

    </form>
    <p>New Product</p>
    {/* Update */}
    {/* Edit */}
    

    </div>
   {/* ---------------------------------------------- */}
      <div className='mainProduct'>
          {Array.isArray(info.data) && info.data.length > 0 ? (
              info.data.map((product) => (
                  <div key={product.id}> 
                      <Product data={product} /> 
                  </div>
              ))
          ) : (
              <div>No products available</div> 
          )}
      </div>
      </div>
  );
}

export default Electronics;
