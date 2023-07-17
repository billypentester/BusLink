import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="my-4">
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-facebook-f"></i>
            </a>
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-twitter"></i>
            </a>
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-google"></i>
            </a>
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-instagram"></i>
            </a>
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-linkedin-in"></i>
            </a>
            <a className="p-3 m-3" href="#!" role="button">
              <i style={{fontSize: '30px'}} className="text-white fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © Copyright
          <a className="text-white" href="#">2021-2022</a>
        </div>

    </footer>

  )
}

export default Footer