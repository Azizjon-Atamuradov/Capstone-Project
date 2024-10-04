import React from 'react'
import Product from '../components/Product'

function Electronics ({ info }) {
  // Check if info and info.data are available
  if (!info || !info.data) {
      return <div>No products available or loading...</div>; // Show a message if there are no products
  }

  return (
      <div className='mainProduct'>
          {Array.isArray(info.data) && info.data.length > 0 ? (
              info.data.map((product) => (
                  <div key={product.id}> {/* Use product.id as the unique key for each product */}
                      <Product data={product} /> {/* Product component */}
                  </div>
              ))
          ) : (
              <div>No products available</div> // Message if there are no products
          )}
      </div>
  );
}

export default Electronics;
