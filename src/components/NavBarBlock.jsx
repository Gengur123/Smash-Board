import React from 'react'
import smash from '../img/ORSmashLogo.png'
import './NavBarBlock.css'

function NavBarBlock () {

  return (
    <nav>

        <img src={smash} alt="Smash"/>
        <h1>Oregon Smash Board</h1>
        <img src={smash} alt="Smash"/>
    </nav>
  )
}

export default NavBarBlock; 