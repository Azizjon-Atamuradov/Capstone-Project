// import React from 'react'

// function Product({data}) {
//   return (
     
//     <div className="noteGoat">
//         <div className="productTitle">
//             {data.name}
//         </div>
//         <div className='productPrice'>{data.price} </div>
//          <img> {data.image} </img> 
//     </div>

//   )
// }

// export default Product


////////////////////////

import React from 'react';

function Product({ data }) {
    return (
    <div className='mainProduct'> 

        <div className='productContainer'>
            <img className="productPic" src={data.image} alt={data.name}   />
            <h3>{data.name}</h3>
            <p>Price: ${data.price}</p>
          
        </div>
    </div>
    );
}

export default Product;
