import React from 'react'
import useRequestData from '../hooks/useRequestData'
import appointment from '../assets/images/appointment-img.jpg'
import { useEffect, useRef } from 'react';

const Booking = () => {

    const { makeRequest, data, isLoading, error } = useRequestData()
    const formRef = useRef(null)

    const { makeRequest: makeRequestTreatment, data: dataTreatment, isLoading: isLoadingTreatment, error: errorTreatment } = useRequestData()

    useEffect(() => {
        makeRequest("http://localhost:5029/appointment/")

        makeRequestTreatment("http://localhost:5029/treatment/")
    }, [])

    useEffect(() => {
        if ( data ) {
            // e.target.reset()
            // document.forms[0].reset()
            formRef.current.reset()
        }
    }, [data])

    const handleSubmit = (e) => {

        e.preventDefault()

        const fd = new FormData( e.target )

        makeRequest("http://localhost:5029/appointment/", "POST", null, fd)

        // e.target.reset()
    }

  return (

    <div className='grid grid-cols-2 py-32'>
        <div>
            <img src={appointment} alt="" />
        </div>
        <div>
            <form onSubmit={handleSubmit} ref={formRef} className='pt-20'>
                <div className='grid grid-cols-2 gap-10 max-w-4xl mr-60 py-10 text-gray'>
                    <input
                        name='name'
                        required
                        type="text"
                        placeholder='Name'
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                    />

                    <input
                        name='email' 
                        required 
                        type="text" 
                        placeholder='email' 
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                    />

                    <select
                        name="treatment"
                        defaultValue="DEFAULT"
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'>
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
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                    />

                    <input
                        name='date' 
                        required 
                        type="date" 
                        placeholder='date' 
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                    />

                    <input
                        name='time' 
                        required 
                        type="time"
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                    />

                    
                </div>
                <div className='max-w-4xl mr-60'>
                    <textarea
                        name='notes'
                        required
                        type="text"
                        placeholder='your notes'
                        className='border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'/>
                </div>
                <button
                    type='submit'
                    className='btn bg-pink text-white rounded-full mt-10 uppercase text-sm px-6'
                >
                    Make an appointment
                </button>
            </form>
        </div>
    </div>
  )
}

export default Booking
