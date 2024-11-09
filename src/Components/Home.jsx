import React from 'react'
import bg from  './assets/bg.jpg'
import Product from './Product';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <div className="card text-bg-dark text-white border-0">
        <img src={bg} className="card-img" alt="background" height="550px" />

        <div className="card-img-overlay d-flex flex-column
        justify-content-center">
          <div className="container d-flex flex-column justfiy-content-center">
                
            <h5 className="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            
            <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Product />
      <Footer />
    </div>
  );
}

export default Home
