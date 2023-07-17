import {React, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

function Search() {

  const [bus, findbus] = useState({
    bus_from: '', bus_to: '', search : 'local'
  })

  const [msg,setmsg] = useState()

  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    findbus({...bus, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()
    setmsg('')
    setResult([])
    
    const result = await axios.post('/bus/search', bus)

    console.log(result)
 
    if(result.data.result) {
      setResult(result.data.result)
    }
    else
    { 
      setmsg(result.data.msg) 
    }

  }

  const converter = (date) =>{
        
    var created_date = new Date(date)

    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Des']
    var dater = created_date.getDate() + " " + month[created_date.getMonth()] + ', ' + created_date.getFullYear()

    return dater
  }

  return (

    <div className='img3' >
        <section style={{backgroundColor : 'rgba(0, 0, 0, 0.6)'}} className={ result !== '' ? '' : "h-100"  }  >
            <div className="container py-5">
              <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                  <div className="card shadow-2-strong" style={{borderRadius: '1rem', backgroundColor: 'transparent', backdropFilter: 'blur(10px)'}}>
                    <div className="card-body p-5 text-center">
          
                      <h3 className="text-white">Check availability for direction</h3>

                      <hr className="my-4" />

                        { msg ? <p className="bg-light p-3 bg-opacity-75 rounded-3 mx-auto col-9 text-dark fw-bold">{ msg }</p> : null }
          
                        <div className="d-flex w-100 justify-content-around">

                            <select className="mb-4 col-5 rounded-1 bg-transparent text-danger px-2" name="bus_from" value={bus.bus_from} onChange={handleSubmit} style={{height : '50px'}}>
                                <option value="" selected>from:</option>
                                <option name="Lahore" value="Lahore">Lahore</option>
                                <option name="Multan" value="Multan">Multan</option>
                                <option name="Faisalabad" value="Faisalabad">Faisalabad</option>
                                <option name="RawalPindi" value="RawalPindi">RawalPindi</option>
                                <option name="Islamabad" value="Islamabad">Islamabad</option>
                            </select>

                            <select className="mb-4 col-5 rounded-1 bg-transparent text-danger px-2" name="bus_to" value={bus.bus_to} onChange={handleSubmit} style={{height : '50px'}}>
                                <option value="" selected>to:</option>
                                <option name="Lahore" value="Lahore">Lahore</option>
                                <option name="Multan" value="Multan">Multan</option>
                                <option name="Faisalabad" value="Faisalabad">Faisalabad</option>
                                <option name="RawalPindi" value="RawalPindi">RawalPindi</option>
                                <option name="Islamabad" value="Islamabad">Islamabad</option>
                            </select>
                
                        </div>
          
                      <button className="btn btn-danger btn-lg btn-block w-50 m-auto" type="submit" onClick={handleSubmitForm}>Reserve your seat</button>      
                      
                    </div>
                  </div>
                </div>

                { result == '' ? null :

                  <div class="col-12 mt-5 grid-margin stretch-card">
                    <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Available Buses</h4>
                          <p class="card-description">
                          Following buses are available for your search.
                          </p>
                              <div>

                                <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th class="col-1">Bus Name</th>
                                    <th class="col-1">Bus Source</th>
                                    <th class="col-1">Bus Destination</th>
                                    <th class="col-1">Available Seats</th>
                                    <th class="col-1">Per Ticket Price</th>
                                    <th class="col-2">Departure Date</th>
                                    <th class="col-1">Departure Time</th>
                                    <th class="col-2">Action</th>
                                </tr>
                                </thead>
                                <tbody>


                                <tr>
                                    <td >{result[0].bus_name}</td>
                                    <td >{result[0].bus_from}</td>
                                    <td >{result[0].bus_to}</td>
                                    <td >{result[0].bus_seats}</td>
                                    <td >{result[0].bus_price}</td>
                                    <td >{converter(result[0].bus_date)}</td>
                                    <td >{result[0].bus_time}</td>
                                    <td >
                                      <button className="border-0 bg-transparent">
                                        <Link class="btn btn-primary text-white" to="/login">
                                          Reserve ticket
                                        </Link>
                                      </button>
                                    </td>
                                </tr>


                                </tbody>
                                </table>

                              </div>
                      </div>
                    </div>
                  </div>

                } 

              </div>
            </div>

        </section>
    </div>

  )
}

export default Search