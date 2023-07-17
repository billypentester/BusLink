import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './../styles/index.css'

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: '', lastname: '', city: '', email: '', password: '', confirmpassword: ''
  })

  const [msg, setmsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    setUser({...user, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()

    var atposition=user.email.indexOf("@");  
    var dotposition=user.email.lastIndexOf(".");  

    if(user.firstname === '' || user.lastname === '' || user.city === '' || user.email === '' || user.password === '' || user.confirmpassword === '')
    { 
      setmsg('Please fill all the fields')
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=user.email.length){  
      setmsg('Please enter a valid e-mail address')
    } 
    else if(user.password !== user.confirmpassword)
    {
      setmsg('Password and confirm password does not match')
    }
    else{
      const result = await axios.post('/user/register', user)
      if(result.data.success)
      { 
        navigate('/user/panel')
      }
      else
      {
        setmsg(result.data.msg)
      }
      
    }
  }


  return (

      <div className="img">
        <section className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-7">
                  <div className="card shadow-2-strong" style={{ borderRadius : '1rem', backgroundColor : 'transparent' , backdropFilter: 'blur(10px)' }}>
                    <div className="card-body p-5 text-center">
          
                      <h3 className="my-4 text-white">Create an Account</h3>

                      { msg ? <div className="my-4 bg-opacity-50 rounded-3 py-2 text-white bg-danger"> <h5> {msg} </h5></div> : <div></div> }

                      <div className="d-flex w-100 justify-content-around">
                        <div className="form-outline mb-4 col-5">
                            <input required type="text" name="firstname" value={user.firstname} onChange={handleSubmit} id="typeEmailX-2" className="form-control form-control-lg text-white" />
                            <label className="form-label  text-white" for="typeEmailX-2">First Name</label>
                        </div>
            
                        <div className="form-outline mb-4 col-5">
                            <input required type="text" name="lastname" value={user.lastname} onChange={handleSubmit} id="typePasswordX-2" className="form-control form-control-lg text-white" />
                            <label className="form-label  text-white" for="typePasswordX-2">Last Name</label>
                        </div>
                      </div>

                      <div className="d-flex w-100 justify-content-around">
                          <div className="form-outline mb-4 col-5">
                              <input required type="text" name="city" value={user.city} onChange={handleSubmit}  id="typeEmailX-2" className="form-control form-control-lg text-white" />
                              <label className="form-label  text-white" for="typeEmailX-2">City</label>
                          </div>
              
                          <div className="form-outline mb-4 col-5">
                              <input required type="email" name="email" value={user.email} onChange={handleSubmit} id="typePasswordX-2" className="form-control form-control-lg text-white" />
                              <label className="form-label  text-white" for="typePasswordX-2">Email</label>
                          </div>
                      </div>

                      <div className="d-flex w-100 justify-content-around">
                          <div className="form-outline mb-4 col-5">
                              <input required type="password" name="password" value={user.password} onChange={handleSubmit}  id="typeEmailX-2" className="form-control form-control-lg text-white" />
                              <label className="form-label  text-white" for="typeEmailX-2">Password</label>
                          </div>
              
                          <div className="form-outline mb-4 col-5">
                              <input required type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleSubmit} id="typePasswordX-2" className="form-control form-control-lg text-white" />
                              <label className="form-label  text-white" for="typePasswordX-2">Confirm Password</label>
                          </div>
                      </div>
        
                      <button className="btn btn-primary btn-lg btn-block w-50 m-auto" onClick={handleSubmitForm} type="submit">Register</button>
          
                      <hr className="my-4 bg-white" />
          
                      <a href="/login" className="btn btn-lg btn-block btn-primary" style={{backgroundColor : '#dd4b39'}} type="submit"><i className="mdi mdi-file-account mx-2"></i>Already have an account ? Login here</a>
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

export default Register