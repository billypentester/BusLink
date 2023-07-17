import {React, useState, useEffect} from 'react'
import axios from 'axios'

function Feadback(props) {

  const [user, setUser] = useState({
    _id:'' ,first_name: '', last_name: '', city: '' ,email: '', password: '', contactno: '' , feadbacks: [], tokens: []
  })

  const [data, setdata] = useState({ msg: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.name
    const value = e.target.value
    setdata({...data, [title]: value})
  }

  const handleSubmitForm = async(e) => {
    e.preventDefault()
    console.log(data)
    await axios.post('/user/feadback', data)
    setUser(props.user)
    window.location.reload(false);
  }

  const converter = (getDate) =>{
        
    var created_date = new Date(getDate)

    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Des']
    var date = created_date.getDate() + " " + month[created_date.getMonth()] + ', ' + created_date.getFullYear()

    return date

  }


  useEffect(() => {
      setUser(props.user)
  }, [props.user])


  return (
    <div className="main-panel">        
        <div className="content-wrapper">
          <div>
            <div className="col-7 m-auto grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">User Feadback</h4>
                    <p className="card-description">
                      Enter your feadback or issue in details
                    </p>

                        <div>
                            <div className="form-group">
                                <label for="exampleInputName1">Details</label>
                                <textarea type="text" name="msg" value={data.msg} onChange={handleSubmit} className="form-control" id="exampleInputName1" placeholder="Share your experience with our bus service"></textarea>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center my-4">
                            <button type="submit" className="btn btn-success text-white me-2" onClick={handleSubmitForm}>Send feadback</button>
                            <button className="btn btn-light">Cancel</button>
                        </div>
                      
                  </div>
                </div>
            </div>

            <div className="col-12 my-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Your Feadback</h4>
                    <p className="card-description">
                      Here are your given feadbacks or issues
                    </p>

                    <div className="container">

                        {

                          user.feadbacks ?

                            user.feadbacks.map((feadback, index) => {
                                return (
                                    <div className="d-flex flex-column p-4 my-1 bg-twitter rounded-3 text-white">
                                        <p className="text-white font-weight-bold py-1 col-9" style={{fontSize:'20px'}}>{feadback.msg}</p>
                                        <span className="d-flex justify-content-end text-light">{ converter(feadback.date) }</span>
                                    </div>
                                )
                            })

                          : null

                        }

                    </div>
                      
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Feadback