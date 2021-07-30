import React from "react";
import {Link} from 'react-router-dom'
function Contact() {
  return (
    
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://media.makeameme.org/created/hire-me-please-d12ef2a0b4.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
          <ul class="pagination justify-content-center">
        <li class="page-item"> <Link to="/">
      <button type="button" className="btn btn-info">1</button>
      </Link></li>
        <li class="page-item"> <Link to='/about'>
      <button type="button" className="btn btn-info">2</button>
      </Link></li>
        <li class="page-item"> <Link to='/Contact'>
      <button type="button" className="btn btn-info">3</button>
      </Link></li>
    </ul>
            <h1 class="font-weight-medium">Contact</h1>
            <p>
             email:eprikul1703@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;