import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { useState, useContext, useEffect } from 'react'
import { LoginContext } from '../context/LoginContext'
import LogoutButton from '../components/LogOutButton.jsx'
import { IoClose } from "react-icons/io5";
import Login from '../views/Login'

const Navbar = () => {

    const { user } = useContext( LoginContext )

    const [ isLogIn, setLogin ] = useState( false )

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const openLoginPopup = () => {
        setLogin(true);
    };

    const closeLoginPopup = () => {
        setLogin(false);
    }

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
                    <ul className="menu-horizontal font-semibold uppercase gap-10 justify">
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
                            <NavLink to="/contact" className='hover:text-pink'>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin">ADMIN</NavLink>
                        </li>
                        
                        {
                            !user &&
                            <li onClick={openLoginPopup}>
                                <NavLink className="hover:text-pink">LOGIN</NavLink>
                            </li>
                        }
                        
                        {
                            user &&
                            <>
                                <li>
                                    <NavLink to="/admin">ADMIN</NavLink>
                                </li>
                                <li>
                                    <LogoutButton />
                                </li>
                            </>
                        }
                        
                    </ul>
                </div>

                {
                    isLogIn && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-neutral-900 bg-opacity-80 backdrop-blur-sm ">
                            <div className="overflow-hidden relative w-full flex justify-center">
                                {/* Close Button */}
                                <button
                                    className="text-gray-500 videoButton"
                                    onClick={closeLoginPopup}
                                >
                                    <IoClose className='x-button'/>
                                </button>
                                <div>
                                    <Login />
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="navbar-end">
                    {/* <a className="hover:text-pink uppercase pt-12 mr-2 lg:hidden">Log in</a> */}
                    <div className="dropdown z-auto pt-11">
                        <div
                            onClick={toggleDropdown}
                            tabIndex={0}
                            role="button"
                            className="lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#FF817E"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                        <ul
                            onClick={closeDropdown}
                            tabIndex={0}
                            className="dropdown-content
                                        fixed
                                        top-24
                                        right-0
                                        w-screen
                                        bg-dropdownbg
                                        h-96 z-[1]
                                        shadow
                                        lg:rounded-box
                                        lg:w-80
                                        text-center
                                        grid
                                        items-center
                                        py-5
                                        uppercase
                                        font-bold
                                        text-gray"
                        >
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
                            {
                            !user &&
                                <li onClick={openLoginPopup}>
                                    <NavLink className="hover:text-pink">LOGIN</NavLink>
                                </li>
                            }
                        
                            {
                                user &&
                                <>
                                    
                                    <li>
                                        <NavLink to="/admin">ADMIN</NavLink>
                                    </li>
                                    
                                    <li>
                                        <LogoutButton />
                                    </li>
                                </>
                            }
                        </ul>
                        )}
                    </div>
                </div>
            </div>

        </nav>
        
    )
}



export default Navbar