import { createContext, useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'


export const LoginContext = createContext()


// HUSK!!!!: Context provider skal tilføjes til main.jsx el.lign.
const LoginContextProvider = ( props ) => {


    const [ user, setUser ] = useState();

    //åbn hook
    const { makeRequest, isLoading, data, error } = useRequestData()

    // Holde øje med om signup virker
    useEffect(() => {

        if (data && data.name) {
            setUser(data.name)
        } else {
            setUser() // Tøm user for en sikkerhedskyld - fejl i login
        }
        
    }, [data])

    // Simuleret login - men kan nemt kobles på en rigtig signIn-metode med kald til et api, hvor identity og password sendes med
    const signIn = ( identity, password ) => {

        const fd = new FormData();
        fd.append("email", identity);
        fd.append("password", password);

        makeRequest("http://localhost:5029/login/login", "POST", null, fd);
        // simuleret login
        // identity kan være email eller password
        // if ( identity === "admin" && password === "abc123" ) {
        //     setUser( identity )
        // } else {
        //     setUser()
        // }

    }

    const signOut = () => {
        makeRequest("http://localhost:5029/login/logout", "GET");
        // setUser() // tøm state = ikke logget ind
    }


    return (
        <LoginContext.Provider value={ { signIn, signOut, user } }>
            { props.children }
        </LoginContext.Provider>
    )

}

export default LoginContextProvider