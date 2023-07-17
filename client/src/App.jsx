import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import UserPanel from './components/UserPanel'
import AdminPanel from './components/AdminPanel';
import Search from './components/Search';

function App()
{
    return(
        <>
            <Routes>
                <Route path="/*" element={ <Home /> } />
                <Route path="/search" element={ <Search /> } />
                <Route path="/register" element={  <Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/panel/*" element={<UserPanel />}/>
                <Route path="/admin/panel/*" element={<AdminPanel />}/>
            </Routes>
        </>
    )
}

export default App