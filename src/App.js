import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, PaginationBar } from "./components";



function App() {
  return (
    
  <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <PaginationBar />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}



export default App;