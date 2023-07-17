import {React, useState, useEffect} from 'react'
import axios from 'axios'

function Update(props) {

    const [admin, setAdmin] = useState({
        _id:'' ,name: '', email: '', password: '', tokens: []
    })

    const [msg, setMsg] = useState('')

    useEffect(() => {
        setAdmin(props.admin)
        console.log(props.admin)
    }, [props.admin])

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.name
        const value = e.target.value
        setAdmin({...admin, [title]: value})
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault()
        try{
            const result = await axios.post(`/user/update/${admin._id}`, admin)
            if(result.data.admin)
            {
                console.log(result.data.admin)
                setAdmin(result.data.admin)
                setMsg("Admin data updated successfully")
                window.location.reload(false);
            }
            else
            {
                setMsg("Error occur while updating the user data.")
            }
        }
        catch(err)
        {
            setMsg("Error occur while updating the user data.")
        }

    }


  return (
    <div className="main-panel">        
        <div className="content-wrapper">
          <div>
            <div className="col-10 m-auto grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Update Profile</h4>
                    <p className="card-description">
                      Enter your new details to reserve a ticket
                    </p>

                        { msg ? <p className="bg-light p-3 text-dark fw-bold">{ msg }</p> : null }

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="exampleInputName1">Name</label>
                                    <input type="text" name="name" value={admin.name} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="exampleInputName1">Email</label>
                                    <input type="email" readonly disabled className="form-control" value={admin.email} onChange={handleSubmit} id="exampleInputName1" placeholder="Email"/>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center my-4">
                            <button type="submit" className="btn btn-primary text-white me-2" onClick={handleSubmitForm}>Submit</button>
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

export default Update