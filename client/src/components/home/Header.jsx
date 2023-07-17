import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="p-5 text-center bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')", height: "90vh" }}>
        <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                  <h1 className="display-6">Book your next bus experience</h1>
                  <h4>We will give you the best travelling service</h4>
                  <Link style={{ border: '1px solid white'  }}  className="btn bg-transparent text-light shadow-lg btn-rounded btn-lg my-4" to="/search" role="button" data-mdb-ripple-color="dark">
                   <div class="d-flex justify-content-center align-items-center ">
                      <i class="fa fa-search m-2"></i> 
                      <span class="m-2 ">Book your seat</span>
                   </div>
                  </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header