import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Love Song", duration: "4.05" },
    { title: "I'm yours", duration: "3.15" },
    { title: "Lucky", duration: "4.13" },
    { title: "When I see an elephant fly", duration: "3.72" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
