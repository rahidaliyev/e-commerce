import React from 'react'
import "./Footer.css"
import helicopter from "../../icons/Rectangle-172.svg"
import path from "../../icons/Path.svg"
export default function Footer() {
  return (
    <>
     <footer className='footer-container'>
        <div className='footer-first'>
<div><h4>Newsletter</h4></div>

<div className='newsletter-container'>
<input id='footer-input' type='email' placeholder='Your email'/>
<div id='heli-container'>
<img src={helicopter} alt="heli"/> 
<img id='path' src={path} alt="inner-heli"/>
</div>

</div>
        </div>
        <div className='footer-second'>
<div id='footer-last'>
    <a>HTML Design</a>
    <a>WP  Themes</a>
    <a>CMS Themes</a>
    <a>eCommerce</a>
    <a>Blogging</a>
    <a>UI Templates</a>

</div>
        </div>
        </footer>   
    </>
  )
}
