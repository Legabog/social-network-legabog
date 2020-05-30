import React from "react";
import classes from "./HeaderAlbums.module.css";
import { NavLink } from "react-router-dom";

class HeaderAlbums extends React.Component {
  render() {
    return (
      <div className={classes.headerAlbums}>
        <NavLink to="/music-list">
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>Library</h3>
          </div>
        </NavLink>
        <h1>Albums</h1>
        <hr />
      </div>
    );
  }
}

export default HeaderAlbums;