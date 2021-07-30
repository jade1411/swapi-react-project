import React from "react";
import {Link} from 'react-router-dom'

function Home() {
  return (
    
    <div className="home">
      <div class="container">
        <div class="row align-items-left my-5">
          <div class="col-xl-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://a.allegroimg.com/s360/117c22/c98623fb4942bd0207c5bad7bbc1/Koszulka-Cute-Baby-Yoda-Gwiezdne-Wojny-S-Plec-Produkt-damski"
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
            <h1 class="font-weight-medium">Home</h1>
            <p>
              Here's the home page. 
            </p>
            <div class="col-lg-3">
            <Link to='/about'>
      <button type="button" className="btn btn-info">Luke Skywalker❤</button>
      </Link>
            <img
              class="img-fluid rounded mb-4 mb-lg-2"
              src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
              alt=""/>
            <div class="col-">
            <Link to='/about'>
      <button type="button" className="btn btn-info">С-3PO❤</button>
      </Link>
            <img
             src="https://starwars-visualguide.com/assets/img/characters/2.jpg" class="img-fluid rounded mb-4 mb-lg-2" alt="..."/>
          </div>
          <div class="col-">
            
          <Link to='/about'>
      <button type="button" className="btn btn-info">Darth Vader❤</button>
      </Link>
            <img
              class="img-fluid rounded mb- mb-lg-2"
              src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
              alt=""/>
          </div>
          <div class="row align-items-right my-5">
          <div class="col-12">
          <Link to='/about'>
      <button type="button" className="btn btn-info">Leia Organa❤</button>
      </Link>
            <img
              class="img-fluid rounded mr-"
              src="https://starwars-visualguide.com/assets/img/characters/5.jpg"
              alt=""/>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
async function fetchMetaData() {
  let allData = [];
  let morePagesAvailable = true;
  let currentPage = 0;

  while(morePagesAvailable) {
    currentPage++;
    const response = await fetch(`https://swapi.dev/api/people`)
    let { data, total_pages } = await response.json();
    data.forEach(e => allData.unshift(e));
    morePagesAvailable = currentPage < total_pages;
  }

  return allData;
}

export default Home;