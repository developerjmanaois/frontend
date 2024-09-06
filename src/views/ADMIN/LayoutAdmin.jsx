import { Outlet } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Footer from '../../layout/Footer'


const LayoutAdmin = () => {

  return (
    <div>

      <HeaderAdmin />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div> )
}

export default LayoutAdmin