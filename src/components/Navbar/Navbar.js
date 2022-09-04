import React from 'react'
import "../Navbar/Navbar.css"
import DropDown from '../DropDown/DropDown'
import Logo from "../../icons/digi.svg"
import SignUp from '../SignUp/SignUp'
export default function navbar() {
  return (
    <div className='nav-container'>
        <img className="logo" src={Logo}></img>
        <DropDown/>

        <div>
<SignUp/>

        </div>
    </div>
  )
}
