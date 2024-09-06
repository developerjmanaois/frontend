import React from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import useRequestData from '../../hooks/useRequestData'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const AppointmentEdit = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { makeRequest, isLoading, data, error } = useRequestData()

    const { makeRequest: makeRequestTreatment, isLoading: isLoadingTreatment, data: dataTreatment, error: errorTreatment } = useRequestData()

    const { makeRequest: makeRequestEdit, isLoading: isLoadingEdit, data: dataEdit, error: errorEdit } = useRequestData()

    useEffect( () => {

        makeRequestTreatment( "http://localhost:5029/treatment/" )

        makeRequest( "http://localhost:5029/appointment/admin/" + id )
    
    }, [] )

    const handleSubmit = (e) => {

        e.preventDefault()

        makeRequestEdit("http://localhost:5029/appointment/admin/" + id, "PUT", null, e.target)

    }

    useEffect( () => {

        if ( dataEdit ) {

            navigate("/admin/appointmentadmin")

        }

    }, [dataEdit] )

    const formatDate = (dateandtime) => {
        const date = new Date(dateandtime)
        return date.toLocaleDateString() // Format the date (you can customize the format)
    }
    
    const formatTime = (dateandtime) => {
        const date = new Date(dateandtime)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Format the time in HH:MM format
    }


    return (

        <div>

            { ( isLoading || isLoadingTreatment || isLoadingEdit ) && <Loader /> }
            { ( error || errorTreatment || errorEdit ) && <Error /> }

            <h1 className='py-10 text-center text-4xl'>Edit Client's Appointment</h1>
                        
            { data &&
                <div className=''>
                <form onSubmit={handleSubmit} className='form-control pb-20 mb-20 bg-bgwhite max-w-4xl mx-auto'>
                    <div className='grid grid-cols-2 gap-10 px-10 pt-20 text-gray formBooking'>
                        <input
                            name='name'
                            defaultValue={data.name}
                            required
                            type="text"
                            placeholder='Name'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='email'
                            defaultValue={data.email} 
                            required 
                            type="text" 
                            placeholder='email' 
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <select
                            name="treatment"
                            defaultValue={data.treatment._id} // Set the default value to the ID of the treatment
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'>
                            <option value="DEFAULT" disabled>Select Service</option>
                            {
                                dataTreatment && dataTreatment.map(t =>
                                    <option value={t._id} key={t._id}>{t.title}</option>
                                )
                            }
                        </select>

                        <input
                            name='phone'
                            defaultValue={data.phone} 
                            required 
                            type="text"
                            placeholder='phone number'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='date'
                            defaultValue={formatDate(data.dateandtime)} 
                            required 
                            type="text" 
                            placeholder='date' 
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                        <input
                            name='time'
                            defaultValue={formatTime(data.dateandtime)} 
                            required 
                            type="text"
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full py-3 outline-none uppercase text-sm'
                        />

                    
                    </div>
                    <div className='formTextArea w-full px-10 pt-20 pb-10'>
                        <textarea
                            name='notes'
                            defaultValue={data.notes}
                            required
                            type="text"
                            placeholder='your notes'
                            className='bg-bgwhite border-0 border-b-2 border-b-lightgray w-full outline-none uppercase text-sm'/>
                    </div>     

                    <button type='submit' className='btn bg-pink text-white hover:bg-pink hover:text-neutral-800 mx-auto w-1/3 mt-10'>Edit</button>   
                   
                </form>
                </div>  
            }

        </div>

    )
}

export default AppointmentEdit
