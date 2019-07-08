import {SET_SONG_LOADING_ACTION, SET_SONG_PLAYING_ACTION} from "../action-types";

export const playSong = (song)=>{
    return async (dispatch,getState) =>{
        let state = getState();
        let songLoaded = Object.keys(state.songsReducer.currentSong).length !== 0
        if(!state.songsReducer.isSongLoading &&
            (!songLoaded || state.songsReducer.currentSong.id !== song.id )){
            dispatch(setSongLoading(true));
            if(songLoaded){
                await state.songsReducer.sound.unloadAsync();
            }
            console.log("Loading Song");
            await state.songsReducer.sound.loadAsync({uri: song.location},{}, false);
            console.log("Playing Song");
            await state.songsReducer.sound.playAsync();
            dispatch(setSongPlaying(false,song,false));
        }
    }
};

export  const togglePause = () =>{
    return async (dispatch,getState) =>{
        let state = getState();
        console.log("Toggle Pause Called");
        if(state.songsReducer.currentSong){
            console.log("Going to pause current song: "+state.songsReducer.currentSong);
            let isPaused = !state.songsReducer.isPaused;
            if(isPaused){
                console.log("Pausing song");
                await state.songsReducer.sound.pauseAsync();
                console.log("Paused");
            }else{
                console.log("Playing SOng");
                await state.songsReducer.sound.playAsync();
                console.log("Played");
            }

            dispatch(setSongPlaying(state.songsReducer.isSongLoading,state.songsReducer.currentSong,isPaused));
        }
    }
};

export const setSongLoading=(status)=>({
    type: SET_SONG_LOADING_ACTION,
    data: status,
});

export const setSongPlaying = (isSongLoading,song,isPaused) => ({
    type: SET_SONG_PLAYING_ACTION,
    data:{
        isSongLoading:isSongLoading,
        currentSong:song,
        isPaused:isPaused,
    }
});