import React from 'react'
import smash from '../img/ORSmashLogo.png'
import './NavBarBlock.css'

function NavBarBlock () {

  return (
    <nav>
      <div class="sort" id="nav">
        <img src={smash} alt="Smash"/>
        <h1>Oregon Smash Board</h1>
      </div>
    </nav>
  )
}

export default NavBarBlock; 