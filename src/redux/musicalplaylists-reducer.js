const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";

let initialState = {
  ownPlayLists: [],
};

const musicPlayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        ownPlayLists: [...state.ownPlayLists, action.playlistData],
      };
    default:
      return state;
  }
};

export const addToPlayList = (img, name, description) => {
  return {
    type: ADD_TO_PLAYLIST,
    playlistData: { img, name, description },
  };
};

export default musicPlayListReducer;
