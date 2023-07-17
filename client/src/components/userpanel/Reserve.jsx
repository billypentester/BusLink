import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './../../styles/index.css'

function Reserve() {

 
  const navigate = useNavigate();
  const params = useParams();

  const [bus, setBus] = useState({
    name:'',
    from: '',
    to: '', number: '',
  })

  // const [sarr, setarr] = useState([])

  // const [scount, setScount] = useState(0);



  const handleSubmit = (e) => {

      const title = e.target.name
      const value = e.target.value
      console.log(title, value)
      setBus({...bus, [title]: value})
  }

  // const getC = (e) => {
    
  //   if(e.target.className === 'text-light rounded-3 p-2 bg-dark border-0 w-100'){
  //     e.target.className = 'text-light rounded-3 p-2 bg-success border-0 w-100';
  //     setarr(arr => [...arr, e.target.value])
  //     setScount(scount => scount + 1)
  //   }
  //   else{
  //     e.target.className = 'text-light rounded-3 p-2 bg-dark border-0 w-100';
  //     setarr(arr => arr.filter(item => item !== e.target.value))
  //     setScount(scount => scount - 1)
  //   }
  // }

  const [msg,setmsg] = useState('')

  const handleSubmitForm = async(e) => {

    if(bus.number < 1)
    { 
      setmsg(`You can minimum reserve single seat`)
    }
    else
    { 
      const result = await axios.post('/bus/booked/', bus)
      if(result.data.msg)
      { 
        setmsg(result.data.msg)
      }
      else{
        navigate('/user/panel/tickets')
      }
    }
   
  }

  const clearInputs = () => {

    setBus({ name:'', from: '', to: '', number: ''})

  }

  useEffect(() => {
    const result = async () => {
      try {
          setBus({ ...bus, name: params.name, from: params.from, to: params.to})
      }
      catch (err) {
        console.log(err)
      }
    }
    result()
  }, [])

  return (
    <div className="main-panel">        
    <div className="content-wrapper">
      <div>
        <div className="col-7 m-auto grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Reserve a Ticket</h4>
                <p className="card-description">
                  Enter your details to reserve a ticket
                </p>

                { msg ? <p className="bg-light p-3 text-dark fw-bold">{ msg }</p> : null }

                                      

                <div className="form-group">
                    <label for="exampleInputName1">Source</label>
                    <input type="text" className="form-control" id="exampleInputName1" value={bus.from} onChange={handleSubmit} name="from" placeholder="Enter Source"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputName1">Destination</label>
                    <input type="text" className="form-control" id="exampleInputName1" value={bus.to} onChange={handleSubmit} name="to" placeholder="Enter Destination"/>
                </div>

                <div className="form-group">
                    <label for="exampleInputName1">Select Seats</label>
                    <input type="number" className="form-control" id="exampleInputName1" value={bus.number} onChange={handleSubmit} name="number" placeholder="Enter Number of Tickets"/>
                </div>

                {/*<div className="d-flex">
                  <div className="col-6 py-3 border-black border-end d-flex flex-column justify-content-center align-items-center">
                    <span className="px-3 py-2 bg-primary rounded-3 text-white w-50 text-center">Front</span>
                    <div className="my-3">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div className="p-2">1</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='1' onClick={ getC } >1</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='2' onClick={ getC } >2</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='3' onClick={ getC } >3</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='4' onClick={ getC } >4</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">2</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='5' onClick={ getC } >5</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='6' onClick={ getC } >6</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='7' onClick={ getC } >7</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='8' onClick={ getC } >8</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">3</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='9' onClick={ getC } >9</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='10' onClick={ getC } >10</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='11' onClick={ getC } >11</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='12' onClick={ getC } >12</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">4</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='13' onClick={ getC } >13</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='14' onClick={ getC } >14</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='15' onClick={ getC } >15</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='16' onClick={ getC } >16</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">5</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='17' onClick={ getC } >17</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='18' onClick={ getC } >18</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">6</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='19' onClick={ getC } >19</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='20' onClick={ getC } >20</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='21' onClick={ getC } >21</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='22' onClick={ getC } >22</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">7</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='23' onClick={ getC } >23</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='24' onClick={ getC } >24</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='25' onClick={ getC } >25</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='26' onClick={ getC } >26</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">8</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='27' onClick={ getC } >27</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='28' onClick={ getC } >28</button>
                            </td>
                            <td>
                              <div className="text-light rounded-3 p-2"> ----- </div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='29' onClick={ getC } >29</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='30' onClick={ getC } >30</button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="p-2">9</div>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='31' onClick={ getC } >31</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='32' onClick={ getC } >32</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='33' onClick={ getC } >33</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='34' onClick={ getC } >34</button>
                            </td>
                            <td>
                              <button className="text-light rounded-3 p-2 bg-dark border-0 w-100" value='35' onClick={ getC } >35</button>
                            </td>
                          </tr>
                        </tbody> 
                      </table>
                    </div>
                  </div>
                  <div className="col-6 py-3 container">
                      <div className="d-flex flex-column ">
                          <div className="d-flex my-2">
                              <div className="w-50 bg-dark text-dark rounded mx-2">----</div>
                              <span>Available seats</span>
                          </div>
                          <div className="d-flex my-2">
                              <div className="w-50 bg-danger text-danger rounded mx-2">----</div>
                              <span>Booked seats</span>
                          </div>
                          <div className="d-flex p-3 justify-content-center text-center">
                              <h5>Selected Seats : </h5>
                              <h5> { + " " + scount } </h5>
                              {/* <input type="text" className="form-control" name="noofticket" value={ scount } onchange={handleSubmit} />
                          </div>
                      </div>
                  </div>
                </div> */}

                
              
                <div className="d-flex justify-content-center my-5">
                  <button type="submit" className="btn btn-primary text-white me-2" onClick={handleSubmitForm}>Submit</button>
                  <button type="submit" className="btn btn-light" onclick={clearInputs}>Cancel</button>
                </div>

              </div>
            </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Reserve