import { combineReducers} from "redux";

const songsReduces = ()=>{
  return [
    {title : "Tum Hi Ho" , duration : "5:20" },
    {title : "Abhi Na Jao Chhod kar" , duration : "4:05" },
    {title : "Tum hi aana" , duration : "3:45" },
    {title : "Lag jaa Gale" , duration : "2:56" },
    {title : "Dil Deewana" , duration : "8:16" },
  ]
}

const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === "SONG_SELECTED"){
      return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
  songs: songsReduces,
  selectedSong : selectedSongReducer

})

