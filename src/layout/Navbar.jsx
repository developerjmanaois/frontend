import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {

    return (
        // Navbar component
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                <NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal mt-14 font-semibold uppercase">
                    <li className="hover:bg-pink nav-menu"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:bg-pink nav-menu"><NavLink to="/about">About</NavLink></li>
                    <li className="hover:bg-pink nav-menu"><NavLink to="/feature">Feature</NavLink></li>
                    <li className="hover:bg-pink nav-menu"><NavLink to="/service">Service</NavLink></li>
                    <li className="hover:bg-pink nav-menu"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end mt-10 font-semibold uppercase">
                <a className="btn bg-pink text-white">Log ind</a>
            </div>
        </div>
    )
}

{/* Video Popup
      <dialog id="video_modal" className="modal">
        <div>
          <button onClick={closeVideoPopup} className="btn btn-sm btn-circle absolute right-80 top-72 z-10">
            <IoClose />
          </button>
          
          { videoLink && (
              <iframe
                width="600"
                height="350"
                src={videoLink.replace('watch?v=', 'embed/')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          )}
        </div>
      </dialog> */}


export default Navbar