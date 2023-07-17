import {React, useState, useEffect} from 'react'
import axios from 'axios'

function Update(props) {

    const [user, setUser] = useState(props.user)

    // setUser(props.user)

    const [msg, setMsg] = useState('')

    // useEffect(() => {
    //     setUser(props.user)
    //     console.log(user)
    // },[props.user])

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.name
        const value = e.target.value
        setUser({...user, [title]: value})
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault()
        try{
            const result = await axios.post(`/user/update/${props.user._id}`, user)
            if(result.data.user)
            {
                console.log(result.data.user)
                setUser(result.data.user)
                setMsg("User data updated successfully")
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
                                    <label for="exampleInputName1">First Name</label>
                                    <input type="text" name="first_name" value={user.first_name} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="First Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="exampleInputName1">Last Name</label>
                                    <input type="text" name="last_name" value={user.last_name} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="Last Name"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="exampleInputName1">City</label>
                                    <input type="text" name="city" value={user.city} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="City"/>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="form-group">
                                    <label for="exampleInputName1">Email</label>
                                    <input type="email" name="email" readonly disabled className="form-control" value={user.email} onChange={handleSubmit} id="exampleInputName1" placeholder="Email"/>
                                </div>
                            </div> */}
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="exampleInputName1">Phone No</label>
                                    <input type="text" name="contactno" value={user.contactno} onChange={handleSubmit} className="form-control"  id="exampleInputName1" placeholder="Contact no."></input>
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