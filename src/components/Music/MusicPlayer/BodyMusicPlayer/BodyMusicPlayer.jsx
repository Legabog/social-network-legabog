import React from "react";
import classes from "./BodyMusicPlayer.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg";
import TracksItem from "./TrackItem/TrackItem";

const BodyMusicPlayer = (props) => {
  return (
    <div className={classes.bodyMusicPlayer}>
      <div className={classes.trackImage}>
        <img src={props.img || DefaultMusic} alt="description" />
      </div>
      <div className={classes.trackArtist}>
        <h1>{props.albumTitle}</h1>
        <h4>{props.nameArtist}</h4>

        {props.musicAlbums.map((e) => {
          if (e.title === props.albumTitle && e.author === props.nameArtist) {
            return <TracksItem key={Math.random()} tracks={e.tracks} />;
          }
        })}
      </div>
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyMusicPlayer;
