import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About, Applications, Projects, Resume, Contact, NotFound } from "@pages";
import { Navbar, Footer, ScrollToTop } from "@components";
import { Logger, Payments, Restocking, SDC } from "./pages/Projects/posts";
import "./style.scss";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/applications" component={Applications} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/projects/sdc" component={SDC} />
      <Route path="/projects/restocking" component={Restocking} />
      <Route path="/projects/payments" component={Payments} />
      <Route path="/projects/logger" component={Logger} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
