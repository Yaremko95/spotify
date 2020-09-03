import { combineReducers } from "redux";
import {
  getTracks,
  getAlbums,
  getArtists,
  getSingleAlbum,
  getSingleArtist,
  Username,
  Playlists,
  homeContent
} from "./reducers";

const reducers = combineReducers({
  tracks: getTracks,
  albums: getAlbums,
  artists: getArtists,
  singleAlbum: getSingleAlbum,
  singleArtist: getSingleArtist,
  username: Username,
  playlist:Playlists ,
  homeContent:homeContent,
});

export default reducers;
