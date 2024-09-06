import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom'

const AppointmentAdmin = () => {

  const { makeRequest, isLoading, data, error } = useRequestData()
  const { makeRequest: makeRequestDelete, isLoading: isLoadingDelete, data: dataDelete, error: errorDelete } = useRequestData()

  const formatDate = (dateandtime) => {
    const date = new Date(dateandtime)
    return date.toLocaleDateString() // Format the date (you can customize the format)
  }

  const formatTime = (dateandtime) => {
    const date = new Date(dateandtime)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) // Format the time in HH:MM format
  }

  useEffect( () => {

      makeRequest( "http://localhost:5029/appointment/admin/" );

  }, [ dataDelete ] )

  const handleDelete = (appointmentId, name) => {

    if(window.confirm("Er du sikker på at du vil slet " + name + "? \n Det kan ikke fortrydes")) {

        makeRequestDelete( "http://localhost:5029/appointment/admin/" + appointmentId, "DELETE")

    }

  }

  return (

    <div>

      { ( isLoading || isLoadingDelete ) && <Loader /> }
      { ( error || errorDelete ) && <Error /> }

      <h1 className='py-20 text-center text-4xl'>Administer Client's Appointments</h1>
      
      <div className="overflow-x-auto mb-20 px-5">

        <table className="table table-xs">
        
          <thead>
            <tr className='uppercase text-md'>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Date</th>
              <th>Notes</th>
              <th><CiEdit /></th>
              <th><RiDeleteBinLine /></th>
            </tr>
          </thead>
                
          { data &&
            data.map( a => 
              <tbody key={a._id}>
                <tr>
                  <th>{a._id}</th>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.phone}</td>
                  <td>{a.treatment.title}</td>
                  <td>{formatDate(a.dateandtime)}</td>
                  <td>{formatTime(a.dateandtime)}</td>
                  <td>{a.notes}</td>
                  <td><Link to={'/admin/appointmentedit/' + a._id}><CiEdit /></Link></td>
                  <td><RiDeleteBinLine onClick={() => handleDelete(a._id, a.name)} /></td>
                </tr>
              </tbody>
                
            )
          }

        </table>

      </div>
      
    </div>
  )
}

export default AppointmentAdmin
