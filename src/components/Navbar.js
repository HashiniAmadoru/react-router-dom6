import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
    const navlinkstyle = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
  return (
    <div>
        <nav className='primary-nav'>
            <NavLink style={navlinkstyle} to='/'>Home</NavLink>
            <NavLink style={navlinkstyle} to='/about'>About</NavLink>
            <NavLink style={navlinkstyle} to='/Products'>Products</NavLink>
        </nav>
    </div>
  )
}

export default Navbar