import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About, Applications, Blog, Resume, Contact, NotFound } from "@pages";
import { Navbar, Footer, ScrollToTop } from "@components";
import { SDC } from "./pages/Blog/posts";
import "./style.scss";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/applications" component={Applications} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/sdc" component={SDC} />
      <Route path="/blog/restocking" component={SDC} />
      <Route path="/blog/payment" component={SDC} />
      <Route path="/blog/logger" component={SDC} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
