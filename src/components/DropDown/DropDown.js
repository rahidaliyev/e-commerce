import React from 'react'
import Square from "../../icons/function-fill.svg"
import Triangle from "../../icons/arrow-down-s-fill.svg"
import '../DropDown/DropDown.css'
export default function DropDown() {
  const myFunc=()=>{
    console.log("saalm")
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div>
        <div className='btn-container'>
<img  src={Square} alt="square" className="circle responsive-img"/>
            <button className='dropbtn' onClick={myFunc} style={{height:'50px',width:"271px"}}>Categories</button>
            <div id="myDropdown" class="dropdown-content">
    <a href="#">Products</a>
    <a href="#">Software</a>
    <a href="#">Fashion</a>
  </div>
<img src={Triangle} alt="triangle" className='triangle'/>
        </div>
    </div>
  )
}
