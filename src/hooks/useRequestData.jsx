import { useState } from 'react'
import axios from 'axios'

// Brug evt. axios base - hvis server/apis url er den samme
//let axiosBase = axios.create( { baseURL: "http://localhost:5120/" } )

// axios.defaults.withCredentials = true // send cookie med VIGTIGT!!!!

const useRequestData = () => {


    // Håndter om vi venter på data = loader true el. false
    const [ isLoading, setIsLoading ] = useState( false )

    // Når der er data fra et API indlæses de i staten her
    const [ data, setData ] = useState( null )

    // Hvis der opstår fejl sætter vi denne til true
    const [ error, setError ] = useState( false )



    // Sætter det hele i gang: Ring API'et op - hent data!
    const makeRequest = async ( url, method = "GET", headers = null, body = null ) => {


        let response; // til data mv. fra api'et

        setIsLoading( true ) // vi sætter loading-tilstand til true mens api'et "ringes op"

        setTimeout( async () => {

            try {

                const config = {
                    headers: headers,
                    withCredentials: true
                }


                if ( method === "GET" ) {

                    // brug evt. axiosBase .... axiosBase.get(....) se i import-området

                    response = await axios.get( url, config )
                    // response = await axios.get( url, { headers: headers } )

                } else if ( method === "POST" ) {

                    // body er data for den todo der skal oprettes
                    response = await axios.post( url, body, config )
                    // response = await axios.post( url, body, { headers: headers } )

                } else if ( method === "PUT" ) {

                    // husk at url skal indeholde id på det der skal rettes
                    // body er data for den todo der skal rettes (rettede data)
                    response = await axios.put( url, body, config )
                    // response = await axios.put( url, body, { headers: headers } )

                } else if ( method === "PATCH" ) {

                    // husk at url skal indeholde id på det der skal rettes
                    // body er data for den todo der skal rettes (rettede data)
                    response = await axios.patch( url, body, config )
                    // response = await axios.patch( url, body, { headers: headers } )


                } else if ( method === "DELETE" ) {

                    // husk at url skal indeholde id på det der skal slettes
                    response = await axios.delete( url, config )
                    // response = await axios.delete( url, { headers: headers } )

                } else {

                    throw new Error( "Invalid method - GET POST PUT PATCH or DELETE was expected" )
                }

                // EFTER REQUEST (GET eller POST eller ...) håndter resultatet - fik vi fx data eller error

                if ( response && response.data !== undefined ) {

                    // Put data fra api'et i staten "data"
                    setData( response.data )
                    setError( false )

                } else {

                    setError( true )
                    setData( null )
                    throw new Error( "FEJL: Ingen data - eller tomt response" )
                }

            } catch ( error ) {

                setData( null )   // tøm data fordi der er en fejl
                setError( true )  // der er fejl
                console.log( error )

            } finally {

                setIsLoading( false ) // slut med at loade - api'et har svaret med enten error eller data
            }

            
        }, 2000);
    }
    // Det der sendes ud fra hook'et
    return { makeRequest, isLoading, data, error }
}

export default useRequestData