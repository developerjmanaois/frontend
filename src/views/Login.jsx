import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Navigate } from 'react-router-dom'

const Login = () => {

    // hent signIn-metoden fra context-filen
    // hent også user - så hvis login lykkes => send til admin
    const { signIn, user } = useContext( LoginContext )

    // hvis der er en user (= login lykkes) -> send til admin
    if ( user ) return <Navigate to="/admin" replace />



    const handleLogin = ( e ) => {

        e.preventDefault() // undgå reload ved submit

        let identity = e.target.inpIdentity.value   // snup input fra input-feltet med name="inpIdentity"
        let password = e.target.inpPW.value         // snup input fra input-feltet med name="inpPW"

        signIn( identity, password ) // send brugernavn/email og password til signin-metoden i context

    }


    return (
        <section>

          <div className='max-w-3xl mx-auto bg-lightpink py-20 lg:p-20 rounded-md'>
            
            <h1 className="text-3xl text-center mb-10">Login</h1>

            <form onSubmit={ handleLogin } className=''>

                <div className="m-4">
                  {/* defaultValue - hardcoded email */}
                  <input type="text" name="inpIdentity" placeholder='Brugernavn eller email (identity)' className="border border-white input w-96 bg-bgwhite" />
                </div>


                <div className="m-4">
                  {/* defaultValue - hardcoded password */}
                  <input type="password" name="inpPW" placeholder='Password' className="border border-white input w-96 bg-bgwhite" />
                </div>

                <div className="m-4">
                    <button type="submit" className="btn bg-bgwhite hover:bg-pink hover:text-white w-96">LOGIN</button>
                </div>


            </form>
            
          </div>



        </section>
    )
}

export default Login