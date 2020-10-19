import React from "react";
import "../../src/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/pages/general/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ContactUs from "../contact/ContactUs";

import Login from "../LoginRegisterBox";
import Signup from "../Register/index";
import Preview from "../homePage/Video";
import Sport from "../otherSite/Sport";
import instructors from "../components/instructors/profileinstructor";
import Add from "../components/instructors/Add";
import Science from '../otherSite/Science'
import Food from '../otherSite/Food'
import Music from '../otherSite/Music'
import LifeStyle from '../otherSite/LifeStyle'

// import FormDialog from "./testLogin";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/add" exact component={Add} />
          <Route path="/" exact component={Home} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/Login" exact component={FormDialog} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Preview" exact component={Preview} />
          <Route path="/sport" exact component={Sport} />
          <Route path="/science" exact component={Science} />
          <Route path="/food" exact component={Food} />
          <Route path="/music" exact component={Music} />
          <Route path="/lifeStyle" exact component={LifeStyle} />
          <Route path="/api/queries/:id" exact component={instructors} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}