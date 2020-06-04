import React from "react";
import classes from "./BodyPlayLists.module.css";
import PhotoAdd from "../../../../../assets/apple theme/playlist_add.jpg";
import { NavLink } from "react-router-dom";
import PlayList from "../PlayList/PlayList";

const BodyPlayLists = (props) => {
  //  componentDidMount() {
  //   localStorage.playlists = JSON.stringify(this.props.createdAlbums)
  //   console.log(localStorage.playlists)
  // console.log(JSON.parse(localStorage.playlists))
  //  }

  return (
    <div className={classes.bodyPlayLists}>
      <NavLink to="/music-list/playlists/create">
        <div className={classes.createPlayList}>
          <img src={PhotoAdd} alt="descripion" />
          <h3>Create new playlist</h3>
        </div>
        <hr />
      </NavLink>

      {!props.createdAlbums === false
        ? null
        : props.createdAlbums.map((e) => (
            <PlayList
              name={e.name}
              img={e.img}
              description={e.description}
              key={Math.random()}
            />
          ))}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyPlayLists;
