import axios from "axios";

export const getTracks = (value, category) => {
  const search = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/search/${category}?q=${value}`,
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  };
  switch (category) {
    case "track":
      return async (dispatch) => {
        const data = await axios(search);
        if ((data.status = 200 && data.data.data.length > 0))
          dispatch({ type: "GET_TRACKS", payload: data.data.data });
        else dispatch({ type: "GET_TRACKS_FAILED", payload: data.data });
      };
      break;
    case "album":
      return async (dispatch) => {
        const data = await axios(search);
        console.log(data.data);
        if ((data.status = 200))
          dispatch({ type: "GET_ALBUMS", payload: data.data.data });
        else dispatch({ type: "GET_ALBUMS_FAILED", payload: data.data });
      };
      break;
    case "artist":
      return async (dispatch) => {
        const data = await axios(search);
        if ((data.status = 200 && data.data.data.length > 0))
          dispatch({ type: "GET_ARTISTS", payload: data.data.data });
        else dispatch({ type: "GET_ARTISTS_FAILED", payload: data.data });
      };
      break;

    default:
      return { type: "FAILED" };
      break;
  }
};
export const getSingleAlbum = (id) => {
  const singleAlbum = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/album/` + id,
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  };
  return async (dispatch) => {
    const data = await axios(singleAlbum);
    if ((data.status = 200))
      dispatch({ type: "GET_SINGLE_ALBUM", payload: data.data });
    else dispatch({ type: "GET_SINGLE_ALBUM_FAILED", payload: data.data });
  };
};

export const getSingleArtist = (id) => {
  const singleArtist = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/artist/" + id,
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  };
  return async (dispatch) => {
    const data = await axios(singleArtist);
    if ((data.status = 200))
      dispatch({ type: "GET_SINGLE_ARTIST", payload: data.data });
    else dispatch({ type: "GET_SINGLE_ARTIST_FAILED", payload: data.data });
  };
};

export const setUsername = (username) => {
  return { type: "SET_USERNAME", payload: username };
};

export const createPlaylist = (playlistName) => {
  return { type: "CREATE_PLAYLIST", payload: playlistName };
};
export const addSongs = (song) => {
  return { type: "ADD_SONG", payload: song };
};
export const DeleteSongs = (song) => {
  return { type: "DELETE_SONG", payload: song };
};
export const deletePlaylist = (playlistName) => {
  return { type: "DELETE_SONG", payload: playlistName };
};
export const homeContent = () => {
  const search = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=hits`,
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  };
  return async (dispatch) => {
    const data = await axios(search);
    if ((data.status = 200)) {
      console.log(data);
      dispatch({ type: "GET_HOME_CONTENT", payload: data.data.data });
    } else dispatch({ type: "GET_HOME_CONTENT_FAILED", payload: data.data });
  };
};
