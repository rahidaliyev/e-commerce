import React from 'react'
import companylogo from "../../icons/company-logos.svg"
// import background from "../../icons/Ellipse-70.png"
import ChooseUsContainer from '../ChooseUsContainer/ChooseUsContainer'
import "../FirstContainer/FirstContainer.css"
import FirstSectionText from '../FirstSectionText/FirstSectionText'
import Navbar from "../Navbar/Navbar"
export default function FirstContainer() {
  return (
    <div>
<div className='first-container'>
<Navbar />
<FirstSectionText/>
<div className='company-logo'>
<img id='companylogo' src={companylogo} alt='companylogo'/>
{/* <img id='background-circle' src={background} alt='background-circle'/> */}

</div>
<ChooseUsContainer/>
</div>

    </div>
  )
}
