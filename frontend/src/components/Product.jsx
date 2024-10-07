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
//// 2 variant
import React from 'react';

function Product({ data, deleteFunc, editFunc }) {
    return (
        <>   
    <div className='mainProduct'> 

        <div className='productContainer'>
            <img className="productPic" src={data.image} alt={data.name}   />
            <h3>{data.name}</h3>
            <p>Price: ${data.price}</p>
        </div>

       

    </div>
    <div className="bottom">
            <button onClick={()=> {
                editFunc(data)
            }}
            >
                Edit{" "}
            </button>
            <button 
            onClick={()=> {
                deleteFunc(data._id)
            }}
            >
                Delete{""}
            </button>
        </div>
    </>
    );
}

export default Product;
////////////////////