
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

function Products({ products, setProducts }) {

  
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
      const newProduct = res.data.data;
      setProducts(prevProducts => [ ...prevProducts, newProduct]);
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
      const updatedProduct = res.data.data;
      setProducts(prevProducts => {
        console.log(prevProducts)
        return (
          prevProducts.map(product => product && product._id === updatedProduct._id ? updatedProduct : product)
        )
      });
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
          <button className='btn_sub'   type="submit">Submit</button>
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
                <button className='btn_sub' type="submit">Submit</button>
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
        <button className='btn_sub_seacrh' onClick={handleSearch}>Search</button>
      </div>

      <div className="mainProduct">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts
            .filter(product => product && product._id)  
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

export default Products;

