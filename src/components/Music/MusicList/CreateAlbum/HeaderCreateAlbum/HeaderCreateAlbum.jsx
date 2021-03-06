import React from "react";
import classes from "./HeaderCreateAlbum.module.css";
import { NavLink } from "react-router-dom";
import AddPhoto from "../../../../../assets/apple theme/photo_add.png";

class HeaderCreateAlbum extends React.Component {
  state = {
    img: AddPhoto,
    name: "",
    description: "",
  };

  onChangeHandlerInput1 = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeHandlerInput2 = (e) => {
    this.setState({ description: e.target.value });
  };

  handleImageUpload = (img) => {
    this.setState({  img });
  };

  base64Encode = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => this.handleImageUpload(reader.result);
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };

  sendImage = (img) => {
    this.base64Encode(img);
    this.setState({ img: window.URL.createObjectURL(img) });
  };

  render() {
    return (
      <div className={classes.headerCreateAlbum}>
        <NavLink to="/music-list/playlists">
          <div className={classes.buttonBack}>
            <i className="fas fa-chevron-left"></i>
            <h3>Cancel</h3>
          </div>
        </NavLink>

        <NavLink to="/music-list/playlists">
          <div
            className={classes.buttonDone}
            onClick={() => {
            
              
            // localStorage.playLists = JSON.parse(localStorage.playLists)
              // ------------------------LocalStore
              // JSON.parse(localStorage.playLists) 
              //   ? localStorage.playLists.playLists.push({image: this.state.img, name: this.state.name, decription: this.state.description})
              //   : localStorage.playLists = JSON.stringify({image: this.state.img, name: this.state.name, decription: this.state.description})
            }}
          >
            <h3>Done</h3>
          </div>
        </NavLink>

        <h1>Create new playlist</h1>
        <div className={classes.inputs}>
          <div className={classes.addPhoto}>
            <label htmlFor="image-loader">
              <img src={this.state.img} alt="description" />
            </label>

            <input
              type="file"
              id="image-loader"
              accept="image/x-png, image/gif, image/jpeg, image/jpg"
              onChange={(e) => this.sendImage(e.target.files[0])}
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
