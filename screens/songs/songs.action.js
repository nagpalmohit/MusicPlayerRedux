import {getAllSongs} from "../../services/SongService";
import {PLAY_SONG_ACTION, SET_ALL_SONGS_ACTION} from "../../action-types";

export const fetchSongs = () =>{
    return async (dispatch,getState) =>{
        getAllSongs()
            .then((songs) => {
                console.log("Songs in action : "+JSON.stringify(songs));
                dispatch({
                    type: SET_ALL_SONGS_ACTION,
                    data: songs
                });
            });
    };
};
export const playSong = () =>({
    type: PLAY_SONG_ACTION,
});