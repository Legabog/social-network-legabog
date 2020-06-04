import React from "react";
import classes from "./PlayLists.module.css";
import HeaderPlayLists from "./HeaderPlayLists/HeaderPlayLists";
import BodyPlayLists from "./BodyPlayLists/BodyPlayLists";
import { connect } from "react-redux";

class PlayLists extends React.Component {
  render() {
    return (
      <div className={classes.playLists}>
        <HeaderPlayLists />
        <BodyPlayLists createdAlbums={this.props.createdAlbums}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createdAlbums: state.musicReducer.createdAlbums
  }
}

export default connect(mapStateToProps, {
})(PlayLists);
