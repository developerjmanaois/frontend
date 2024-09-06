import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from "../context/LoginContext"
import { NavLink } from 'react-router-dom'

// logud-button til genbrug de steder, hvor det er relevant
const LogoutButton = () => {

    const { signOut } = useContext( LoginContext )

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(); // Call logout function to log out the user
        navigate('/'); // Redirect to home after logout
    };

    return (

        <NavLink onClick={ handleLogout }  className="uppercase hover:text-pink">Logud</NavLink>
    )
}

export default LogoutButton