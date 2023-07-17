import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Delete(props) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    _id:'' ,first_name: '', last_name: '', city: '' ,email: '', password: '', contactno: '' , feadbacks: [], tokens: []
  })

  const [msg, setMsg] = useState('')

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  const [data, setdata] = useState({ password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    setdata({...data, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()
    console.log(user)
    const result = await axios.post(`/user/delete/${user._id}`, data)
    if(result.data.msg)
    {
      setMsg(result.data.msg)
    }
    else{
      navigate('/login')
      window.location.reload(false);
    }
  }

  return (

    <div className="main-panel">        
    <div className="content-wrapper">
      <div>
        <div className="col-7 m-auto grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Delete Profile</h4>
                <p className="card-description">
                  Confirm your account deletion
                </p>

                    { msg ? <p className="bg-light p-3 text-dark fw-bold">{ msg }</p> : null }

                    <div>
                        <div className="form-group">
                            <label for="exampleInputName1">Password</label>
                            <input type="text" name="password" value={data.password} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="Password"/>
                        </div>
                    </div>

                    <div>
                        <div className="font-weight-bold text-danger">
                          {/* <label className="form-check-label"> */}
                            {/* <input type="checkbox"/> */}
                            I confirm that I want to delete my account
                          {/* </label> */}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center my-4">
                        <button type="submit" className="btn btn-danger text-white me-2" onClick={handleSubmitForm} >Delete my account</button>
                        <button className="btn btn-light">Cancel</button>
                    </div>
                  
              </div>
            </div>
        </div>

      </div>
    </div>
  </div>
  
  )
}

export default Delete