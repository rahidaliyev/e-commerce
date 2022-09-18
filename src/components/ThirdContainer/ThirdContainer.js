import React from 'react'
import viewmore from "../../icons/Read More Posts.svg"

import FeaturedProductBox from '../FeaturedProductBox/FeaturedProductBox'
import "./ThirdContainer.css"
import featured1 from "../../icons/fetured1.svg"
import featured3 from "../../icons/fetured3.svg"
export default function ThirdContainer() {
  return (
    <>

<div className='third-container'>
<div className='inner-third-container'>
<h2>Let’s Check Out News Product Theme Templates & Plugin</h2>
<nav>
    <div className='nav-categories'>
        <a>All Categories</a>
        <a>HTML Design</a>
        <a>WP  Themes</a>
        <a>CMS Themes</a>
        <a>eCommerce</a>
        <a>Blogging</a>
        <a>UI Templates</a>

    </div>
</nav>

<div className='template-and-plugin-boxes'>
        <FeaturedProductBox  shekil={featured1} metn1="Hazel - Clean Minimalist Multi-Pu..." metn2="" />
        <FeaturedProductBox  shekil={featured1} metn1="Monstroid2 - Multipurpose Modular..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>
        <FeaturedProductBox  shekil={featured3} metn1="Techno - IT Solutions & Business ..."/>


</div>
<a id='btn-view-more' ><img src={viewmore}/></a>
</div>
</div>
    </>
  )
}
