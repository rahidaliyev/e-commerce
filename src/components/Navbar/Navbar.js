import React from 'react'
import "../Navbar/Navbar.css"
import DropDown from '../DropDown/DropDown'
import Logo from "../../icons/digi.svg"
import SignUp from '../SignUp/SignUp'
import Favorite from '../Favorite/Favorite'
import Magazine from '../Magazine/Magazine'
export default function navbar() {
  return (
    <header className='nav-container'>
      <div className="logo">
      <img  alt='logo' src={Logo}></img>
      </div>
        <DropDown/>
        <Favorite />
        <Magazine/>
        <SignUp/> 
    
     
    </header>
  )
}
