import React from 'react'
import Product from './Product'


function index({info}) {
  return (
    <div>


<div className="dashTitle">Products Dashboard</div>
<div className="productsContainer">

{Array.isArray(info) && info.map((product) => {
    return (
        <>
            <Product key={product.id} data={product} />
        </>
    );
})}




</div>





    </div>
  )
}

export default index