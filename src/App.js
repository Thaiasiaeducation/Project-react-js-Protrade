import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Signin from "./pages/SigninPage";
import Signup from "./pages/SignupPage";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Horizontal from "./Component/Horizontal/Horizontal";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Horizontal />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/:id" exact component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
