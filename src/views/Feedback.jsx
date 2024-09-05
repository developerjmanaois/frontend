import React from 'react'
import qoute from '../assets/images/quote.png'
import useRequestData from '../hooks/useRequestData'
import { useEffect, useState } from 'react'
import '../assets/sass/feedback.scss'

const Feedback = () => {

    const baseUrl = "http://localhost:5029/images/recommendation/";

    const { makeRequest, data, isLoading, error } = useRequestData()

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {

        makeRequest("http://localhost:5029/recommendation/")

    }, [])

    useEffect(() => {
        if (data && data.length > 3) {
            const timer = setInterval(() => {
                setSlideIndex(prevIndex => (prevIndex + 1) % 3);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [data]);

    const handleDotClick = (index) => {
        setSlideIndex(index);
    };

    const displayedData = data && data.slice(0, 3);

  return (
    <div className='bg-bgwhite'>
        <div className='flex justify-center py-10'>
            <img src={qoute} alt="quote" />
        </div>

        <div className="carousel w-full">
            { displayedData && displayedData.length > 0 && (
                <div className='w-full'>
                    <div className='bg-image carousel-item w-full flex justify-center'>
                        <div className='bg-text'>
                            <div className='pb-10'>
                                <p className='max-w-4xl text-center feedbackContent'>{displayedData[slideIndex].content}</p>
                            </div>
                            <div className="max-w-xs text-center mx-auto">
                                <img
                                    className="mx-auto mb-4 h-28 w-28 rounded-full outline outline-2 outline-white outline-offset-2 object-contain"
                                    src={`${baseUrl}${displayedData[slideIndex].image}`}
                                    alt="profile picture"
                                />
                                <div className='py-5'>
                                    <h1 className="text-xl font-semibold text-gray">
                                        {displayedData[slideIndex].name}, <span>{displayedData[slideIndex].title}</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-end w-full py-10 gap-2 slide-dot">
                                {displayedData.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${slideIndex === index ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Feedback
