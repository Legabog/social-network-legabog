import React from "react";
import classes from "./CreateAlbum.module.css";
import HeaderCreateAlbum from "./HeaderCreateAlbum/HeaderCreateAlbum";

class CreateAlbum extends React.Component {
  render() {
    return (
      <div className={classes.createAlbum}>
          <HeaderCreateAlbum/>
      </div>
    );
  }
}

export default CreateAlbum;
