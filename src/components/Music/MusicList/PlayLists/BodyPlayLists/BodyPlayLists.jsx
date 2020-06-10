import React from "react";
import classes from "./BodyPlayLists.module.css";
import PhotoAdd from "../../../../../assets/apple theme/playlist_add.jpg";
import { NavLink } from "react-router-dom";
import PlayList from "../PlayList/PlayList";

const BodyPlayLists = (props) => {
  return (
    <div className={classes.bodyPlayLists}>
      <NavLink to="/music-list/playlists/create">
        <div className={classes.createPlayList}>
          <img src={PhotoAdd} alt="descripion" />
          <h3>Create new playlist</h3>
        </div>
        <hr />
      </NavLink>

      

      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyPlayLists;
