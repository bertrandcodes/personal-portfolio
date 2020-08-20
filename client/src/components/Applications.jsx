import React, { Fragment } from "react";
import ScrollIndicator from "./ScrollIndicator.jsx";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";

export default function Applications() {
  const [isOpenSquad, setIsOpenSquad] = React.useState(false);

  const showModalSquad = () => {
    setIsOpenSquad(true);
  };

  const hideModalSquad = () => {
    setIsOpenSquad(false);
  };

  const [isOpenHire, setIsOpenHire] = React.useState(false);

  const showModalHire = () => {
    setIsOpenHire(true);
  };

  const hideModalHire = () => {
    setIsOpenHire(false);
  };

  const [isOpenAdidas, setIsOpenAdidas] = React.useState(false);

  const showModalAdidas = () => {
    setIsOpenAdidas(true);
  };

  const hideModalAdidas = () => {
    setIsOpenAdidas(false);
  };

  const [isOpenSystem, setIsOpenSystem] = React.useState(false);

  const showModalSystem = () => {
    setIsOpenSystem(true);
  };

  const hideModalSystem = () => {
    setIsOpenSystem(false);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Applications | Bertrand Shao</title>
        <meta
          name="description"
          content="Check out stuff I made. Many more exciting apps to come."
        ></meta>
      </Helmet>
      <ScrollIndicator />
      <div className="page-body">
        <main className="page-content">
          <div className="card">
            <div className="content">
              <h2 className="title">Squad Goals</h2>
              <p className="copy">
                A mobile-first web app that holds you accountable to goals with
                the help of teammates and friends.
              </p>
              <a href="#squad-goals">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <h2 className="title">Hire-Mee</h2>
              <p className="copy">
                An app that helps manage information related to the jobs you're
                applying for.
              </p>
              <a href="#hire-mee">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Adidas Mock-Up</h2>
              <p className="copy">
                A fully-functional clone of an Adidas product page done using
                Redux.
              </p>
              <a href="#FEC">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">System Design</h2>
              <p className="copy">
                Increased a database to hold 10,000,000 records and horizontally
                scaled servers for speed.
              </p>
              <a href="#SDC">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="marquee-div">
        <marquee>
          &lt;React&gt; &lt;Redux&gt; &lt;Node.js&gt; &lt;Express&gt;
          &lt;Firebase&gt; &lt;MongoDB&gt; &lt;PostgreSQL&gt;
        </marquee>
      </div>
      <div className="apps">
        <a name="squad-goals"></a>
        <div className="app-div">
          <h1 className="app-text">Squad Goals</h1>
          <div className="line"></div>

          <figure className="iphone">
            <div className="side-buttons">
              <div></div>
            </div>

            <div className="phone">
              <div className="top">
                <div>
                  <span className="camera"></span>
                  <span className="speaker"></span>
                </div>
              </div>

              <div className="screen">
                <video
                  className="iphone-video"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src="squadgoalsdemo.mov" type="video/mp4" />
                </video>
              </div>

              <div className="bottom">
                <div></div>
              </div>
            </div>
          </figure>

          <div className="tech-bar">
            <center>
              <p className="tech-used">
                React | Redux | Firebase | Material-UI
              </p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button className="info-button" onClick={showModalSquad}></button>
              <Modal
                show={isOpenSquad}
                onHide={hideModalSquad}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>Squad Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="app-description">
                    A mobile first accountability tracker app that leverages
                    support from others to hit daily and longterm goals.
                    Features include: fully secure login and signup
                    authentication, friend-adding functionality, profile picture
                    upload, daily multiplayer challenges, and streaks/past
                    completion history.
                  </div>
                  <ul>
                    <li>
                      Deployed a streak feature using scheduled cloud functions
                      to hold users accountable and maintain consistent progress
                    </li>
                    <li>
                      Leveraged Firebase to provide authorized real-time updates
                      as part of a fresh and secure user experience
                    </li>
                    <li>
                      Composed a highly structured and clean layout using
                      Material-UI framework
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModalSquad}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="play-div">
              <a
                href="https://squadgoals.dev"
                target="_blank"
                className="round-button"
              >
                <i className="fa fa-play fa-2x"></i>
              </a>
              <p className="github-text">Play</p>
            </div>
            <div className="app-github">
              <a
                href="https://github.com/bertrandcodes/Squad-Goals"
                target="_blank"
              >
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <a name="hire-mee"></a>
        <div className="app-div">
          <h1 className="app-text">Hire-Mee</h1>
          <div className="line"></div>
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="hiremeedemo.mov" type="video/mp4" />
          </video>
          <div className="tech-bar">
            <center>
              <p className="tech-used">
                React | PostgreSQL | Express | Node.js
              </p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button className="info-button" onClick={showModalHire}></button>
              <Modal
                show={isOpenHire}
                onHide={hideModalHire}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>Hire-Mee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="app-description">
                    Inspired by the overwhelming volume of job applications
                    among our fellow job-seeking peers, my team and I designed
                    Hire-Mee as a platform to organize and display all job
                    sensitive information. Features include: an interactive list
                    that allows user to seamlessly move jobs between different
                    status piles, user statistic page along with individual job
                    post modals that display information, fully-functional
                    friends list, leaderboard feature, and interactive map that
                    allows users to track job locations relative to themselves.
                  </div>
                  <ul>
                    <li>
                      Leveraged PostgreSQL to build a one-to-many friends
                      feature that supplies updated information between users
                    </li>
                    <li>
                      Retrieved data points to create a real-time leaderboard
                      that allows users to directly track progress against each
                      other
                    </li>
                    <li>
                      Implemented an interactive map using Google Maps API that
                      displays job locations relative to each other as well as
                      the user
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModalHire}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="play-div">
              <a
                href="http://54.151.84.70:3000/"
                target="_blank"
                className="round-button"
              >
                <i className="fa fa-play fa-2x"></i>
              </a>
              <p className="github-text">Play</p>
            </div>
            <div className="app-github">
              <a href="https://github.com/hire-mee" target="_blank">
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <a name="FEC"></a>
        <div className="app-div">
          <h1 className="app-text">adidas Product Page Mock-Up</h1>
          <div className="line"></div>
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="productadidas.mov" type="video/mp4" />
          </video>
          <div className="tech-bar">
            <center>
              <p className="tech-used">React | Redux | Express | MongoDB</p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button
                className="info-button"
                onClick={showModalAdidas}
              ></button>
              <Modal
                show={isOpenAdidas}
                onHide={hideModalAdidas}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>adidas Product Page Mock-up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>
                      Utilized React along with ​reconciliation logic​ to
                      emulate a fully functioning Adidas product page
                    </li>
                    <li>
                      Deployed proxy server on ​AWS EC2​ instance while adhering
                      to ​service oriented architecture​ principles
                    </li>
                    <li>
                      Dockerized​ web app to ensure consistent runtime
                      environment and cross-platform execution
                    </li>
                    <li>Refactored codebase using Redux</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModalAdidas}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="app-github">
              <a
                href="https://github.com/HRLA35-CS-ADIDAS/Bertrand_Product_View"
                target="_blank"
              >
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <a name="SDC"></a>
        <div className="app-div">
          <h1 className="app-text">System Design</h1>
          <div className="line"></div>
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="sdc.mp4" type="video/mp4" />
          </video>
          <div className="tech-bar">
            <center>
              <p className="tech-used">PostgreSQL | AWS | Node.js | NGINX</p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button
                className="info-button"
                onClick={showModalSystem}
              ></button>
              <Modal
                show={isOpenSystem}
                onHide={hideModalSystem}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>System Design</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>
                      Increased data set from 100 to 10,000,000 unique records
                      efficiently by using ​draining​ and ​streaming​ techniques
                    </li>
                    <li>
                      Horizontally scaled​ a legacy code base deployed over ​5
                      AWS T2 micro instances​ capable of handling ​2100 requests
                      per second(average latency 67 ms, error rate 0.0%)
                    </li>
                    <li>
                      Implemented Nginx as a ​round-robin/least-conn​​load
                      balancer ​and​ cache​ to further reduce latency by 27%
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <NavLink style={{ color: "black" }} to="/blog">
                    <button>Learn More</button>
                  </NavLink>
                  <button onClick={hideModalSystem}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="app-github">
              <a
                href="https://github.com/HRLA35-SDC/Bertrand-SDC-Component"
                target="_blank"
              >
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
