import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Users() {
 
  const [user,setuser] = useState([])

  const result = async() => {

        try{
            const result = await axios.get('/user/all')
            if(result.data)
            {
                setuser(result.data)
                console.log(user)
            }
        }
        catch(err)
        {
            console.log(err)
        }
    
    }

    useEffect(() => {
        result()
    }, [])

  return (
    <div className="main-panel">        
    <div className="content-wrapper">
      <div>
        <div className="col-12 m-auto grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">User CRUD operations</h4>
                <p className="card-description">
                  Create, edit, and delete users
                </p>

                <button className="btn btn-primary">register a user</button>

                <div className="my-4 p-2">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">First Name</label>
                                <input type="text" name="first_name" className="form-control" id="exampleInputName1" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">Last Name</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">Email</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">City</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="City"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end my-1">
                        <button type="submit" className="btn btn-success text-white me-2">Search</button>
                        <button className="btn btn-light">Reset</button>
                    </div>
                </div>

                
                <div class="table-responsive py-3 my-3">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> City </th>
                            <th> Contact no. </th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            user.map((user,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.city}</td>
                                        <td>{user.contactno}</td>
                                        <td>{user.password}</td>
                                        <td class="d-flex justify-content-between">
                                            <button className="btn btn-primary mx-1 ">
                                                <span className="mdi mdi-pencil"></span>
                                            </button>
                                            <button className="btn btn-danger mx-1 ">
                                            <span className="mdi mdi-sword-cross"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })    
                        }

                    </tbody>
                    </table>
                </div>
                  


              </div>
            </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Users