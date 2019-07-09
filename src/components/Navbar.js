import React, { Component } from "react";
import logo from "../images/coastieLogo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar nav">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" onClick={this.handleToggle}>
              <img width="100" src={logo} alt="Coastie logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" onClick={this.handleToggle}>Home</Link>
            </li>
            <li>
              <Link to="/communities" onClick={this.handleToggle}>Communities</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
