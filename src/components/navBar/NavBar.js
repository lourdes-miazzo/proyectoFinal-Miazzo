import React from 'react'
import iconoLourdes from "./../../iconoLourdes.png"
import "./navBar.css"
import CardWidget from './CardWidget'
const NavBar = () => {
  return (
    <>
    <div className='ordenGral'>
        <img src={iconoLourdes} className="iconoL"/>
        <ul>
            <li><a href='#'>2021</a></li>
            <li><a href='#'>2020</a></li> 
            <li><a href='#'>2019</a></li>
            <li><a href='#'>2018</a></li>
            <li><a href='#'>2017</a></li> 
            <li><a href='#'>2016</a></li>
        </ul>
        <CardWidget />
    </div>

    </>
  )
}

export default NavBar