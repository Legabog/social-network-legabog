import React from "react";
import { connect } from "react-redux";
import classes from "./BodyMusicList.module.css";
import { NavLink } from "react-router-dom";

class BodyMusicList extends React.Component {
  render() {
    return (
      <div className={classes.bodyMusicList}>
        <NavLink to="/music-list/artists">
          <div className={classes.item1}>
            <h3 >Artists</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/music-list/albums">
          <div className={classes.item2}>
            <h3 >Albums</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
        <hr />
        <NavLink to="/music-list/playlists">
          <div className={classes.item3}>
            <h3 >Playlists</h3>
            <i className="fas fa-chevron-right"></i>
          </div>
        </NavLink>
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
