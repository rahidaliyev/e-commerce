import React, { useState } from 'react'
import FeaturedProductBox from "../FeaturedProductBox/FeaturedProductBox"
import ViewMore from './ViewMore'
import "../FeaturedProductBox/FeaturedProductBox.css"
import "./SecondContainer.css"
import featured1 from "../../icons/fetured1.svg"
import featured3 from "../../icons/fetured3.svg"
import viewmore from "../../icons/Read More Posts.svg"
export default function SecondContainer() {
  const [showText, setShowText] = useState(false);
  const showMore = () => setShowText(true);
  return (
    <div>
      <div id='outer-feature-box'>
        <h1>Featured Products</h1>
      <div className='featured-product-box-container'>
        <FeaturedProductBox  shekil={featured1} metn1="Hazel - Clean Minimalist Multi-Pu..." metn2="" />
        <FeaturedProductBox  shekil={featured1} metn1="Monstroid2 - Multipurpose Modular..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>

      </div>
      <div  id='viewmmore'>
      {showText ? <ViewMore /> : null} 
      <a id='btn-view-more' onClick={showMore}><img src={viewmore}/></a>
      </div>
      </div>
    </div>
  )
}
