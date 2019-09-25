import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ title, icon }) => {
  return (
    <div>
      <i className={icon} />
      {title}
      <ul className="list">
        <li className="list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
NavBar.defaultProps = {
  title: "Contact Keepet",
  icon: "fas fa-id-card-alt"
};
export default NavBar;
