 

import React from 'react';

function Product({ data, deleteFunc, editFunc }) {
  return (
    <>
      <div className='mainProduct'> 
        <div className='productContainer'>
          <img className="productPic" src={data.image} alt={data.name} />
          <h5>{data.name}</h5>
          <h6>Price: ${data.price}</h6>
          <h6>{data.description}</h6>
          <h6>{data.phone}</h6>
          <h6>{data.location}</h6>
          
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => editFunc(data)}>
          Edit
        </button>
        <button onClick={() => deleteFunc(data._id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Product;
