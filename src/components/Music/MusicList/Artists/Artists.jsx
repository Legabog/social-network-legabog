import React from "react";
import classes from "./Artists.module.css";
import HeaderArtists from "./HeaderArtists/HeaderArtists copy";
import BodyArtists from "./BodyArtists/BodyArtists";
import { connect } from "react-redux";

class ArtistsList extends React.Component {
  render() {
    return (
      <div className={classes.artists}>
        <HeaderArtists />

        <BodyArtists musicAlbums={this.props.musicAlbums}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums
  }
}

export default connect(mapStateToProps, {})(ArtistsList);
