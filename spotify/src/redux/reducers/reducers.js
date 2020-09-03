const Initialstate = { fetched: false, tracks: [] };

export const getTracks = (state = Initialstate, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return { ...state, fetched: true, tracks: action.payload };
    case "GET_TRACKS_FAILED":
      return { ...state, tracks: action.payload };
    default:
      return state;
  }
};

const AlbumsState = { fetched: false, albums: [] };

export const getAlbums = (state = AlbumsState, action) => {
  switch (action.type) {
    case "GET_ALBUMS":
      return { ...state, fetched: true, albums: action.payload };
    case "GET_ALBUMS_FAILED":
      return { ...state, albums: action.payload };
    default:
      return state;
  }
};

const ArtistsState = { fetched: false, artists: [] };

export const getArtists = (state = ArtistsState, action) => {
  switch (action.type) {
    case "GET_ARTISTS":
      return { ...state, fetched: true, artists: action.payload };
    case "GET_ARTISTS_FAILED":
      return { ...state, artists: action.payload };
    default:
      return state;
  }
};

const singleAlbumState = { fetched: false, singleAlbum: [] };

export const getSingleAlbum = (state = singleAlbumState, action) => {
  switch (action.type) {
    case "GET_SINGLE_ALBUM":
      return { ...state, fetched: true, singleAlbum: action.payload };
    case "GET_SINGLE_ALBUM_FAILED":
      return { ...state, singleAlbum: action.payload };
    default:
      return state;
  }
};

const singleArtistState = { fetched: false, singleArtist: [] };

export const getSingleArtist = (state = singleArtistState, action) => {
  switch (action.type) {
    case "GET_SINGLE_ARTIST":
      return { ...state, fetched: true, singleArtist: action.payload };
    case "GET_SINGLE_ARTIST_FAILED":
      return { ...state, singleArtist: action.payload };
    default:
      return state;
  }
};

export const Username = (state = { login: false, user: "" }, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, login: true, user: action.payload };
    case "SET_USERNAME_FAILED":
      return state;
    default:
      return state;
  }
};

const PLAYLISTSTATE = {
  isEmpty: true,
  playlists: [],
  songs: [],
};
export const Playlists = (state=PLAYLISTSTATE, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      const newState = {
        ...state,
        isEmpty: false,
        playlists: [...state.playlists,action.payload],
      };

      return newState;
    case "ADD_SONG":
      const newState1 = {
        ...state,
        songs: state.songs.push(action.payload),
      };

      return newState1;
    case "DELETE_PLAYLIST":
      const newState2 = {
        ...state,
        isEmpty: false,
        playlists: state.playlists.filter((e) => e !== action.payload),
        songs: state.songs.filter((e) => e.playlist !== action.payload),
      };
      return newState2
    case "DELETE_SONG":
      const newState3 = {
        ...state,
        isEmpty: false,
        songs: state.filter((e) => e !== action.payload),
      };
      return newState3

    default:
      return state
      break;
  }
};

export const homeContent = (state=[],action)=>{
  switch (action.type) {
    case 'GET_HOME_CONTENT':
      return action.payload
    case 'GET_HOME_CONTENT_FAILED' :
    return state;
    default:
      return state;
  }
}