import React from "react";
import classes from "./App.module.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, Switch } from "react-router-dom";
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
import ArtistItemRouter from "./components/Music/ArtistItemRouter/ArtistItemRouter";
import MusicPlayer from "./components/Music/MusicPlayer/MusicPlayer";
import PlayLists from "./components/Music/MusicList/PlayLists/PlayLists";
import CreateAlbum from "./components/Music/MusicList/CreateAlbum/CreateAlbum";
import { getMusicAlbumsData } from "./redux/musicalbums-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    this.props.getMusicAlbumsData();
  }

  render() {
    if (this.props.initialized) {
      return (
        <div className={classes.appwrapper}>
          <HeaderContainer />
          <Navbar />
          <div className={classes.appwrappercontent}>
            <Switch>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" component={() => <NewsContainer />} />
              <Route path="/login" component={Login} />
              <Route path="/settings" component={() => <SettingsContainer />} />

              {/* -----------------------Player Routes----------------- */}
              <Route path="/music" component={Music} />
              <Route exact path="/music-list" component={MusicList} />
              <Route exact path="/music-list/artists" component={ArtistsList} />
              <Route exact path="/music-list/albums" component={AlbumsList} />
              <Route exact path="/music-list/playlists" component={PlayLists} />
              {this.props.musicAlbums.map((e) => (
                <Route
                  key={e._id}
                  exact
                  path={"/music-list/artists/" + e.author}
                  component={() => <ArtistItemRouter nameArtist={e.author} />}
                />
              ))}
              { this.props.isFetching ? <Preloader/>: null }
              { this.props.musicAlbums.map((e) => (
                <Route
                  key={Math.random()}
                  exact
                  path={"/music-player/" + e.author + "/" + e.title}
                  component={() => (
                    <MusicPlayer nameArtist={e.author} albumTitle={e.title} img={e.albumcoverUrl}/>
                  )}
                />
              ))}
              <Route
                exact
                path="/music-list/playlists/create/"
                component={CreateAlbum}
              />
              <Route exact path="/" />
              <Route
                render={() => {
                  return (
                    <div className={classes.error}>
                      <div className={classes.errorIcon}>
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <div className={classes.errorDescription}>
                        <h2>Oops, error</h2>
                        <div className={classes.errorNumber}>
                          <h1>404</h1>
                        </div>
                        <hr />
                        <h2>Page not found !!!</h2>
                        <div className={classes.lastBlock}></div>
                      </div>
                    </div>
                  );
                }}
              />
            </Switch>
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
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    isFetching: state.musicAlbumsReducer.isFetching,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
    getMusicAlbumsData,
  })
)(App);
