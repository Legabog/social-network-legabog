const ADD_PLAYLIST = "ADD_PLAYLIST";

let initialState = {
  createdPlaylists: [],
  isFetching: true,
};

const musicRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLIST: {
      let newPlaylist = {
        name: action.name,
        description: action.description
      } 
      return {
        ...state,
        createdPlaylists: [...state.createdPlaylists, newPlaylist],
      };
    }
    default:
      return state;
  }
};


export const addPlaylist = (name, description) => {
  return {
    type: ADD_PLAYLIST,
    name, description
  };
};

export default musicRedcuer;
