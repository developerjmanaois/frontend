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
import Services from './Services';
import Feedback from './Feedback';
import Team from './Team';
import Booking from './Booking';
import '../assets/sass/home.scss'

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

      <section className='flex heroWrapper'>
        <div className='leaf-img'>
          <img src={leaf} alt="" />
        </div>
        
        { data && 
          <div className='mt-16 ml-28 heroContent'>

            <span className='text-pink mt-12 font-semibold text-lg font-nanumBold uppercase'>{ data[0].title1 }</span>
            <h1 className='w-4/5 text-6xl font-extrabold mt-3 mb-5 font-nanumBold'>
              { data[0].title2 }</h1>
            <p className='max-w-lg text-sm text-gray'>{data[0].content}</p>

            <div className='flex gap-5 mt-10 heroBtn'>
              <div>
                <button className='uppercase bg-pink hover:text-neutral-800 py-3 px-7 text-white'>
                  Reserve now
                </button>
              </div>
              <div onClick={openVideoPopup} className='flex justify-center items-center gap-3 videoPopup'>
                <MdOutlinePlayArrow className='text-pink text-4xl bg-beige rounded-full cursor-pointer'/>
                <p className='hover:text-pink cursor-pointer'>Watch our story</p>
              </div>
            </div>

          </div>
        }

        <div className='absolute top-0 right-0 spa-img'>
          <img className='spaImg' src={spa} alt="" />
        </div>

        { isVideoOpen && videoLink && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-neutral-900 bg-opacity-80 backdrop-blur-sm ">
            <div className="overflow-hidden relative w-full flex justify-center">
              {/* Close Button */}
              <button
                className="btn btn-sm btn-square absolute text-gray-500 top-0 right-8 hover:text-gray-700 videoButton"
                onClick={closeVideoPopup}
              >
                <IoClose />
              </button>
              {/* Video */}
              <div className="p-10 videoContainer">
                <iframe
                  width="1500"
                  height="800"
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
        <div className='grid grid-cols-3 items-center mt-20 aboutSection'>
          <div className='flex justify-center mb-80 roseContainer'>
            <img className='roseImg' src={rose} alt="rose" />
          </div>
        
          { dataAbout &&
            
            <div className='flex flex-col items-center text-center aboutContent'>
              <img className='mb-5 butterflyImg' src={butterfly} alt="butterfly" />
              
              <span className='uppercase font-semibold mb-5 text-gray'>About our spa center</span>
              <h1 className='text-4xl font-bold mb-5 font-nanumBold'>{ dataAbout.title }</h1>
              <p className='text-gray text-sm font-light leading-6'>{ parse(dataAbout.content) }</p>
            
              <button className='btn bg-pink rounded-full px-10 text-white uppercase mt-16 hover:bg-pink hover:text-neutral-800'><NavLink to="/about">Read more</NavLink></button>
            </div>
          }
          
          <div className='flex justify-end mr-20'>
            <img className='jasmineImg' src={jasmine} alt="jasmine" />
          </div>
        </div>
        
      </section>

      <Services />
      <Feedback />
      <Team />
      <Booking />
    </>
  )
}

export default Home