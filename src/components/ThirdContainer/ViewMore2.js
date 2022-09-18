import React from 'react'
import FeaturedProductBox from '../FeaturedProductBox/FeaturedProductBox'
import featured1 from "../../icons/fetured1.svg"
import featured3 from "../../icons/fetured3.svg"
export default function ViewMore() {
  return (
    <div>
      
         <div id='view-more-boxes'>
        <FeaturedProductBox  shekil={featured3} metn1="Hazel - Clean Minimalist Multi-Pu..." metn2="" />
        <FeaturedProductBox  shekil={featured1} metn1="Monstroid2 - Multipurpose Modular..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        
      </div>
    </div>
  )
}
