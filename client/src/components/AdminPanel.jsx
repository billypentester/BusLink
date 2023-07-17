import {React, useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Navbar from './adminpanel/Navbar'
import Sidebar from './adminpanel/Sidebar'
import Dashboard from './adminpanel/Dashboard'
import Buses from './adminpanel/Buses'
import Users from './adminpanel/Users'
import Update from './adminpanel/Update'
import Tickets from './adminpanel/Tickets'
import Feadbacks from './adminpanel/Feadbacks'

function AdminPanel() {

    const navigate = useNavigate();

    const [admin, setAdmin] = useState({
        _id:'' ,name: '', email: '', password: '', tokens: []
    })

    const result = async() => {

        try{
            const result = await axios.get('/admin/panel')
            if(result.data.admin)
            {

                setAdmin(result.data.admin)
            }
            if(result.data.msg)
            {
                navigate('/login')
            }
            }
        catch(err)
        {
            navigate('/login');
        }
        
    }

      useEffect(() => {
          result()
      }, [])

  return (

        <div className="container-scroller">
            <Navbar admin={admin} />
            <div className='page-body-wrapper'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={ <Dashboard admin={admin} /> } />
                    <Route path="/bus" element={ <Buses />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/update" element={<Update admin={admin} />} />
                    <Route path="/feadback" element={<Feadbacks />} />
                </Routes>
            </div>
        </div>

  )
}

export default AdminPanel