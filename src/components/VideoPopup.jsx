import React from 'react'
import useRequestData from '../hooks/useRequestData';
import { useState, useEffect } from 'react';

const VideoPopUp = () => {

    const { makeRequest, data, isLoading, error } = useRequestData()
    const [isVideoOpen, setIsVideoOpen] = useState(false); // State to manage popup
    const [videoLink, setVideoLink] = useState(""); // State to store video link

    useEffect(() => {

        makeRequest( "http://localhost:5029/hero/" )
    
      }, [])

    useEffect(() => {
        if (data && data.length > 0) {
          const videoData = data.find(item => item.show); // Find the item with "show": true
          if (videoData) {
            setVideoLink(videoData.link); // Set the video link
          }
        }
    }, [data]);

    const closeVideoPopup = () => {
        setIsVideoOpen(false);
    };
    

    return (
        <div>
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
        </div>
    )
}

export default VideoPopUp
