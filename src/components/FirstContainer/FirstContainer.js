import React from 'react'
import companylogo from "../../icons/company-logos.svg"
import background from "../../icons/ellipse-boom.png"
import ChooseUsContainer from '../ChooseUsContainer/ChooseUsContainer'
import "../FirstContainer/FirstContainer.css"
import FirstSectionText from '../FirstSectionText/FirstSectionText'
import Navbar from "../Navbar/Navbar"
export default function FirstContainer() {
  return (
    <div>
<img id='background-circle' src={background} alt='background-circle'/>

<div className='first-container'>

<FirstSectionText/>
<div className='company-logo'>
<img id='companylogo' src={companylogo} alt='companylogo'/>


</div>
<h2 id='choose-us-h2'>Why Choose Us</h2>
<ChooseUsContainer/>
</div>

    </div>
  )
}
