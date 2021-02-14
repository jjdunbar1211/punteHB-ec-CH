import React from 'react'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import logo from '../images/puntehb-logo-icon.svg'

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center bg-pink-200 border-pink-400 border-b-2 ">
            {/* <NavLink to="/" exact ><CartWidget /></NavLink>           */}
            <div>
                <NavLink to="/">
                    <img className="w-44 h22 ml-4" src={logo} alt="logo-puntehb"/>
                </NavLink>
            </div>
            <div className="mr-4">
                <ul className="flex justify-end items-center">
                    {/* eslint-disable-next-line */}
                    <li className="ml-4 border-b-2 border-pink-200 hover:border-pink-500 transform hover:scale-105 transition-all ease-out duration-300">
                        <NavLink to="/category/materas" className="text-xl font-semibold"> Materas </NavLink>
                    </li>
                    {/* eslint-disable-next-line */}
                    <li className="ml-4 border-b-2 border-pink-200  hover:border-pink-500 transform hover:scale-105 transition-all ease-out duration-300">
                        <NavLink to="/category/mochilas" className="text-xl font-semibold"> Mochilas </NavLink>
                    </li>
                    {/* eslint-disable-next-line */}
                    <li className="ml-4 border-b-2 border-pink-200  hover:border-pink-500 transform hover:scale-105 transition-all ease-out duration-300 ">
                        <NavLink to="/category/rinoneras" className="text-xl font-semibold"> Riñoneras </NavLink>
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
