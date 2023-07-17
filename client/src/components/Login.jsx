import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './../styles/index.css'

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '', password: '', isadmin: false
  })

  const [msg, setmsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    setUser({...user, [title]: value})
  }

  const checkSubmit = async(e) => {
    const title = e.target.name
    const value = e.target.checked
    setUser({...user, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()
    try{
      let result
      if(user.isadmin)
      { 
        result = await axios.post('/admin/login', user)
      }
      else
      { 
        result = await axios.post('/user/login', user)
      }
     
      if(result.data.user) {
        navigate('/user/panel');
      }
      if(result.data.admin) {
        navigate('/admin/panel');
      }
      if(result.data.msg){
        setmsg(result.data.msg)
      }
    }
    catch(err){
      setmsg("connectivity issue")
    }
  }



  return (
    <div className='img'>
        <section className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong" style={{ borderRadius : '1rem', backgroundColor : 'transparent' , backdropFilter: 'blur(10px)' }}>
                    <div className="card-body p-5 text-center">
          
                      <h3 className="my-4 text-white">Login</h3>

                        { msg ? <div className="my-4 bg-opacity-50 rounded-3 py-2 text-white bg-info"> <h5>{msg}</h5> </div> : null }
          
                      <div className="form-outline mb-4">
                        <input type="email" name="email" value={user.email} onChange={handleSubmit} id="typeEmailX-2" className="form-control form-control-lg text-white" />
                        <label className="form-label text-white" for="typeEmailX-2">Email</label>
                      </div>
          
                      <div className="form-outline mb-4">
                        <input type="password" name="password" value={user.password} onChange={handleSubmit} id="typePasswordX-2" className="form-control form-control-lg text-white" />
                        <label className="form-label text-white" for="typePasswordX-2">Password</label>
                      </div>
        
                      <div className="form-check d-flex justify-content-start mb-4">
                        <input
                          name="isadmin"
                          className="form-check-input"
                          type="checkbox"
                          checked={user.isadmin}
                          onChange={checkSubmit}
                          id="form1Example3"
                        />
                        <label className=" text-white" for="form1Example3"> Admin Login ? </label>
                      </div>
          
                      <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmitForm} type="submit">Login</button>

                      <hr className="my-4 bg-white" />
          
                      <a href="/register" className="btn btn-lg btn-block btn-primary" style={{backgroundColor : '#dd4b39'}} type="submit"><i className="mdi mdi-file-account mx-2"></i>Don't have an account ? Register here</a>
                      <a href="/" className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor : '#3b5998'}} type="submit"><i className="mdi mdi-home mx-2"></i>Back to Home page</a>
          
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Login