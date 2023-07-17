import {React, useEffect, useState} from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Buses() {
 
    const [bus,setbus] = useState([])

    const [msg,setmsg] = useState()

    const result = async() => {

        try{
            const result = await axios.get('/bus/all')
            if(result.data)
            {
                setbus(result.data)
                console.log(bus)
            }
        }
        catch(err)
        {
            console.log(err)
        }
    
    }

    const updateEntity = async(e) => {
        try
        {
            const id = e.target.id
            const result = await axios.post(`/bus/update/${id}`,)
            if(result.data.result)
            {
                setmsg("Bus deleted successfully")
                window.location.reload(false);
            }
            else
            {
                setmsg(result.data.msg)
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const deleteEntity = async(e) => {
        try
        {
            const id = e.target.id
            const result = await axios.post(`/bus/delete/`,{id})
            if(result.data.result)
            {
                setmsg("Bus deleted successfully")
                window.location.reload(false);
            }
            else
            {
                setmsg(result.data.msg)
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
                                <h4 className="card-title">Bus CRUD operations</h4>
                                <p className="card-description">
                                Create, edit, and delete buses
                                </p>

                                { msg ? <p className="bg-light p-3 text-dark fw-bold">{ msg }</p> : null }

                                <button className="btn btn-primary">create a bus</button>

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
                                            <th> Bus Number </th>
                                            <th> Bus Name </th>
                                            <th> Source </th>
                                            <th> Destination </th>
                                            <th> Available Seats </th>
                                            <th> Ticket Price </th>
                                            <th> Departure Date </th>
                                            <th> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            bus.map((bus,index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{bus.bus_number}</td>
                                                        <td>{bus.bus_name}</td>
                                                        <td>{bus.bus_from}</td>
                                                        <td>{bus.bus_to}</td>
                                                        <td>{bus.bus_seats}</td>
                                                        <td>{bus.bus_price}</td>
                                                        <td>{bus.bus_date}</td>
                                                        <td class="d-flex justify-content-between">

                                                            <button type="button" className="btn btn-primary mx-1" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                                                                <span className="mdi mdi-pencil" id={bus._id}></span>
                                                            </button>

                                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                                                                        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">

                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Bus Number</label>
                                                                                    <input type="text" value={bus.bus_number} className="form-control" id="exampleInputName1" placeholder="Number"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Bus Name</label>
                                                                                    <input type="text" value={bus.bus_name} className="form-control"  id="exampleInputName1" placeholder="Name"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Source</label>
                                                                                    <input type="text" value={bus.bus_from} name="exampleInputName" className="form-control" id="exampleInputName1" placeholder="From"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Destination</label>
                                                                                    <input type="text" value={bus.bus_to} className="form-control"  id="exampleInputName1" placeholder="To"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row">
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Bus Seats</label>
                                                                                    <input type="text" value={bus.bus_seats} name="name" className="form-control" id="exampleInputName1" placeholder="Seats"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-6">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Ticket Price</label>
                                                                                    <input type="text" value={bus.bus_price} className="form-control"  id="exampleInputName1" placeholder="Price"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <div className="form-group">
                                                                                    <label for="exampleInputName1">Departure Date</label>
                                                                                    <input type="text" value={bus.bus_date} name="name" className="form-control" id="exampleInputName1" placeholder="Date"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                                                        <button type="button" class="btn btn-primary">Update</button>
                                                                    </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <button className="btn btn-danger mx-1" onClick={deleteEntity}>
                                                                <span className="mdi mdi-sword-cross" id={bus._id}></span>
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

export default Buses