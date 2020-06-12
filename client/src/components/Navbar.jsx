import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Fragment>
            <nav>
                <div className="et-hero-tabs-container">
                    <NavLink exact activeClassName="et-hero-tab--active" className="et-hero-tab" to="/">Home</NavLink>
                    <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/applications">Applications</NavLink>
                    <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/blog">Blog</NavLink>
                    <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/resume">Resume</NavLink>
                    <NavLink activeClassName="et-hero-tab--active" className="et-hero-tab" to="/contact">Contact</NavLink>
                </div>
                <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
            </nav>
        </Fragment>
    )
}