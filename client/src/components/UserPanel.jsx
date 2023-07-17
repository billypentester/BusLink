import {React, useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Navbar from './userpanel/Navbar'
import Sidebar from './userpanel/Sidebar'
import Content from './userpanel/Content'
import Finder from './userpanel/Finder'
import Reserve from './userpanel/Reserve'
import Tickets from './userpanel/Tickets'
import Update from './userpanel/Update'
import Delete from './userpanel/Delete'
import Feadback from './userpanel/Feadback'


function UserPanel() {

      const navigate = useNavigate();
 
      const [user, setUser] = useState({})
      const [stat,setStat] = useState({})

      const result = async() => {
          try{
            const result = await axios.get('/user/panel')
            const userstat = await axios.get('/user/stat')
            if(result.data.user)
            {
                setUser(result.data.user)
                setStat(userstat.data.stat)

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
            <Navbar user={user} />
            <div className='page-body-wrapper'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={ <Content user={user} stat={stat}  /> } />
                    <Route path="/finder" element={  <Finder user={user} />} />
                    <Route path="/reserve/" element={<Reserve user={user} />} />
                    <Route path="/reserve/:name/:from/:to/:number" element={<Reserve user={user} />} />
                    <Route path="/tickets" element={<Tickets user={user} />} />
                    <Route path="/update" element={<Update user={user} />} />
                    <Route path="/delete" element={<Delete user={user} />} />
                    <Route path="/feadback" element={<Feadback user={user} />} />
                </Routes>
            </div>
        </div>

      )
}

export default UserPanel