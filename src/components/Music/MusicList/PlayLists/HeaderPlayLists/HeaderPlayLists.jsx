import React from "react";
import classes from "./HeaderPlayLists.module.css";
import { NavLink } from "react-router-dom";

class HeaderPlayLists extends React.Component {
  render() {
    return (
      <div className={classes.headerPlayLists}>
        <NavLink to="/music-list">
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>Library</h3>
          </div>
        </NavLink>

        <h1>PlayLists</h1>
      </div>
    );
  }
}

export default HeaderPlayLists;