import React from 'react'
import logo from '../logo.png'
import './Styles.css'


const Header = () => {
    return (
        <header >
            <img  className='logo' src={logo} alt='' />
        </header>
    )
}


export default Header