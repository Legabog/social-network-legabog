import React from "react";
import classes from "./BodyArtistItemRouter.module.css";
import { NavLink } from "react-router-dom";
import MusicDefault from "../../../../assets/apple theme/music.jpg"

class BodyArtistItemRouter extends React.Component {
  render() {
    return (
      <div className={classes.bodyArtistItemRouter}>
        <NavLink to={"/music-player/" + this.props.nameArtist + "/nameoftrack"}>
          <div className={classes.item}>
            <img
              src={MusicDefault}
              alt="description"
            />
            <div className={classes.discription}>
              <h5 className={classes.album}>
                <strong>Name of 1st Track</strong>
              </h5>
              <p className={classes.artist}>
                <strong>{this.props.nameArtist}</strong>
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink  to={"/music-player/" + this.props.nameArtist + "/nameOftrack"}>
          <div className={classes.item}>
            <img
              src={MusicDefault}
              alt="description"
            />
            <div className={classes.discription}>
              <h5 className={classes.album}>
                <strong>Name of 2nd Track</strong>
              </h5>
              <p className={classes.artist}>
                <strong>{this.props.nameArtist}</strong>
              </p>
            </div>
          </div>
        </NavLink>

        <div className={classes.lastBlock}></div>
      </div>
    );
  }
}

export default BodyArtistItemRouter;
