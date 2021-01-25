import React from 'react'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import logo from '../images/puntehb-logo-icon.svg'

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-pink-200 shadow">
            {/* <NavLink to="/" exact ><CartWidget /></NavLink>           */}
            <div>
                <NavLink to="/">
                    <img className="w-44 h22 ml-4" src={logo} alt="logo-puntehb"/>
                </NavLink>
            </div>
            <div className="mr-4 text-xl font-semibold">
                <ul className="flex justify-end">
                    {/* eslint-disable-next-line */}
                    <li className="ml-4">
                        <NavLink to="/category/materas"> Materas </NavLink>
                    </li>
                    {/* eslint-disable-next-line */}
                    <li className="ml-4">
                        <NavLink to="/category/mochilas"> Mochilas </NavLink>
                    </li>
                    {/* eslint-disable-next-line */}
                    <li className="ml-4">
                    <NavLink to="/category/rinoneras"> Riñoneras </NavLink>
                    </li>
                    <li className="ml-4">
                        {/* eslint-disable-next-line */}
                        <NavLink to={"/cart"}><CartWidget /></NavLink>  
                    </li>
                </ul>
            </div>
      </nav>
      
    )
}

export default NavBar
