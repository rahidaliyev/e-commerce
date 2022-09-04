import React from 'react'
import "../Magazine/Magazine.css"
import magazine from "../../icons/shopping-bag-2-fill.svg"
export default function Magazine() {
  return (
    <div>
        <div className='magazine-container'>
   <img src={magazine}  className='magazine' alt="magazine"/>
 
        </div>
    </div>
  )
}
