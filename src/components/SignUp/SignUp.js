import React from 'react'
import '../SignUp/SignUp.css'
import Person from "../../icons/user-fill.svg"
export default function SignUp() {
  return (
    <div>
<div className='sign-up-container'>
<img src={Person} alt="person" className='sign-up-person' />
<button>Sign Up</button>

</div>
    </div>
  )
}
