import React from 'react'
import "../Navbar/Navbar.css"
import DropDown from '../DropDown/DropDown'
import Logo from "../../icons/digi.svg"
import SignUp from '../SignUp/SignUp'
import Favorite from '../Favorite/Favorite'
import Magazine from '../Magazine/Magazine'
export default function navbar() {
  return (
    <div className='nav-container'>
        <img className="logo" alt='logo' src={Logo}></img>
        <DropDown/>

        <div>
            <Favorite/>
            <Magazine/>
<SignUp/>

        </div>
    </div>
  )
}
