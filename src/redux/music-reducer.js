const ADD_PLAYLIST = "ADD_PLAYLIST";

let initialState = {
  createdAlbums: [],
  isFetching: true,
};

const musicRedcuer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLIST:
      return {
        ...state,
        createdAlbums: [...state.createdAlbums, action.playListData],
      };

    default:
      return state;
  }
};

// const createLocalStoragePlaylist = playlist => {
//   return (dispatch) => {
//     let playlists = localStorage.playlist
//       ? JSON.parse(localStorage.playlist)
//       : {}

//       playlists[playlist.name] = playlist
//       localStorage
//   }
// }



export const addPlaylist = (img, name, description) => {
    return {
        type: ADD_PLAYLIST,
        playListData: {img, name, description}
    }
}


export default musicRedcuer;
