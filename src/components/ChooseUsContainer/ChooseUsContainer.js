import React from 'react'
import "../ChooseUsContainer/ChooseUsContainer.css"
import ChooseUsBox from '../ChooseUsBox/ChooseUsBox'
import livesupport from "../../icons/Live-Support.svg"
import freeresource from "../../icons/Free-Resource.svg"
import regularupdate from "../../icons/Regular-Update.svg"
import welldoc from "../../icons/Well-Docum.svg"
export default function ChooseUsContainer() {
  return (
    
   
      <div className='choose-us-box-container'>
       
        <ChooseUsBox name='Well Documentation' image={welldoc}/>
        <ChooseUsBox name='Live Support' image={livesupport}/>
        <ChooseUsBox name='Free Resource' image={freeresource}/>
        <ChooseUsBox name='Regular Update' image={regularupdate}/>
        </div>
   
      

  
  )
}
