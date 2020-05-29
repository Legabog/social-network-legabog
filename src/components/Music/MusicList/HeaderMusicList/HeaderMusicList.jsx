import React from "react";
import { connect } from "react-redux";
import classes from "./HeaderMusicList.module.css";

class HeaderMusicList extends React.Component {
  render() {
    return (
      <div className={classes.headerMusicList}>
        <h1>{this.props.viewState.stack[0].name}</h1>
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

export default connect(mapStateToProps, {})(HeaderMusicList);
