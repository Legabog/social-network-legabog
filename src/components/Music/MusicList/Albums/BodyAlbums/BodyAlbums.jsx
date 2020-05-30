import React from "react";
import { connect } from "react-redux";
import classes from "./BodyAlbums.module.css";

class BodyAlbumsist extends React.Component {
  render() {
    return (
      <div className={classes.bodyAlbumsList}>
        <div className={classes.item}>
          <img
            src="https://avatars.yandex.net/get-music-content/192707/ac341ef2.a.5732720-1/m1000x1000?webp=false"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>FEVER</strong>
            </h5>
            <p className={classes.artist}>
              <strong>CAKEBOY</strong>
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="https://lastfm.freetls.fastly.net/i/u/ar0/550430bf13fa663371467c1ce1eb2bf3.jpg"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>Круг ветров</strong>
            </h5>
            <p className={classes.artist}>
              <strong>Mnogoznaal</strong>
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="https://memepedia.ru/wp-content/uploads/2018/08/4-10.jpg"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>Astroworld</strong>
            </h5>
            <p className={classes.artist}>
              <strong>Travis Scott</strong>
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <img
         src="https://images.genius.com/fa7dc6b5d55a435940664985dc9df37d.1000x1000x1.jpg"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>LUVANDA</strong>
            </h5>
            <p className={classes.artist}>
              <strong>CAKEBOY</strong>
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="https://lastfm.freetls.fastly.net/i/u/ar0/d042302dfcfdedb7f697e9d42c30c9a6.jpg"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>CITY MORGUE VOL 2</strong>
            </h5>
            <p className={classes.artist}>
              <strong>City Morgue, ZillaKami, SosMula</strong>
            </p>
          </div>
        </div>
        <div className={classes.item}>
          <img
            src="https://avatars.yandex.net/get-music-content/2390047/ee964ffc.a.8264775-3/m1000x1000?webp=false"
            alt="description"
          />
          <div className={classes.discription}>
            <h5 className={classes.album}>
              <strong>Голову на плаху</strong>
            </h5>
            <p className={classes.artist}>
              <strong>VELIAL SQUAD</strong>
            </p>
          </div>
        </div>
        <div className={classes.lastBlock}>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewState: state.musicReducer,
  };
};

export default connect(mapStateToProps, {})(BodyAlbumsist);
