import {React, useState, useEffect} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios'

function Dashboard(props) {

  const [stat,setstat] = useState({
    buses : '',
    tickets : '',
    users : '',
    contacts : ''
  })

  const [users,setuser] = useState([])
  const [city,setcity] = useState([])
  const [status,setstatus] = useState({})

  const result = async() => {
    try{
        const result = await axios.get('/admin/statistics')
        const userPerBus = await axios.get('/admin/userperBus')
        const userPerCity = await axios.get('/admin/userpercity')
        const status = await axios.get('/admin/busstatus')
        setstat(result.data)
        setuser(userPerBus.data.result)
        setcity(userPerCity.data.result)
        setstatus(status.data.result)
    }
    catch(err)
    {
      console.log(err)
    }
    
  }

  ChartJS.register( CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend );


  const data = {
    labels: users.map(user => user._id),
    datasets: [
      {
        data: users.map(user => user.count),
        backgroundColor: [ 
          'rgba(54, 162, 235, 0.5)',  
          'rgba(255, 206, 86, 0.5)',  
          'rgba(75, 192, 192, 0.5)',  
          'rgba(153, 102, 255, 0.5)',  
          'rgba(255, 159, 64, 0.5)',  
          'rgba(255, 99, 132, 0.5)',  
          'rgba(21, 162, 235, 0.5)'
         ],
         borderColor:[
          'rgba(54, 162, 235, 0.5)',  
          'rgba(255, 206, 86, 0.5)',  
          'rgba(75, 192, 192, 0.5)',  
          'rgba(153, 102, 255, 0.5)',  
          'rgba(255, 159, 64, 0.5)',  
          'rgba(255, 99, 132, 0.5)',  
          'rgba(21, 162, 235, 0.5)'
         ],
         borderWidth: 1,
      }
    ],
  };

  const data2 = {
    labels: ['Available', 'Unavailable'],
    datasets: [
      {
        data: [status.available, status.unavailable],
        backgroundColor: [                         
          'rgba(54, 162, 235, 0.5)',  
          'rgba(255, 206, 86, 0.5)',  
          'rgba(75, 192, 192, 0.5)',  
          'rgba(153, 102, 255, 0.5)',  
          'rgba(255, 159, 64, 0.5)',  
          'rgba(255, 99, 132, 0.5)',  
          'rgba(21, 162, 235, 0.5)'
        ],
        borderColor:[
          'rgba(54, 162, 235, 0.5)',  
          'rgba(255, 206, 86, 0.5)',  
          'rgba(75, 192, 192, 0.5)',  
          'rgba(153, 102, 255, 0.5)',  
          'rgba(255, 159, 64, 0.5)',  
          'rgba(255, 99, 132, 0.5)',  
          'rgba(21, 162, 235, 0.5)'
         ],
        borderWidth: 1,
      }
    ],
  };

  useEffect(() => {
      result()
  }, [])


  return (
    <div className="main-panel">
        <div className="content-wrapper">
      
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-end flex-wrap">
                            <div className="me-md-3 me-xl-5">
                                <h2>Welcome back, <span className="text-primary">{ props.admin.name}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <div>
                <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <p className="card-title">Statistics</p>
                        <div className="d-flex justify-content-between">

                            <div className="bg-dark w-full p-3 rounded-3 text-white mx-2" style={{width:"24%"}}>
                              <div className="d-flex justify-content-between align-content-end">
                                  <i className="mdi mdi-account d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                  <div className="text-end">
                                      <h2>{stat.users}</h2>
                                      <span>Total Users</span>
                                  </div>
                              </div>
                            </div>
                            <div className="bg-danger w-full p-3 rounded-3 text-white mx-2" style={{width:"24%"}}>
                              <div className="d-flex justify-content-between align-content-end">
                                  <i className="mdi  mdi-bus d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                  <div className="text-end">
                                      <h2>{stat.buses}</h2>
                                      <span>Total Buses</span>
                                  </div>
                              </div>
                            </div>
                            <div className="bg-success w-full p-3 rounded-3 text-white mx-2" style={{width:"24%"}}>
                              <div className="d-flex justify-content-between align-content-end">
                                  <i className="mdi mdi-ticket d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                  <div className="text-end">
                                      <h2>{stat.tickets}</h2>
                                      <span>Total Tickets</span>
                                  </div>
                              </div>
                            </div>
                            <div className="bg-facebook w-full p-3 rounded-3 text-white mx-2" style={{width:"24%"}}>
                              <div className="d-flex justify-content-between align-content-end">
                                  <i className="mdi mdi-forum d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                  <div className="text-end">
                                      <h2>{stat.contacts}</h2>
                                      <span>Total Feadbacks</span>
                                  </div>
                              </div>
                            </div>
                        </div>                
                        </div>
                    </div>
                </div>
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                      <div className="card-body">
                        <p className="card-title">No. of Traveller per bus</p>
                          <div className="d-flex justify-content-center">

                            <Bar data={data} />

                          </div>                
                      </div>
                  </div>
                </div>
                <div className="col-md-12 grid-margin stretch-card d-flex justify-content-around">
                  <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                          <p className="card-title">Total Income</p>
                            <div className="d-flex justify-content-center">

                              <Pie data={data2} />

                            </div>                
                        </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                          <p className="card-title">Bus Status</p>
                            <div className="d-flex justify-content-center">

                              <Pie data={data2} />

                            </div>                
                        </div>
                    </div>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard