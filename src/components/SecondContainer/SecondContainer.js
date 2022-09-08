import React from 'react'
import FeaturedProductBox from "../FeaturedProductBox/FeaturedProductBox"
import "../FeaturedProductBox/FeaturedProductBox.css"
import "./SecondContainer.css"
import featured1 from "../../icons/fetured1.svg"
import featured3 from "../../icons/fetured3.svg"
import viewmore from "../../icons/Read More Posts.svg"
export default function SecondContainer() {
  return (
    <div>
      <div>
        <h1>Featured Products</h1>
      <div className='featured-product-box-container'>
        <FeaturedProductBox  shekil={featured1} metn1="Hazel - Clean Minimalist Multi-Pu..." metn2="" />
        <FeaturedProductBox  shekil={featured1} metn1="Monstroid2 - Multipurpose Modular..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>

      </div>
      <div  id='viewmmore'>
      <a><img src={viewmore}/></a>
      </div>
     
      </div>
    </div>
  )
}
