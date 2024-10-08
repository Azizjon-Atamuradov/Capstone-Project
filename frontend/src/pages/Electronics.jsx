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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Product from '../components/Product';

// function Electronics({ info }) {
//   console.log(info); // Log the info prop to check its value

//   if (!info || info.length === 0) {
//     return <div>No products available or loading...</div>;
//   }

//   const [products, setProducts] = useState([]);
//   const [createForm, setCreateForm] = useState({
//     image: "",
//     name: "",
//     price: ""
//   });
//   const [updateForm, setUpdateForm] = useState({
//     _id: null,
//     image: "",
//     name: "",
//     price: ""
//   });

//   const createProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/products", createForm);
//       setProducts([res.data.product, ...products]);
//       setCreateForm({ image: "", name: "", price: "" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateCreateFormField = (e) => {
//     const { name, value } = e.target;
//     setCreateForm({ ...createForm, [name]: value });
//   };

//   const handleUpdateFieldChange = (e) => {
//     const { name, value } = e.target;
//     setUpdateForm({ ...updateForm, [name]: value });
//   };

//   const toggleUpdate = (product) => {
//     setUpdateForm({
//       _id: product._id,
//       image: product.image,
//       name: product.name,
//       price: product.price
//     });
//   };

//   const updateProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const { image, name, price } = updateForm;
//       const res = await axios.put(`http://localhost:5000/api/products/${updateForm._id}`, { image, name, price });
//       const newProducts = [...products];
//       const productIndex = products.findIndex((product) => product._id === updateForm._id);
//       newProducts[productIndex] = res.data.product;
//       setProducts(newProducts);
//       setUpdateForm({ _id: null, image: "", name: "", price: "" });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteProduct = async (_id) => {
//     try {
//       const res = await axios.delete(`http://localhost:5000/api/products/${_id}`);
//       const newProducts = products.filter((product) => product._id !== _id);
//       setProducts(newProducts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     setProducts(info);
//   }, [info]);

//   return (
    
//     <div className="elecPage">
      
//       <div className="formMajor">
//         <p>Create A New Product</p>
//         <form onSubmit={createProduct}>
//           <input
//             type="url"
//             className="newFm"
//             name="image"
//             value={createForm.image}
//             placeholder="Upload Image Url"
//             onChange={updateCreateFormField}
//           />
//           <input
//             type="text"
//             className="newFm"
//             name="name"
//             value={createForm.name}
//             placeholder="Enter Name"
//             onChange={updateCreateFormField}
//           />
//           <input
//             type="text"
//             className="newFm"
//             name="price"
//             value={createForm.price}
//             placeholder="Enter Price"
//             onChange={updateCreateFormField}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         </div>

        
//         {updateForm._id && (
//           <>
//           <div className="updat">
//             <h1>Update</h1>
//             <div className="formAdmin">
//               <form onSubmit={updateProduct}>
//                 <input
//                   type="url"
//                   name="image"
//                   value={updateForm.image}
//                   placeholder="Enter image URL"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   value={updateForm.name}
//                   placeholder="Enter Name"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <input
//                   type="text"
//                   name="price"
//                   value={updateForm.price}
//                   placeholder="Enter Price"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <button type="submit">Submit</button>
                
//               </form>
//               </div>
//             </div>
//           </>
//         )}
    

