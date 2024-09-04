import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import parse from 'html-react-parser';
import leaf from '../assets/images/leaf.png'
import spa from '../assets/images/spa.png'
import rose from '../assets/images/china-rose.png'
import butterfly from '../assets/images/butterfly.png'
import jasmine from '../assets/images/jasmine.png'
import Loader from '../components/Loader'
import { MdOutlinePlayArrow } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const Home = () => {

  const { makeRequest, data, isLoading, error } = useRequestData()
  const { makeRequest: makeRequestAbout, data: dataAbout, isLoading: isLoadingAbout, error: errorAbout } = useRequestData()
  const [isVideoOpen, setIsVideoOpen] = useState(false); // State to manage popup
  const [videoLink, setVideoLink] = useState(""); // State to store video link

  useEffect(() => {
    if (data && data.length > 0) {
      const videoData = data.find(item => item.show); // Find the item with "show": true
      if (videoData) {
        setVideoLink(videoData.link); // Set the video link
      }
    }
  }, [data]);

  const openVideoPopup = () => {
    setIsVideoOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoOpen(false);
  };

  useEffect(() => {

    makeRequest( "http://localhost:5029/hero/" )
    makeRequestAbout( "http://localhost:5029/about/" )

  }, [])

  return (
    <>
      { (error || errorAbout) && <Error /> }
      { (isLoading || isLoadingAbout) && <Loader /> }

      <section className='flex'>
        <div className='leaf-img'>
          <img src={leaf} alt="" />
        </div>
        
        { data && 
          <div className='mt-16 ml-28 '>

            <span className='text-pink mt-12 font-semibold text-lg font-nanumBold uppercase'>{ data[0].title1 }</span>
            <h1 className='w-4/5 text-6xl font-extrabold mt-3 mb-5 font-nanumBold'>
              { data[0].title2 }</h1>
            <p className='max-w-lg text-sm text-gray'>{data[0].content}</p>

            <div className='flex gap-5 mt-10'>
              <div>
                <button className='uppercase bg-pink py-3 px-7 text-white'>
                  Reserve now
                </button>
              </div>
              <div onClick={openVideoPopup} className='flex justify-center items-center gap-3'>
                <MdOutlinePlayArrow className='text-pink text-4xl bg-beige rounded-full cursor-pointer'/>
                Watch our story
              </div>
            </div>

          </div>
        }

        <div className='absolute top-0 right-0 spa-img'>
          <img src={spa} alt="" />
        </div>

        { isVideoOpen && videoLink && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-pink bg-opacity-80 backdrop-blur-sm">
            <div className="bg-white rounded-lg overflow-hidden relative">
              {/* Close Button */}
              <button
                className="btn btn-sm btn-circle absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closeVideoPopup}
              >
                <IoClose />
              </button>
              {/* Video */}
              <div className="p-10">
                <iframe
                  width="600"
                  height="350"
                  src={videoLink.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
          </div>
        )}

      </section>
      <section>
        <div className='grid grid-cols-3 items-center mt-20'>
          <div className='flex justify-center mb-80'>
            <img src={rose} alt="rose" />
          </div>
        
          { dataAbout &&
            
            <div className='flex flex-col items-center text-center'>
              <img className='mb-5' src={butterfly} alt="butterfly" />
              
              <span className='uppercase font-semibold mb-5 text-gray'>About our spa center</span>
              <h1 className='text-4xl font-bold mb-5 font-nanumBold'>{ dataAbout.title }</h1>
              <p className='text-gray text-sm'>{ parse(dataAbout.content) }</p>
            
              <button className='btn bg-pink rounded-full px-10 text-white uppercase mt-16'><NavLink to="/">Read more</NavLink></button>
            </div>
          }
          
          <div className='flex justify-end mr-20'>
            <img src={jasmine} alt="jasmine" />
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Home