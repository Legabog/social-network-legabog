import React from "react";
import classes from "./FooterMusicList.module.css";
import AlbumItem from "../Albums/AlbumItem/AlbumItem";

const FooterMusicList = (props) => {
  return (
    <div className={classes.footerMusicList}>
      <h1>Recently played: </h1>
      {props.recentlyPlayed.map((e) => (
        <AlbumItem
          key={Math.random()}
          img={e.img}
          title={e.title}
          author={e.author}
        />
      ))}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default FooterMusicList;
