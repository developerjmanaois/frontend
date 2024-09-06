import React from 'react'
import useRequestData from '../hooks/useRequestData'
import { useEffect } from 'react';
import parse from 'html-react-parser';
import '../assets/sass/team.scss'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";

const Team = () => {

    const baseUrl = "http://localhost:5029/images/team/";

    const { makeRequest, data, isLoading, error } = useRequestData()

    useEffect(() => {
        makeRequest("http://localhost:5029/team/")
    }, [])

  return (
    <div className=''>
        <div className='max-w-4xl mx-auto text-center py-20'>
            <h1 className='font-nanumBold text-4xl font-extrabold pb-10'>
                Experienced Team
            </h1>
            <p className='leading-7'>
                Our team of professionals is dedicated to providing you with the highest quality of treatment and care. We are committed to ensuring that you feel comfortable and confident throughout your journey with us.
            </p>
        </div>
        <div className='grid grid-cols-3 max-w-7xl mx-auto teamContainer'>
            
            { data && 
                data.map((item, index) => (
                    
                    <div key={index} className="bg-base-100 w-full teamImgContainer relative">
                        <figure className="px-6 pt-6 w-full">
                            <img
                            src={`${baseUrl}${item.image}`}
                            alt={item.name}
                            className='w-full h-full object-cover'
                            />
                        </figure>
                        <div tabIndex={0} className="collapse bg-base-100 rounded-none w-80 shadow-xl mx-auto absolute -bottom-24 right-14 nameContainer">
                            <div className="collapse-title text-xl font-medium px-0 pt-5">
                                <h2 className="card-title font-nanumBold mt-5 mb-3 flex justify-center mx-auto">
                                    {item.firstname} {item.lastname}
                                </h2>
                                <span className='text-sm flex justify-center mb-2'>
                                    {item.role}
                                </span>
                            </div>
                            <div className="collapse-content flex justify-center px-4 pb-6 mb-5 gap-2">
                                <div className='flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full'>
                                    <FaFacebookF className='text-xl text-blue-600' />
                                </div>
                                <div className='flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full p-2'>
                                    <FaTwitter className='text-xl text-blue-400' />
                                </div>
                                <div className='flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full p-2'>
                                    <TiSocialGooglePlus className='text-xl text-red-500' />
                                </div>
                                <div className='flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full p-2'>
                                    <CiInstagram className='text-xl text-purple-600' />
                                </div>
                            </div>

                        </div>
                    </div>
                    
                ))
            }


        </div>
    </div>
  )
}

export default Team
