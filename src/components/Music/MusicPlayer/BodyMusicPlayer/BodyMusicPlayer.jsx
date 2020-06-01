import React from "react";
import classes from "./BodyMusicPlayer.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg"

class BodyMusicPlayer extends React.Component {
  render() {
    return (
      <div className={classes.bodyMusicPlayer}>
        <div className={classes.trackImage}>
          <img
            src={DefaultMusic}
            alt="description"
          />
        </div>
        <div className={classes.trackArtist}>
          <h1>Name of track/Album</h1>
          <h4>{this.props.nameArtist}</h4>
          <div className={classes.tracks}>
            <div className={classes.item}>
              <h6>Track 1</h6>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <hr />
            <div className={classes.item}>
              <h6>Track 2</h6>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <hr />
            <div className={classes.item}>
              <h6>Track 3</h6>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyMusicPlayer;
