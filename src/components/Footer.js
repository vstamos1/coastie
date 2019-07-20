/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components

// nodejs library that concatenates classes
//import classNames from "classnames";
// import { List, ListItem, withStyles } from "@material-ui/core";

// // @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

// import footerStyle from "../assets/components/footerStyles";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  // const footerClasses = classNames({
  //   [classes.footer]: true,
  //   [classes.footerWhiteFont]: whiteFont
  // });
  // const aClasses = classNames({
  //   [classes.a]: true,
  //   [classes.footerWhiteFont]: whiteFont
  // });
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <ul className='list'>
            <li className="inlineBlock">
              <a
                href="https://vincentstamos.com"
                className="block"
                target="_blank"
              >
                VS
              </a>
            </li>
            <li className="inlineBlock">
              <a
                href="https://vincentstamos.com/#about"
                className="block"
                target="_blank"
              >
                About us
              </a>
            </li>
            <li className="inlineBlock">
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className="block"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li className="inlineBlock">
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className="block"
                target="_blank"
              >
                Licenses
              </a>
            </li>
          </ul>
        </div>
        <div className="right">
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <i class="fas fa-heart"></i>{" "}by{" "}
          <a
            href="https://vincentstamos.com"
            className="aClasses"
            target="_blank"
          >
            V<i class="fas fa-fire"></i>S
          </a>{" "}
          
        </div>
      </div>
    </footer>
  );
}


export default  Footer;
