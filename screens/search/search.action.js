import {SET_FILTERED_SONGS} from "../../action-types";
import {filterSong} from "../../services/SongService";

export const searchSong = (text)=>{
    return(dispatch,getState)=>{
        filterSong(text)
            .then((songs)=>{
                console.log("Songs: " +JSON.stringify(songs));
                dispatch(setFilteredSongs(songs))
            })
    }
};
export const setFilteredSongs=(songs)=>({
    type: SET_FILTERED_SONGS,
    data: songs
});