import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Tickets() {
 
  const [ticket,setticket] = useState([])

    const result = async() => {

        try{
            const result = await axios.get('/ticket/all')
            if(result.data)
            {
                setticket(result.data)
                console.log(ticket)
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
                <h4 className="card-title">Ticket CRUD operations</h4>
                <p className="card-description">
                  Create, edit, and delete tickets
                </p>

                <button className="btn btn-primary">Reserve a ticket</button>

                <div className="my-4 p-2">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">Name</label>
                                <input type="text" name="first_name" className="form-control" id="exampleInputName1" placeholder="Bus Name"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">From</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="Source"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">To</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="Destination"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label for="exampleInputName1">Departure Date</label>
                                <input type="text" name="last_name" className="form-control" id="exampleInputName1" placeholder="Departure Date"/>
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
                            <th> Email </th>
                            <th>Bus Number</th>
                            <th> Source </th>
                            <th> Destination </th>
                            <th>Tickets</th>
                            <th> Ticket Price </th>
                            <th> Departure Date </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            ticket.map((ticket,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{ticket.email}</td>
                                        <td>{ticket.bus_number}</td>
                                        <td>{ticket.bus_from}</td>
                                        <td>{ticket.bus_to}</td>
                                        <td>{ticket.noofticket}</td>
                                        <td>{ticket.bus_price}</td>
                                        <td>{ticket.bus_date}</td>
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

export default Tickets