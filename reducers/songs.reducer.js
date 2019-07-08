import {Audio} from "expo-av";
import {
    PLAY_SONG_ACTION,
    SET_ALL_SONGS_ACTION, SET_FILTERED_SONGS, SET_POSITION_ACTION,
    SET_SONG_LOADING_ACTION,
    SET_SONG_PLAYING_ACTION
} from "../action-types";

const INITIAL_STATE = {
    sound: new Audio.Sound(),
    isPaused: false,
    filteredSongs:[],
    songs: [],
    duration: 0,
    position: 0,
    currentSong: {},
    isSongLoading: false
};

const songsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_SONG_ACTION :
            console.log("Play Song Called");
            return state;
        case SET_SONG_LOADING_ACTION:
            return {...state,isSongLoading: action.data};

        case SET_SONG_PLAYING_ACTION:
            return {...state,...action.data};
        case SET_ALL_SONGS_ACTION:
            let songs =action.data;
            console.log("Received Songs are : "+JSON.stringify(songs));
            return {...state,songs:songs};
        case SET_FILTERED_SONGS:
            return {...state,filteredSongs:action.data};
        case SET_POSITION_ACTION:
            return {...state,position:action.data};

        default:
            return state;
    }
};

export default songsReducer;