import React from 'react'
import { Link } from 'react-router-dom'

function Results(props) {

    const query = "/user/panel/reserve/" + props.bus.bus_name + "/" + props.bus.bus_from + "/" + props.bus.bus_to + "/" + props.bus.bus_seats

  return (

    <tr>
        <td scope="row">{props.bus.bus_name}</td>
        <td scope="row">{props.bus.bus_from}</td>
        <td scope="row">{props.bus.bus_to}</td>
        <td scope="row">{props.bus.bus_seats}</td>
        <td scope="row">{props.bus.bus_price}/-</td>
        <td scope="row">{props.bus.bus_date}</td>
        <td scope="row">{props.bus.bus_time}</td>
        <td scope="row">
            <Link class="btn btn-primary text-white" to={query}>Reserve ticket</Link>
        </td>
    </tr>

  )
}

export default Results