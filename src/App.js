import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import MusicList from "./components/Music/MusicList/MusicList";
import ArtistsList from "./components/Music/MusicList/Artists/Artists";
import AlbumsList from "./components/Music/MusicList/Albums/Albums";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.initialized) {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" component={() => <NewsContainer />} />
            <Route path="/music" component={Music} />
            <Route exact path="/music-list" component={MusicList} />
            <Route exact path="/music-list/artists" component={ArtistsList} />
            <Route exact path="/music-list/albums" component={AlbumsList} />
            <Route path="/login" component={Login} />
            <Route path="/settings" component={() => <SettingsContainer />} />
          </div>
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
