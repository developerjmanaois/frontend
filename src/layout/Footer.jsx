import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png'
import useRequestData from '../hooks/useRequestData'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaVimeoV, FaInstagram } from "react-icons/fa";
import '../assets/sass/home.scss'

const Footer = () => {

  const { makeRequest, data, isLoading, error } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/footer/")

  }, [])

  return (

    <div className='bg-bgwhite pt-14 footerContainer'>
      <footer className='max-w-full'>
        <div className='flex justify-center'>
          <img src={logo} alt="logo" />
        </div>
        <div className="lg:flex justify-center footerNav">
          <ul className="menu-horizontal mt-4 font-semibold uppercase text-iconcolor navContainer">
            <li className="hover:text-pink"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-pink"><NavLink to="/about">About</NavLink></li>
            <li className="hover:text-pink"><NavLink to="/feature">Feature</NavLink></li>
            <li className="hover:text-pink"><NavLink to="/service">Service</NavLink></li>
            <li className="hover:text-pink"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="lg:flex justify-center socMedFooter">
          <ul className="menu-horizontal my-10 font-semibold uppercase flex items-center gap-3">
            <li><NavLink to="/"><FaFacebookF className='flex justify-center text-lg text-iconcolor hover:text-pink' /></NavLink></li> <span className='text-lg font-light text-gray mb-1'>|</span>
            <li><NavLink to="/about"><FaTwitter className='flex justify-center text-lg text-iconcolor hover:text-pink' /></NavLink></li> <span className='text-lg font-light text-gray mb-1'>|</span>
            <li><NavLink to="/feature"><FaVimeoV className='flex justify-center text-lg text-iconcolor hover:text-pink' /></NavLink></li> <span className='text-lg font-light text-gray mb-1'>|</span>
            <li><NavLink to="/service"><FaInstagram className='flex justify-center text-lg text-iconcolor hover:text-pink' /></NavLink></li>
          </ul>
        </div>
        <div className='max-w-5xl mx-auto'>
          { data &&
            <div className='flex justify-center gap-3 footerEnd'>
              <p className='text-center'>&reg; COPYRIGHT 2024 <span className='font-semibold text-gray'>{data.name}</span></p>
              <p className='uppercase text-center mb-5'>All rights reserved</p>
            </div>

          }
        </div>
      </footer>
    </div>
  )
}

export default Footer