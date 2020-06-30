import React from "react";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Applications from "./Applications.jsx";
import Blog from "./Blog.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.screen.width <= 768) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    return (
      <Router>
        <Navbar mobile={this.state.mobile} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/applications" component={Applications} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}
