import React from 'react'
import axios from 'axios'

function Tcard(props) {

    const query = "/bus/cancel/" + props.ticket.bus_number

    const handleSubmitForm = async(e) => {
        e.preventDefault()
        const result = await axios.get(query)
        console.log(result)
        window.location.reload(false);
    }

    const converter = (bus_date) =>{
        
        var created_date = new Date(bus_date)

        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Des']
        var date = created_date.getDate() + " " + month[created_date.getMonth()] + ', ' + created_date.getFullYear()

        return date
    }

    const arrconverter = (arr) =>{
        var str = ""
        for(var i = 0; i < arr.length; i++){
            str += arr[i]
            if(i != arr.length - 1){
                str += ", "
            }
        }
        return str
    }


  return (

    <div className="card text-center my-3 rounded-3">
        <div className="card-header bg-dark text-white">
            {props.ticket.bus_name}
        </div>
        <div className="card-body">
            <h3 className="card-title">Bus Ticket</h3>
            <div className="d-flex">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Ticket ID</th>
                            <td>{props.ticket._id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{props.ticket.name}</td>
                        </tr>
                        <tr>
                            <th>Source</th>
                            <td>{props.ticket.bus_from}</td>
                        </tr>
                        <tr>
                            <th>Bus Number</th>
                            <td>{props.ticket.bus_number}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>No. of Tickets</th>
                            <td>{props.ticket.noofticket}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{props.ticket.email}</td>
                        </tr>
                        <tr>
                            <th>Destination</th>
                            <td>{props.ticket.bus_to}</td>
                        </tr>
                        <tr>
                            <th>Bus Price</th>
                            <td>{props.ticket.bus_price}/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger text-white m-3" onClick={handleSubmitForm}>Cancel Ticket</button>
        </div>
        <div className="card-footer text-dark d-flex justify-content-around">
            <div> <span className="font-weight-bold"> Departure Date :</span>  <span>{ converter(props.ticket.bus_date) } </span></div>
            <div> <span className="font-weight-bold"> Departure Time : </span> <span>{props.ticket.bus_time} </span> </div>
        </div>
  </div>

  )
}

export default Tcard