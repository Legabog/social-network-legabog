import React from "react";
import classes from "./MusicPlayer.module.css";
import HeaderMusicPlayer from "./HeaderMusicPlayer/HeaderMusicPlayer";
import BodyMusicPlayer from "./BodyMusicPlayer/BodyMusicPlayer";
import { connect } from "react-redux";
import { toggleSwitcher } from "../../../redux/musicalbums-reducer"

const MusicPlayer = (props) => {
  return (
    <div className={classes.musicPlayer}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        switcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        nameArtist={props.nameArtist}
        albumTitle={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
  };
};

export default connect(mapStateToProps, {toggleSwitcher})(MusicPlayer);
