import {React, useState, useEffect} from 'react'
import Tcard from './Tcard'
import axios from 'axios'


function Tickets() {

  const [tickets, setTickets] = useState([])

  const getTickets = async() => {
    const result = await axios.get('/user/panel/tickets')
    setTickets(result.data.tickets)
  }

  useEffect(() => {
    getTickets()
    console.log(tickets)
  }, [])


  return (
    <div className="main-panel">        
        <div className="content-wrapper">
          <div>

          {

            tickets[0] ?

            tickets.map(ticket => {
              return (
                  <Tcard ticket={ticket} />
              )
            })

            :

            <div>
              <h4 className="bg-light p-3 rounded-3 text-dark  text-center">You did not reserve any bus ticket yet</h4>
            </div>

          }
            

          </div>
        </div>
      </div>
  )
}

export default Tickets