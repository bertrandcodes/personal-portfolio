import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Applications, Contact, Resume, About, NotFound } from "@pages";
import { Navbar, Footer, ScrollToTop } from "@components";
// import Blog from "./components/Blog.jsx";
import "./style.scss";

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/applications" component={Applications} />
      {/* <Route path="/blog" component={Blog} /> */}
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
