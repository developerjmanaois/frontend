import React from 'react'
import useRequestData from '../hooks/useRequestData'
import { useEffect } from 'react';
import parse from 'html-react-parser';

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
        <div className='grid grid-cols-3 max-w-7xl mx-auto'>
            
            { data && 
                data.map((item, index) => (
                    <div key={index} className="card bg-base-100 w-96 border border-beige rounded-none">
                        <figure className="px-6 pt-6">
                            <img
                            src={`${baseUrl}${item.image}`}
                            alt="Shoes"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-nanumBold">
                                {item.firstname} {item.lastname}
                            </h2>
                            <span className='text-sm'>
                                {item.role}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team
