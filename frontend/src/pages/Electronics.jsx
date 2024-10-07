// import React from 'react'
// import Product from '../components/Product'
// import { useState, useEffect } from 'react';
// import axios from 'axios'
 



// function Electronics ({ info }) {


//   /////////////////////////////
//   if (!info || !info.length === 0) {
//     return <div>No products available or loading...</div>; 
//    }
//   ////////////////////////////////////////////////////////////////

 
//   const [products, setProducts] = useState([]) ///kerak

//   ///////////////////////////////////////////////////////////
//   const [createForm, setCreateForm] = useState({
   
//     image:"",
//     name:"",
//     price:""
//   }) ////////////////////
// ////////////////////////////////////////////////////
//   ///// update form

//   const [updateForm, setUpdateForm] = useState({
//     _id: null,
//     image:"",
//     name:"",
//     price:""
//   }) ////////////////////////////////////////

//   /////////////////////////////////////////////////////////
//   const createProduct = async (e) => {
//     try { 
//     e.preventDefault()
//     const res = await axios.post("http://localhost:5000/api/products", createForm)
//     getProducts(() => [res.data.product, ...Product])
  
//   setCreateForm(()=>({
//     image:"",
//     name:"",
//     price:""
//   }))
//   } catch (error) {
//     console.log(error);
//   }
//   }/////////////////////////////
//   ////////////////////////////////////////////////////////
//   const getProducts = async () => {

//     console.log("Hi");

//     try { 
//     const response = await axios.get("http://localhost:5000/api/products")
//     //const info = await response.data
//     setProducts(response.data.products)

//     //await getProducts(info.products)
  
//    } catch (error) {
//     console.log(error);
//    }
//   }///////////////

  



//   /////////////////////////////////////////////////////////////////
//   const updateCreateFormField = (e) => {
//     const {name, value} = e.target;
  
//     console.log({name, value});
  
//     setCreateForm(() => ({
//       ...createForm,
//       [name]: value,
//     }))
//   }
//   ///////////////////////////////////////////////////////
//   const handleUpdateFieldChange = (e) => {
//     const {value, name} = e.target;
//     setUpdateForm(() => ({
//       ...updateForm,
//       [name]: value,
//     }))
//   }
//   ////////////////////
//   const toggleUpdate = (product) => {
//     console.log("Current product : ", product);
//     setUpdateForm({
//       _id: product._id,
//       image: product.image,
//       name: product.name,
//       price: product.price
     
//     })
//   }
//   ///////////////////////////////////////////////////
//   const updateProduct = async (e) => {
//     e.preventDefault();
//     const {image, name, price} = updateForm;
  
//     const res = await axios.put(`http://localhost:5000/api/products/${updateForm._id}`,
//       {image, name, price}
//     )
//     console.log(res);

//     const newProducts = [...Product];
//     const productIndex = Product.findIndex((product) => {
//       return product._id === updateForm._id;
//     })
//     newProducts[productIndex] = res.data.product;
//     newProducts(newProducts)
  
//     setUpdateForm ({
//       _id: null,
//       image:"",
//       name:"",
//       price:""
  
//     })
//   }
//   /////////////////////////////////////////////////////////////////////
//   const deleteProduct = async (_id) => {
//     const res = await axios.delete(`http://localhost:5000/api/products/${_id}`)
//     console.log(res);

//     const newProducts = [...Product].filter((product) => {
//       return product._id !== _id;
//     })
//     newProducts(newProducts);
//   }

//   useEffect(() => {
//   getProducts()
//    console.log("Hi");
//   },[info]) 


//   ///////////////////////////////////////////////////////////////////
//   return (

//     <div className="elecPage"> 
//  {/* ---------------------------------------------- */}
//     <div className="formMajor">

//     {/* New Form */}
//     <form onSubmit={createProduct}>

//     <input 
//     type="url" 
//     className="newFm"
//     name="image"
//     value={createForm.image}
//     placeholder='Upload Image Url'
//     onChange={updateCreateFormField} 
//     />

//     <input 
//     type="text" 
//     className="newFm"
//     name="name"
//     value={createForm.name}
//     placeholder='Enter Name'
//     onChange={updateCreateFormField} 
//     />


