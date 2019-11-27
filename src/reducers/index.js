import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Kiss The Girl",
      duration: "4.05",
      like: 47,
      artist: "Samuel E. Wright",
      cover:
        "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/4c/88/6e/4c886e1f-7583-de7b-a642-baeb331edf2a/source/1200x1200bb.jpg"
    },
    {
      title: "Beauty and The Beast",
      duration: "3.15",
      like: 129,
      artist: "Ariana Grande & John Legend",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/29/86/15/29861599-bc5e-6590-b287-04afaf01d027/source/1200x1200bb.jpg"
    },
    {
      title: "A Whole New World",
      duration: "4.13",
      like: 78,
      artist: " Mena Massoud & Naomi Scott",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/d9/2f/49/d92f49d0-1733-29e5-f186-7e08add94c80/source/1200x1200bb.jpg"
    },
    {
      title: "So This Is Love",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "Part Of The World",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "I See The World",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "Once Upon a Dream",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "Reflection",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "How Far I'll Go",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    },
    {
      title: "When I See An Elephant Fly",
      duration: "3.72",
      like: 182,
      artist: "Mice Chorus",
      cover:
        "https://c.saavncdn.com/856/Cinderella-English-2006-20180305093157-500x500.jpg"
    }
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
