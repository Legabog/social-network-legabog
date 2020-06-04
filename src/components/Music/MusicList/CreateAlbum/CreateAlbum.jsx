import React from "react";
import classes from "./CreateAlbum.module.css";
import HeaderCreateAlbum from "./HeaderCreateAlbum/HeaderCreateAlbum";
import { connect } from "react-redux";
import { addPlaylist } from "../../../../redux/music-reducer";

const CreateAlbum = (props) => {
  return (
    <div className={classes.createAlbum}>
      <HeaderCreateAlbum createPlaylist={props.addPlaylist} createdAlbums={props.createAlbums}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    createdAlbums: state.musicReducer.createdAlbums
  }
}

export default connect(mapStateToProps, {
  addPlaylist,
})(CreateAlbum);
