import React from 'react'
import bucket from "../../icons/bucketl.svg"
import "../FeaturedProductBox/FeaturedProductBox.css"
export default function FeaturedProductBox(props) {
  return (
    <div>

        <div className='featured-box-container'>
      <img id='feature-image' src={props.shekil} alt="picture"/>
      <h5 id="metn1">{props.metn1}</h5>
    
      <button id='preview'>Preview</button>
      <button id='add_to_cart'><img src={bucket}/></button>
     
    
      <div id='featured-price'><h3 id="featured-h3">$50</h3> <h6>258 sale</h6></div>
     

        </div>
    </div>
  )
}
