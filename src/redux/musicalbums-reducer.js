import { userAPI } from "../api/api";

const SET_MUSIC_ALBUMS_DATA = "ADD_PLAYLIST";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SWITCHER = "SWITCHER";
const PUSH_ALBUM_TO_RECENTLY_PLAYED = "PUSH_ALBUM_TO_RECENTLY_PLAYED";
const SWITCH_DISABLER = "SWITCH_DISABLER";

let initialState = {
  musicAlbums: [],
  isFetching: true,
  musicAlbumsSwitcher: 1,
  recentlyPlayed: [],
  disabler: false,
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

    case SWITCH_DISABLER: {
      return {
        ...state,
        disabler: action.disable,
      };
    }
    case PUSH_ALBUM_TO_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: [...state.recentlyPlayed, action.data],
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

export const pushAlbumToRecentlyPlayed = (img, title, author) => {
  return {
    type: PUSH_ALBUM_TO_RECENTLY_PLAYED,
    data: { img, title, author },
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

export const switchDisabler = (disable) => {
  return {
    type: SWITCH_DISABLER,
    disable,
  };
};

export const toggleSwitcher = (switcher) => {
  return {
    type: SWITCHER,
    switcher,
  };
};

export const pushToRecentlyPlayed = (img, title, author) => {
  return async (dispatch) => {
    dispatch(pushAlbumToRecentlyPlayed(img, title, author));
  };
};

// export const getCaptchaUrl = () => async (dispatch) => {
//   const response = await userAPI.getCaptcha();
//   const captchaUrl = response.url;

//   dispatch(getCaptchaUrlSuccess(captchaUrl));
// };

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
