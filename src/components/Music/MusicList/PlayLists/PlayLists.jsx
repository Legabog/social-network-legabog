import React from "react";
import classes from "./PlayLists.module.css";
import HeaderPlayLists from "./HeaderPlayLists/HeaderPlayLists";
import BodyPlayLists from "./BodyPlayLists/BodyPlayLists";

class PlayLists extends React.Component {
  render() {
    return (
      <div className={classes.playLists}>
        <HeaderPlayLists />
        <BodyPlayLists />
      </div>
    );
  }
}

export default PlayLists;