//       <div className="mainProduct">
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => (
//             <div key={product._id}>
//               <Product data={product} deleteFunc={deleteProduct} editFunc={toggleUpdate} />
//             </div>
//           ))
//         ) : (
//           <div>No products available</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Electronics;
//////////////////////////////////////////
// /// 3 variat
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Product from '../components/Product';

// function Electronics({ info }) {
//   console.log(info); // Log the info prop to check its value

//   const [products, setProducts] = useState([]);
//   const [createForm, setCreateForm] = useState({
//     image: "",
//     name: "",
//     price: ""
//   });
//   const [updateForm, setUpdateForm] = useState({
//     _id: null,
//     image: "",
//     name: "",
//     price: ""
//   });
//   const [isLoading, setIsLoading] = useState(false); // Loading state

//   useEffect(() => {
//     setProducts(info);
//   }, [info]);

//   const createProduct = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5000/api/products", createForm);
//       setProducts([res.data.product, ...products]);
//       setCreateForm({ image: "", name: "", price: "" });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const updateCreateFormField = (e) => {
//     const { name, value } = e.target;
//     setCreateForm({ ...createForm, [name]: value });
//   };

//   const handleUpdateFieldChange = (e) => {
//     const { name, value } = e.target;
//     setUpdateForm({ ...updateForm, [name]: value });
//   };

//   const toggleUpdate = (product) => {
//     setUpdateForm({
//       _id: product._id,
//       image: product.image,
//       name: product.name,
//       price: product.price
//     });
//   };

//   const updateProduct = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const { image, name, price } = updateForm;
//       const res = await axios.put(`http://localhost:5000/api/products/${updateForm._id}`, { image, name, price });
//       const newProducts = [...products];
//       const productIndex = products.findIndex((product) => product._id === updateForm._id);
//       newProducts[productIndex] = res.data.product;
//       setProducts(newProducts);
//       setUpdateForm({ _id: null, image: "", name: "", price: "" });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const deleteProduct = async (_id) => {
//     setIsLoading(true);
//     try {
//       const res = await axios.delete(`http://localhost:5000/api/products/${_id}`);
//       const newProducts = products.filter((product) => product._id !== _id);
//       setProducts(newProducts);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="elecPage">
//       {isLoading && <div>Loading...</div>}
//       <div className="formMajor">
//         <form onSubmit={createProduct}>
//           <input
//             type="url"
//             className="newFm"
//             name="image"
//             value={createForm.image}
//             placeholder="Upload Image Url"
//             onChange={updateCreateFormField}
//           />
//           <input
//             type="text"
//             className="newFm"
//             name="name"
//             value={createForm.name}
//             placeholder="Enter Name"
//             onChange={updateCreateFormField}
//           />
//           <input
//             type="text"
//             className="newFm"
//             name="price"
//             value={createForm.price}
//             placeholder="Enter Price"
//             onChange={updateCreateFormField}
//           />
//           <button type="submit">Submit</button>
//         </form>

//         {updateForm._id && (
//           <>
//             <h1>Update</h1>
//             <div className="formAdmin">
//               <form onSubmit={updateProduct}>
//                 <input
//                   type="url"
//                   name="image"
//                   value={updateForm.image}
//                   placeholder="Enter image URL"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <input
//                   type="text"
//                   name="name"
//                   value={updateForm.name}
//                   placeholder="Enter Name"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <input
//                   type="text"
//                   name="price"
//                   value={updateForm.price}
//                   placeholder="Enter Price"
//                   onChange={handleUpdateFieldChange}
//                 />
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="mainProduct">
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => (
//             product && product._id ? (
//               <div key={product._id}>
//                 <Product data={product} deleteFunc={deleteProduct} editFunc={toggleUpdate} />
//               </div>
//             ) : null
//           ))
//         ) : (
//           <div>No products available</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Electronics;

////4 variant
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

function Electronics({ info }) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [createForm, setCreateForm] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
    phone:"",
    location:""
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    image: "",
    name: "",
    price: "",
    description: "",
    phone:"",
    location:""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(info)) {
      setProducts(info);
      setFilteredProducts(info);
    }
  }, [info]);

  useEffect(() => {
    const filtered = products.filter(product => 
      product && product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const createProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/products", createForm);
      const newProduct = res.data.product;
      setProducts(prevProducts => [newProduct, ...prevProducts]);
      setCreateForm({ image: "", name: "", price: "" , description:"", phone:"", location:""});
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { image, name, price, description, phone, location } = updateForm;
      const res = await axios.put(`http://localhost:5000/api/products/${updateForm._id}`, { image, name, price, description, phone, location });
      const updatedProduct = res.data.product;
      setProducts(prevProducts => 
        prevProducts.map(product => product && product._id === updatedProduct._id ? updatedProduct : product)
      );
      setUpdateForm({ _id: null, image: "", name: "", price: "" , description:"", phone:"", location:""});
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (_id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/products/${_id}`);
      setProducts(prevProducts => prevProducts.filter(product => product && product._id !== _id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product && product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
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
    if (product && product._id) {
      setUpdateForm({
        _id: product._id,
        image: product.image,
        name: product.name,
        price: product.price,
        description: product.description,
        phone: product.phone,
        location: product.location
      });
    }
  };

  return (
    <div className="elecPage">
      
      {isLoading && <div>Loading...</div>}
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
           <input
            type="text"
            className="newFm"
            name="description"
            value={createForm.description}
            placeholder="Enter Description"
            onChange={updateCreateFormField}
          />
            <input
            type="text"
            className="newFm"
            name="phone"
            value={createForm.phone}
            placeholder="Enter Phone"
            onChange={updateCreateFormField}
          />
            <input
            type="text"
            className="newFm"
            name="location"
            value={createForm.location}
            placeholder="Enter Location"
            onChange={updateCreateFormField}
          />
          <button type="submit">Submit</button>
        </form>
           

        </div>

      

        {updateForm._id && (
          
          <div className="upd">
            <div className="formAdmin">
            <p>Edit</p>
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
                  <input
                  type="text"
                  name="description"
                  value={updateForm.description}
                  placeholder="Enter Description"
                  onChange={handleUpdateFieldChange}
                />
                  <input
                  type="text"
                  name="phone"
                  value={updateForm.phone}
                  placeholder="Enter Phone"
                  onChange={handleUpdateFieldChange}
                />
                  <input
                  type="text"
                  name="location"
                  value={updateForm.location}
                  placeholder="Enter Loation"
                  onChange={handleUpdateFieldChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            </div>
        )}
    

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="mainProduct">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts
            .filter(product => product && product._id) // Additional check to remove undefined products
            .map((product) => (
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

