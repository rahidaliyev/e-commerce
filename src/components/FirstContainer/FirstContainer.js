import React from 'react'
import "../FirstContainer/FirstContainer.css"
import FirstSectionText from '../FirstSectionText/FirstSectionText'
import Navbar from "../Navbar/Navbar"

export default function FirstContainer() {
  return (
    <div>
<div className='first-section-background'>
<Navbar />
<FirstSectionText/>
</div>

    </div>
  )
}
