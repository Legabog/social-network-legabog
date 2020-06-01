import React from "react";
import classes from "./HeaderMusicPlayer.module.css";
import { NavLink } from "react-router-dom";

class HeaderMusicPlayer extends React.Component {
  render() {
    return (
      <div className={classes.headerMusicPlayer}>
         
        <NavLink to={"/music-list/artists/" + this.props.nameArtist}>
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>{this.props.nameArtist}</h3>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default HeaderMusicPlayer;
