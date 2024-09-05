import React from 'react'
import useRequestData from '../hooks/useRequestData'
import appointment from '../assets/images/appointment-img.jpg'
import { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader';
import '../assets/sass/booking.scss'

const Booking = () => {

    // State to store success message
    const [successMessage, setSuccessMessage] = useState('');

    const { makeRequest, data, isLoading, error } = useRequestData()
    const formRef = useRef(null)

    const { makeRequest: makeRequestTreatment, data: dataTreatment, isLoading: isLoadingTreatment, error: errorTreatment } = useRequestData()

    useEffect(() => {

        makeRequestTreatment("http://localhost:5029/treatment/")

    }, [])

    useEffect(() => {
        if ( data ) {

            formRef.current.reset()
            
        }
    }, [data])


    const handleSubmit = async (e) => {

        e.preventDefault()

        const fd = new FormData( e.target )

        try {
            await makeRequest("http://localhost:5029/appointment/", "POST", null, fd);
            if (!error) {
                setSuccessMessage("Booking was successful!");
            }
            } catch (err) {
                setSuccessMessage('');
            }
    
    }

  return (

    <div>

        { isLoading && <Loader /> }
        
        { error && <Error /> }

        <div className='grid grid-cols-2 my-32 bg-bgwhite bookingContainer'>

            <div className=''>
                <img className='bookingImg w-full object-cover' src={appointment} alt="relaxing" />
            </div>

            <div className='formContainer relative'>
                {   successMessage && (
                    <div className="text-pink absolute top-12 left-10 successMessage">
                        {successMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className='grid grid-cols-2 gap-10 px-10 pt-32 text-gray formBooking'>
                        <input
                            name='name'
                            required
                            type="text"
                            placeholder='Name'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='email' 
                            required 
                            type="text" 
                            placeholder='email' 
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <select
                            name="treatment"
                            defaultValue="DEFAULT"
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'>
                            <option value="DEFAULT" disabled>select service</option>
                                {
                                    dataTreatment && dataTreatment.map( t =>
                                        <option value={t._id} key={t._id}>{t.title}</option>
                                    )
                                }
                            
                        </select>

                        <input
                            name='phone' 
                            required 
                            type="text"
                            placeholder='phone number'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='date' 
                            required 
                            type="date" 
                            placeholder='date' 
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='time' 
                            required 
                            type="time"
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        
                    </div>
                    <div className='mr-60 formTextArea w-full px-10 py-20'>
                        <textarea
                            name='notes'
                            required
                            type="text"
                            placeholder='your notes'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full outline-none uppercase text-sm'/>
                    </div>
                    <button
                        type='submit'
                        className='btn bg-pink hover:bg-pink hover:text-neutral-800 text-white rounded-full ml-10 uppercase text-sm px-6 bookingBtn'
                    >
                        Make an appointment
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Booking
