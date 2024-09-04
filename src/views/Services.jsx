import React from 'react'
import useRequestData from '../hooks/useRequestData'
import { useEffect, useState } from 'react'
import icon from '../assets/images/1.png'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser';

const Services = () => {

    const baseUrl = "http://localhost:5029/images/treatment/";

    const { makeRequest, data, isLoading, error } = useRequestData()
    const { makeRequest: makeRequestRandom, data: dataRandom, isLoading: isLoadingRandom, error: errorRandom } = useRequestData()
    const [randomTreatments, setRandomTreatments] = useState([]);

    useEffect(() => {  
        makeRequest("http://localhost:5029/treatment/")
        makeRequestRandom("http://localhost:5029/treatment/")
    }, [])

    useEffect(() => {
        if (dataRandom && dataRandom.length > 0) {
            const shuffled = dataRandom.sort(() => 0.5 - Math.random());
            setRandomTreatments(shuffled.slice(0, 4));
        }
    }, [dataRandom]);

    const truncateContent = (content, maxLength) => {
        if (content.length <= maxLength) return content;
        return `${content.slice(0, maxLength)}...`;
    };

    return (

        <div className='pb-20'>
            
            <div className="container mt-20">
                { randomTreatments &&
                    randomTreatments.map((item, index) => (
                        <div key={index} className="image-container">
                            <img src={`${baseUrl}${item.image}`} alt={item.title} className="image"/>
                            <NavLink to="services">
                                <div className='overlay'>
                                    <img className='icon' src={icon} alt="icon" />
                                    <div className='text uppercase font-themify w-full'>{item.title}</div>
                                </div>
                            </NavLink>
                        </div>
                    ))
                    
                }
                
            </div>

            <div className='text-center my-28'>
                <h1 className='text-4xl font-nanumBold font-extrabold'>
                    Popular Procedures
                </h1>
                <p className='w-1/2 mx-auto font-themify text-gray mt-7 text-sm leading-6'>Discover our range of popular procedures designed to enhance your well-being and elevate your appearance. Each treatment is tailored to provide exceptional results and a luxurious experience.</p>
            </div>
            <div className='grid grid-cols-3 max-w-7xl mx-auto'>
                { data && 
                    data.slice(0, 3).map((item, index) => (
                        <div key={index} className="card bg-base-100 w-96 border border-beige rounded-none">
                            <figure className="px-6 pt-6">
                                <img
                                src={`${baseUrl}${item.image}`}
                                alt="Shoes"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-nanumBold">{item.title}</h2>
                                <div className='text-gray font-light text-sm leading-5'>{parse(truncateContent(item.content, 120))}</div>
                                <div className="card-actions">
                                <NavLink to="services" className="btn bg-darkGray text-white uppercase font-themify px-8 rounded-full mt-10">
                                    Read more
                                </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
  
    )

}

export default Services