//     <input 
//     type="text" 
//     className="newFm"
//     name="price"
//     value={createForm.price}
//     placeholder='Enter Price'
//     onChange={updateCreateFormField}  
//     />

//     <button type='submit'>Submit</button>

//     </form>

//    {updateForm._id && (
//     <>
//     <h1>Update</h1>
//     <div className="formAdmin">
//       <form onSubmit={updateProduct}>
//         <input 
//         type="url"
//         name='image'
//         value={updateForm.image}
//         placeholder='Enter image URL'
//         onChange={handleUpdateFieldChange}
//         />
//         <input type="text"
//         name='name'
//         value={updateForm.name}
//         placeholder='Enter Name'
//         onChange={handleUpdateFieldChange} 
//         />
//         <input type="text"
//         name='price'
//         value={updateForm.price}
//         placeholder='Enter Price' 
//         onChange={handleUpdateFieldChange}
//         />
//         <button type='submit'>Submit</button>

//       </form>
//     </div>
//     </>
//    )}
//    </div>
//    {/* ---------------------------------------------- */}
//       <div className='mainProduct'>
//           {Array.isArray(info) && info.length > 0 ? (
//               info.map((product) => (
//                   <div key={product._id}> 
//                       <Product data={product} deleteFunc={deleteProduct} editFunc={toggleUpdate}/> 
//                   </div>
//               ))
//           ) : (
//               <div>No products available</div> 
//           )}
//       </div>
//       </div>
//   );
// }

// export default Electronics;
/////// 2 variant
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

function Electronics({ info }) {
  console.log(info); // Log the info prop to check its value

  if (!info || info.length === 0) {
    return <div>No products available or loading...</div>;
  }

  const [products, setProducts] = useState([]);
  const [createForm, setCreateForm] = useState({
    image: "",
    name: "",
    price: ""
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    image: "",
    name: "",
    price: ""
  });

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/products", createForm);
      setProducts([res.data.product, ...products]);
      setCreateForm({ image: "", name: "", price: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const toggleUpdate = (product) => {
    setUpdateForm({
      _id: product._id,
      image: product.image,
      name: product.name,
      price: product.price
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const { image, name, price } = updateForm;
      const res = await axios.put(`http://localhost:5000/api/products/${updateForm._id}`, { image, name, price });
      const newProducts = [...products];
      const productIndex = products.findIndex((product) => product._id === updateForm._id);
      newProducts[productIndex] = res.data.product;
      setProducts(newProducts);
      setUpdateForm({ _id: null, image: "", name: "", price: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/products/${_id}`);
      const newProducts = products.filter((product) => product._id !== _id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setProducts(info);
  }, [info]);

  return (
    
    <div className="elecPage">
      
      <div className="formMajor">
        <p>Create A New Product</p>
        <form onSubmit={createProduct}>
          <input
            type="url"
            className="newFm"
            name="image"
            value={createForm.image}
            placeholder="Upload Image Url"
            onChange={updateCreateFormField}
          />
          <input
            type="text"
            className="newFm"
            name="name"
            value={createForm.name}
            placeholder="Enter Name"
            onChange={updateCreateFormField}
          />
          <input
            type="text"
            className="newFm"
            name="price"
            value={createForm.price}
            placeholder="Enter Price"
            onChange={updateCreateFormField}
          />
          <button type="submit">Submit</button>
        </form>

        {updateForm._id && (
          <>
            <h1>Update</h1>
            <div className="formAdmin">
              <form onSubmit={updateProduct}>
                <input
                  type="url"
                  name="image"
                  value={updateForm.image}
                  placeholder="Enter image URL"
                  onChange={handleUpdateFieldChange}
                />
                <input
                  type="text"
                  name="name"
                  value={updateForm.name}
                  placeholder="Enter Name"
                  onChange={handleUpdateFieldChange}
                />
                <input
                  type="text"
                  name="price"
                  value={updateForm.price}
                  placeholder="Enter Price"
                  onChange={handleUpdateFieldChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </>
        )}
      </div>

      <div className="mainProduct">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <Product data={product} deleteFunc={deleteProduct} editFunc={toggleUpdate} />
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
//////////////////////////////////////////
 