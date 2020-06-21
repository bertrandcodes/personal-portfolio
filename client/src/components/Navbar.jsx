import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleBurger } from '../redux/actions/index';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.navSlide = this.navSlide.bind(this)
    }

    navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.et-hero-tabs-container');
        const navLinks = document.querySelectorAll('.et-hero-tab')

        nav.classList.toggle('et-hero-tabs-container--active')

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 1.25s ease forwards ${index/7 + 0.25}s`;
            }
        })

        burger.classList.toggle('toggle');
    }

    render(){
        // const { burger, toggleBurger } = this.props;
    

        return (
            <Fragment>
                <nav>
                <div className="et-hero-tabs-container">
                    {/* <div className={burger ? "et-hero-tabs-container--active" : "et-hero-tabs-container"}> */}
                        <NavLink exact activeClassName="et-hero-tab--active" className="et-hero-tab" to="/">Home</NavLink>
                        <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/about">About</NavLink>
                        <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/applications">Applications</NavLink>
                        <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/blog">Blog</NavLink>
                        <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/resume">Resume</NavLink>
                        <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/contact">Contact</NavLink>
                    </div>
                    <div className="burger" onClick={()=>this.navSlide()}>
                    {/* <div className="burger" onClick={() => toggleBurger()}> */}
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                </nav>
            </Fragment>
        )
    }


}

const mapStateToProps = state => ({
    burger: state.burgerMenu
});

const mapDispatchToProps = dispatch => {
    return {
        toggleBurger: () => dispatch(toggleBurger())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);