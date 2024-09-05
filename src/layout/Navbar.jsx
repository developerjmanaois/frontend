import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {

    return (
        <nav>

            <div className="navbar">
                <div className="navbar-start navTop">
                    {/* <a className="cursor-pointer text-xl lg:ml-72"><img className='logo' src={logo} alt="" /></a> */}
                    <NavLink to="/" className='cursor-pointer text-xl lg:ml-72 mt-7'>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                
                <div className="navbar-center hidden lg:flex mt-20 z-50">
                    <ul className="menu-horizontal px-3 font-semibold uppercase gap-10">
                        <li>
                            <NavLink to="/" className='hover:text-pink'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='hover:text-pink'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/features" className='hover:text-pink'>
                                Features
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className='hover:text-pink cursor-pointer' >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='hover:text-pink' >
                                Contact
                            </NavLink>
                        </li>
                        <li className='xs:hidden'>
                            <NavLink to="/login" className='hover:text-pink' >
                                Log in
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="hover:text-pink uppercase pt-12 mr-2 lg:hidden">Log in</a> */}
                    <div className="dropdown z-auto pt-11">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#FF817E"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
                            <li><a>Item 1</a></li>
                            <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
        
    )
}



export default Navbar