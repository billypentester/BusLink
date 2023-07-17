import React from 'react'

function Testimonial() {
  return (

    <div id="carouselMultiItemExample" className="carousel slide carousel-light bg-dark text-center my-5 text-light" data-mdb-ride="carousel">

        <h1 className="display-5 pt-5 text-light">Testimonial</h1>

        <div className="carousel-inner py-5 ">
            <div className="carousel-item active pb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4" src="https://avatars.githubusercontent.com/u/50988601?s=400&u=6f096c5e47ec0905a2eadc9955d5af1af2e65c3e&v=4" alt="avatar" style={{ width: "150px", height: "150px", objectFit: "cover"}}/>
                            <h5 className="mb-3">Bilal Ahmad</h5>
                            <p>Vlogger</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            I have been travling this service many time. Main thing about them is their business model is same as daewoo pakistan. You got all premium facilities in less money. </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img
                                className="rounded-circle shadow-1-strong mb-4"
                                src="https://pbs.twimg.com/profile_images/1234888169075695616/ks3_KUVG_400x400.jpg"
                                alt="avatar"
                                style={{ width: "150px", height: "150px", objectFit: "cover"}}
                            />
                            <h5 className="mb-3">Aneeq Khurram</h5>
                            <p>Traveller</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            This online site is very good Service, especially they give very good discount in online booking through easy tickets or banking app.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li>
                                    <i className="fas fa-star-half-alt fa-sm"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img
                                className="rounded-circle shadow-1-strong mb-4"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                                alt="avatar"
                                style={{ width: "150px", height: "150px", objectFit: "cover"}}
                            />
                            <h5 className="mb-3">Osama Arshad</h5>
                            <p>Explorer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Bus service was excellent. Customer service was great. Buses were clean and comfy. Free hot beverages were very good as well. Really enjoyed their great service.</p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="fas fa-star fa-sm"></i></li>
                                <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Testimonial