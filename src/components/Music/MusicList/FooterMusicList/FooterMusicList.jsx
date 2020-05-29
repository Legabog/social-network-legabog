import React from "react";
import { connect } from "react-redux";
import classes from "./FooterMusicList.module.css";

class FooterMusicList extends React.Component {
  render() {
    return (
      <div className={classes.footerMusicList}>
        <h1>Recently played: </h1>
        <div className={classes.arrayOfAvatars}>
          <img src="https://avatars.yandex.net/get-music-content/192707/ac341ef2.a.5732720-1/m1000x1000?webp=false" alt="description"/>
          <img src="https://lastfm.freetls.fastly.net/i/u/ar0/550430bf13fa663371467c1ce1eb2bf3.jpg" alt="description"/>
          <img src="https://memepedia.ru/wp-content/uploads/2018/08/4-10.jpg" alt="description"/>
          <img src="https://images.genius.com/fa7dc6b5d55a435940664985dc9df37d.1000x1000x1.jpg" alt="description"/>
          <img src="https://lastfm.freetls.fastly.net/i/u/ar0/d042302dfcfdedb7f697e9d42c30c9a6.jpg" alt="description"/>
          <img src="https://images.genius.com/8aafae47dcb3f1c40d26ba6fc3c9d033.1000x1000x1.jpg" alt="description"/>
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

export default connect(mapStateToProps, {})(FooterMusicList);
