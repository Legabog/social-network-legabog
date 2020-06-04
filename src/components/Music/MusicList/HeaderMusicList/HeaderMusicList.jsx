import React from "react";
import classes from "./HeaderMusicList.module.css";

class HeaderMusicList extends React.Component {
  render() {
    return (
      <div className={classes.headerMusicList}>
        <div className={classes.headerTitle}>
        <h1>Library</h1>
        </div>
        <hr />
      </div>
    );
  }
}

export default HeaderMusicList;
