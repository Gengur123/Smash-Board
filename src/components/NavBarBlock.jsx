import React from 'react'
import smash from '../img/ORSmashLogo.png'
import './NavBarBlock.css'

function NavBarBlock () {

  return (
    <nav>
      <div class="sort">
        <img src={smash} alt="Smash"/>
        <h1>Oregon Smash Dashboard</h1>
      </div>
    </nav>
  )
}

export default NavBarBlock; 