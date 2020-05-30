import React from "react";
import classes from "./BodyArtists.module.css";
import { NavLink } from "react-router-dom";

class BodyArtists extends React.Component {
  render() {
    return (
      <div className={classes.bodyArtists}>
        <NavLink to="/music-list/artists/name1">
          <div className={classes.item1}>
            <h3>Post Malone</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />

        <NavLink to="/music-list/artists/name2">
          <div className={classes.item1}>
            <h3>Mnogoznal</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />

        <NavLink to="/music-list/artists/name3">
          <div className={classes.item1}>
            <h3>DMX</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />

        <NavLink to="/music-list/artists/name4">
          <div className={classes.item1}>
            <h3>Linkin park</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />

        <NavLink to="/music-list/artists/name5">
          <div className={classes.item1}>
            <h3>Skillet</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />
        <div className={classes.lastBlock}>

        </div>
      </div>
    );
  }
}

export default BodyArtists;
