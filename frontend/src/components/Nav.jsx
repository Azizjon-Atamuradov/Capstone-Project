import React from 'react'
import {Link} from 'react-router-dom'


function Nav() {
  return (
   <>
   
   <div className="navbar">

    <Link to="/home">
        Home
    </Link>


    <Link to="/electronics">
        Electronics
    </Link>


    <Link to="/appliances">
        Appliances
    </Link>


    <Link to="/clothing">
        Clothing
    </Link>





   </div>
   
   
   
   
   
   
   </>
  )
}

export default Nav