import React from "react";
import classes from "./MusicPlayer.module.css";
import HeaderMusicPlayer from "./HeaderMusicPlayer/HeaderMusicPlayer";
import BodyMusicPlayer from "./BodyMusicPlayer/BodyMusicPlayer";
import { connect } from "react-redux";
import { toggleSwitcher, pushAlbumToRecentlyPlayed, switchDisabler, pushToRecentlyPlayed} from "../../../redux/musicalbums-reducer"

const MusicPlayer = (props) => {
  return (
    <div className={classes.musicPlayer}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        switcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        author={props.nameArtist}
        title={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
        pushAlbumToRecentlyPlayed={props.pushAlbumToRecentlyPlayed}
        recentlyPlayed={props.recentlyPlayed}
        disabler={props.disabler}
        switchDisabler={props.switchDisabler}
        pushToRecentlyPlayed={props.pushToRecentlyPlayed}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    disabler: state.musicAlbumsReducer.disabler
  };
};

export default connect(mapStateToProps, {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  switchDisabler,
  pushToRecentlyPlayed
})(MusicPlayer);
