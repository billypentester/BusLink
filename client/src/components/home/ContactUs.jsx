import {React, useState } from 'react'
import axios from 'axios';

function ContactUs() {

  const [user, setUser] = useState({
    name: '', email: '', message: ''
  })

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    setUser({...user, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()
    const result = await axios.post('/contactus', user)
    setName(result.data.result.name)
  }

  return (
    
    <section className="my-5">

      <h2 className="display-5 my-5 text-center">Contact us</h2>

          <div className="d-flex flex-column justify-content-center">

            <div id="contact-form" className="col-11 col-md-6 container">

              { name ? <h6 className="text-center text-success">Thank you for your message {name}</h6> : <h6 className="text-center">Please fill out the form below</h6> }

              <div className="form-outline border-1 border-danger my-4">
                <input name="name" type="text" id="typeEmailX-2" value={user.name} onChange={handleSubmit} className="form-control bg-light form-control-lg" />
                <label className="form-label text-dark" for="typeEmailX-2">Name</label>
              </div>

              <div className="form-outline my-4">
                <input name="email" type="email" id="typeEmailX-2" value={user.email} onChange={handleSubmit} className="form-control bg-light form-control-lg" />
                <label className="form-label text-dark" for="typeEmailX-2">Email</label>
              </div>

              <div className="form-outline my-4">
                <input name="message" type="text" id="typeEmailX-2" value={user.message} onChange={handleSubmit} className="form-control bg-light form-control-lg" />
                <label className="form-label text-dark" for="typeEmailX-2">Message</label>
              </div>

            </div>

            <div className="text-center d-grid  d-flex justify-content-center">
              <button type="submit" onClick={handleSubmitForm} className="btn btn-large col-3 btn-primary py-3">Send</button>
            </div>

          </div>

    </section>

  )
}

export default ContactUs