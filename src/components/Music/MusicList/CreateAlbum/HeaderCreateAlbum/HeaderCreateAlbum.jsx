import React from "react";
import classes from "./HeaderCreateAlbum.module.css";
import { NavLink } from "react-router-dom";
import AddPhoto from "../../../../../assets/apple theme/photo_add.png";

class HeaderCreateAlbum extends React.Component {
  state = {
    createPlayListPhoto: AddPhoto,
    input1: "",
    input2: "",
    newPlayLists: {},
  };

  onChangeHandlerInput1 = (e) => {
    this.setState({ input1: e.target.value });
  };

  onChangeHandlerInput2 = (e) => {
    this.setState({ input2: e.target.value });
  };

  render() {
    return (
      <div className={classes.headerCreateAlbum}>
        <NavLink to="/music-list/playlists/">
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>Cancel</h3>
          </div>
        </NavLink>

        <div className={classes.buttonDone}>
          <h3>Done</h3>
        </div>
        <h1>Create new playlist</h1>
        <div className={classes.inputs}>
          <div className={classes.addPhoto} onClick={() => {}}>
            <img src={this.state.createPlayListPhoto} alt="description"></img>

            <input
              type="file"
              onChange={(e) =>
                this.setState({ createPlayListPhoto: e.target.value })
              }
            ></input>
          </div>
          <div className={classes.inputs2}>
            <div>
              <input
                className={classes.input1}
                onChange={this.onChangeHandlerInput1}
                inputvalue={this.state.input1}
                placeholder="New playlist name"
              ></input>
            </div>
            <div>
              <input
                className={classes.input2}
                onChange={this.onChangeHandlerInput2}
                inputvalue={this.state.input2}
                placeholder="Description"
              ></input>
            </div>
          </div>
        </div>
        <div className={classes.lastBlock}></div>
      </div>
    );
  }
}

export default HeaderCreateAlbum;
