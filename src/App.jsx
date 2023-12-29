import React from "react";
import { Home, Navbar } from "@pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Applications from "./components/Applications.jsx";
import Blog from "./components/Blog.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NotFound from "./components/NotFound.jsx";
import "./style.scss";
import { Footer } from "@components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/applications" component={Applications} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
