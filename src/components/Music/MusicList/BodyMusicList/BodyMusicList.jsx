import React from "react";
import { connect } from "react-redux";
import classes from "./BodyMusicList.module.css";

class BodyMusicList extends React.Component {
  render() {
    return (
      <div className={classes.bodyMusicList}>
        <div className={classes.item1}>
          <h3 id>Artists</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
        <hr />
        <div className={classes.item2}>
          <h3>Albums</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
        <hr />
        <div className={classes.item3}>
          <h3>Playlists</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewState: state.musicReducer,
  };
};

export default connect(mapStateToProps, {})(BodyMusicList);
