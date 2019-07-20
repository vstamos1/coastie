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
  headerColorChange = () => {  
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 100) {
      document.body
        .getElementsByTagName("nav")[0]
        .classList.remove("color");

        
      document.body
        .getElementsByTagName("nav")[0]
        .classList.add("color");
    } else {
      document.body
        .getElementsByTagName("nav")[0]
        .classList.add("color");
      document.body
        .getElementsByTagName("nav")[0]
        .classList.remove("color");
    }
  };

  componentDidMount() {
    if (true) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }

  render() {
    return (
      <nav className="navbar nav">
        <div className="nav-center">
          <div  className="nav-header pt-1">
            <Link to="/" onClick={this.handleToggle}>
              <h4 className="pt-1 brand">Coastie.Us</h4>
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
