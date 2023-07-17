import {React} from 'react'
import { Link } from 'react-router-dom';

function Content(props) {

  return (
    <div className="main-panel">
        <div className="content-wrapper">
      
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex align-items-end flex-wrap">
                            <div className="me-md-3 me-xl-5">
                                <h2>Welcome back, <span className="text-primary">{ props.user.first_name} { props.user.last_name }</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="row">
                <div className="col-md-7 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">Your Information</p>
                            <p className="mb-4">Your details registered in our database which will use for ticket reservation</p>
                            <table className="table">
                                <tbody>
                                    <tr>
                                    <th>First Name</th>
                                    <td>{ props.user.first_name}</td>
                                    </tr>
                                    <tr>
                                    <th>Last Name</th>
                                    <td>{ props.user.last_name }</td>
                                    </tr>
                                    <tr>
                                    <th>City</th>
                                    <td>{ props.user.city }</td>
                                    </tr>
                                    <tr>
                                    <th>Email</th>
                                    <td>{ props.user.email }</td>
                                    </tr>
                                    <tr>
                                    <th>Phone no.</th>
                                    <td>{ props.user.contactno }</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-center"> 
                                <div className="my-4">
                                    <Link to="/user/panel/update" className="btn btn-primary text-white me-2">Update Information</Link>
                                </div>
                                <div className="my-4">
                                    <Link to="/user/panel/delete" className="btn btn-danger text-white me-2">Delete Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <p className="card-title">Statistics</p>
                        <div className="d-flex flex-column">

                            <div className="bg-success w-full p-3 rounded-3 text-white my-2">
                            <div className="d-flex justify-content-between align-content-end">
                                <i className="mdi mdi-ticket d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                <div className="text-end">
                                    <h2>{ props.stat.ticket }</h2>
                                    <span>Your tickets</span>
                                </div>
                            </div>
                            </div>
                            <div className="bg-facebook w-full p-3 rounded-3 text-white my-2">
                            <div className="d-flex justify-content-between align-content-end">
                                <i className="mdi mdi-forum d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                <div className="text-end">
                                    <h2>{ props.stat.feadbacks }</h2>
                                    <span>Your feadback</span>
                                </div>
                            </div>
                            </div>
                            <div className="bg-dark w-full p-3 rounded-3 text-white my-2">
                            <div className="d-flex justify-content-between align-content-end">
                                <i className="mdi mdi-routes d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                <div className="text-end">
                                    <h2>5</h2>
                                    <span>Available bus routes</span>
                                </div>
                            </div>
                            </div>
                            <div className="bg-danger w-full p-3 rounded-3 text-white my-2">
                            <div className="d-flex justify-content-between align-content-end">
                                <i className="mdi mdi-bus d-flex align-items-center" style={{fontSize: '40px;'}}></i>
                                <div className="text-end">
                                    <h2>{ props.stat.buses }</h2>
                                    <span>Available buses</span>
                                </div>
                            </div>
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

export default Content