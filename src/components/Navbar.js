import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

import { Navigation, NavigationLink } from './Navbar.styles';

import './menu.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  } 

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'active',
              overlayBarActiveClass: 'open',
              animateActiveClass: 'animate',
            })
          : this.setState({
              navBarActiveClass: '',
              overlayBarActiveClass: '',
              animateActiveClass: ''
            })
      }
    )
  }

  render() {
    return (
      <Navigation
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div className="hamburgerWrapper">
              <div
                className={`button_container ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              > 
                <span>Meny</span>
                <div class={`hamburger-menu ${this.state.animateActiveClass}`}></div>
              </div>
            </div>
          </div>
          <div
            id="overlay"
            className={`overlay navbar-menu ${this.state.overlayBarActiveClass}`}
          >
            <div className="overlay-menu has-text-centered">
              <ul>
                <li>
                  <NavigationLink to="/">
                    Hem
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/about">
                    Vilka är vi 
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/volunteer">
                    Hjälp till
                  </NavigationLink>
                </li>
                <li>
                  <NavigationLink to="/blog">
                    Aktuella tävlingar
                  </NavigationLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
      </Navigation>
    )
  }
}

export default Navbar
