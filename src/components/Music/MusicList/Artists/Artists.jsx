import React from "react";
import classes from "./Artists.module.css";
import HeaderArtists from "./HeaderArtists/HeaderArtists copy";
import BodyArtists from "./BodyArtists/BodyArtists";

class ArtistsList extends React.Component {
  render() {
    return (
      <div className={classes.artists}>
        <HeaderArtists />

        <BodyArtists />
      </div>
    );
  }
}

export default ArtistsList;
