import { userAPI } from "../api/api";

const SET_MUSIC_ALBUMS_DATA = "ADD_PLAYLIST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SWITCHER = "SWITCHER";
const PUSH_ALBUM_TO_RECENTLY_PLAYED = "PUSH_ALBUM_TO_RECENTLY_PLAYED"

let initialState = {
  musicAlbums: [],
  isFetching: true,
  musicAlbumsSwitcher: 1,
  recentlyPlayed: []
};

const musicAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_ALBUMS_DATA:
      return {
        ...state,
        musicAlbums: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SWITCHER:
      return {
        ...state,
        musicAlbumsSwitcher: action.switcher,
      };

    default:
      return state;
  }
};

export const setMusicAlbumsData = (payload) => {
  return {
    type: SET_MUSIC_ALBUMS_DATA,
    payload,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const toggleSwitcher = (switcher) => {
  return {
    type: SWITCHER,
    switcher,
  };
};

export const getMusicAlbumsData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getMusicAlbums().then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setMusicAlbumsData(response));
    });
  };
};

export default musicAlbumsReducer;
