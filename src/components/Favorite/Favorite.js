import React from 'react'
import "../Favorite/Favorite.css"
import Heart from "../../icons/heart-3-fill.svg"
export default function Favorite() {
  return (
    <div>
        <div className='fav-container'> 
<img className='heart' src={Heart} alt="heart"/>
        </div>
    </div>
  )
}
