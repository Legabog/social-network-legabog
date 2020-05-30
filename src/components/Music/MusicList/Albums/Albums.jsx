import React from "react";
import classes from "./Albums.module.css";
import HeaderAlbums from "./HeaderAlbums/HeaderAlbums";
import BodyAlbums from "./BodyAlbums/BodyAlbums";


class AlbumsList extends React.Component {
  render() {
    return (
      <div className={classes.albums}>
          <HeaderAlbums/>
          <BodyAlbums/>
      </div>
    );
  }
}

export default AlbumsList;
