import {React, useState} from 'react'
import axios from 'axios'
import Results from './Results'

function Finder() {

  const [bus, findbus] = useState({
    bus_from: '', bus_to: ''
  })

  const [msg,setmsg] = useState()

  const [result, setResult] = useState([])

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
 
    if(result.data.result) {
      setResult(result.data.result)
    }
    else
    { 
      setmsg(result.data.msg) 
    }

  }


  return (
    <div className="main-panel">        
        <div className="content-wrapper">
          <div>
            <div className="col-7 m-auto grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Find Buses</h4>
                    <p className="card-description">
                      Enter your details to find a bus for you.
                    </p>

                    { msg ? <p className="bg-light p-3 text-dark fw-bold">{ msg }</p> : null }

                    <div className="row">

                        <div className="form-group col-md-6">
                            <label for="exampleFormControlSelect3">From</label>
                            <select className="form-control form-control-sm" id="exampleFormControlSelect3" value={bus.bus_from} onChange={handleSubmit}  name="bus_from">
                              <option value="" selected>from</option>
                              <option name="Lahore" value="Lahore">Lahore</option>
                              <option name="Multan" value="Multan">Multan</option>
                              <option name="Faisalabad" value="Faisalabad">Faisalabad</option>
                              <option name="RawalPindi" value="RawalPindi">RawalPindi</option>
                              <option name="Islamabad" value="Islamabad">Islamabad</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="exampleFormControlSelect4">To</label>
                            <select className="form-control form-control-sm" id="exampleFormControlSelect4" value={bus.bus_to} onChange={handleSubmit}  name="bus_to">
                              <option value="" selected>to</option>
                              <option name="Lahore" value="Lahore">Lahore</option>
                              <option name="Multan" value="Multan">Multan</option>
                              <option name="Faisalabad" value="Faisalabad">Faisalabad</option>
                              <option name="RawalPindi" value="RawalPindi">RawalPindi</option>
                              <option name="Islamabad" value="Islamabad">Islamabad</option>
                            </select>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary text-white me-2" onClick={handleSubmitForm}>Search</button>
                    </div>
                  
                  </div>
                </div>
            </div>


            <div className="col-12 mt-5 grid-margin stretch-card">
              <div className="card">
                  <div className="card-body">
                  <h4 className="card-title">Available Buses</h4>
                  <p className="card-description">
                      Following buses are available for your search.
                  </p>
                      <div>

                          <table className="table table-hover text-center">
                          <thead>
                              <tr>
                              <th scope="col" className="col-1">Bus Name</th>
                              <th scope="col" className="col-1">Bus Source</th>
                              <th scope="col" className="col-1">Bus Destination</th>
                              <th scope="col" className="col-1">Available Seats</th>
                              <th scope="col" className="col-1">Per Ticket Price</th>
                              <th scope="col" className="col-2">Departure Date</th>
                              <th scope="col" className="col-1">Departure Time</th>
                              <th scope="col" className="col-2">Action</th>
                              </tr>
                          </thead>
                          <tbody>

                          {  
                              result.map((bus, index) => {
                                  return (
                                      <Results bus={bus} key={index}/>
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

export default Finder