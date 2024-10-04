import React from 'react'

function Product({data}) {
  return (
     
    <div className="noteGoat">
        <div className="productTitle">
            {data.name}
        </div>
        <div>{data.price} </div>
    </div>

  )
}

export default Product