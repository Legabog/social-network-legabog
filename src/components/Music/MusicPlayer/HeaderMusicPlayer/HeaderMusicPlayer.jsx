import React from "react";
import classes from "./HeaderMusicPlayer.module.css";
import { NavLink } from "react-router-dom";

const HeaderMusicPlayer = (props) => {
  return (
    <div className={classes.headerMusicPlayer}>
      <NavLink to={ props.switcher === 1 ?  "/music-list/artists/" + props.nameArtist : "/music-list/albums"}>
        <div className={classes.buttonBack} onClick={() => {
          props.toggleSwitcher(1)
        }}>
          <i className="fas fa-chevron-left"></i>
          <h3>{ props.switcher === 1 ? props.nameArtist : "Albums"}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderMusicPlayer;
