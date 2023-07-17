import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Feadbacks() {
 
  const [user,setuser] = useState([])

  const result = async() => {

        try{
            const result = await axios.get('/contact/all')
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
    }, [user])

  return (
    <div className="main-panel">        
    <div className="content-wrapper">
      <div>
        <div className="col-12 m-auto grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Contacts</h4>
                <p className="card-description">
                  Here are some users submiited contact form
                </p>
                
                <div class="table-responsive py-3 my-3">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> Name </th>
                            <th> Email </th>
                            <th style={{width: '50%'}}> Message </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            user.map((user,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.message}</td>
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

export default Feadbacks