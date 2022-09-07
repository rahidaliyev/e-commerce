import React from 'react'
import "./ChooseUsBox.css"
import ellipsepurple from "../../icons/Ellipse-58.svg"
export default function ChooseUsBox(props) {
  return (
    <div>
        <div className='choose-box'>
 <img id='choose-box-circle' src={ellipsepurple} alt='live-support'/>
 <img id='choose-box-img' src={props.image} alt='choose-box-img' />
 <h5>{props.name}</h5>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.</p>
        </div>
    </div>
  )
}
