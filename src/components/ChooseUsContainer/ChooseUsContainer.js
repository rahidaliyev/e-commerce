import React from 'react'
import ChooseUsBox from '../ChooseUsBox/ChooseUsBox'
import "../ChooseUsContainer/ChooseUsContainer.css"
export default function ChooseUsContainer() {
  return (
    <div className='choose-us-box-container'>
        <ChooseUsBox name='Well Documentation'/>
        <ChooseUsBox name='Live Support'/>
        <ChooseUsBox name='Free Resource'/>
        <ChooseUsBox name='Regular Update'/>

    </div>
  )
}
