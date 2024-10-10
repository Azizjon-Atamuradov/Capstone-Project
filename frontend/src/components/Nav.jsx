import React from 'react'
import {Link} from 'react-router-dom'


function Nav() {
  return (
   <>
   <div className='nav'> 
   <div className='navbar'>  
   

   

    <Link to="/home">
        Home
    </Link>

    <Link to="/brands">
       Brands
    </Link>


    <Link to="/Products">
        Products
    </Link>


    <Link to="/about">
        About
    </Link>


    <Link to="/contact">
        Contact
    </Link>



    </div>

   
    </div>
   
   
   
   
   
   </>
  )
}

export default Nav