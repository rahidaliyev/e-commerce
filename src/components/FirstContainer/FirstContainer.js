import React from 'react'
import background from "../../icons/Ellipse-70.svg"
import "../FirstContainer/FirstContainer.css"
import Navbar from "../Navbar/Navbar"
import Search from '../Search/Search'
export default function FirstContainer() {
  return (
    <div>
<div style={{backgroundImage:`url(${background})`}} className='first-section-background'>
<Navbar />
<Search/>
</div>

    </div>
  )
}
