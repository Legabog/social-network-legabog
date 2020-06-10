import React from "react";
import classes from "./Albums.module.css";
import HeaderAlbums from "./HeaderAlbums/HeaderAlbums";
import BodyAlbums from "./BodyAlbums/BodyAlbums";
import { connect } from "react-redux";
import { getMusicAlbumsData } from "../../../../redux/musicalbums-reducer";
import Preloader from "../../../common/Preloader/Preloader";
import {toggleSwitcher} from "../../../../redux/musicalbums-reducer"

class AlbumsList extends React.Component {
  componentDidMount() {
    this.props.getMusicAlbumsData();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <div className={classes.albums}>
          <HeaderAlbums />
          <BodyAlbums
            musicAlbums={this.props.musicAlbums}
            isFetching={this.props.isFetching}
            toggleSwitcher={this.props.toggleSwitcher}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    isFetching: state.musicAlbumsReducer.isFetching,
    toggleSwitcher: state.musicAlbumsReducer.toggleSwitcher
  };
};

export default connect(mapStateToProps, {
  getMusicAlbumsData,
  toggleSwitcher
})(AlbumsList);
