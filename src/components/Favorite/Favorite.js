import React from 'react'
import "../Favorite/Favorite.css"
import Heart from "../../icons/heart-3-fill.svg"
export default function Favorite() {
  const saymuname=()=>{
    console.log("bitch");
  }
  return (
    <div>
        <div className='fav-container'> 
        <span onClick={saymuname}>
<img className='heart' src={Heart} alt="heart"/>
        </span>
        <div id='num_cart'><span>1</span></div>
        </div>
    </div>
  )
}
