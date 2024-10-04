// import React from 'react'
// import Product from '../components/Product';


// function Home({info}) {
//   return (
    
//     <div>{Array.isArray(info.data) && info.data.map((product,i) => {
//       return (
//           <div key={i}>
//               <Product key={product.id} data={product} />
//           </div>
//       );
//   })}</div>
//   )
// }




// export default Home
 
import React from 'react';
import Product from '../components/Product';

function Home({ info }) {
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

export default Home;
