import {playSong} from "../../actions/song-control.action";
import {SET_POSITION_ACTION} from "../../action-types";
export const seek = (positionInPercentage)=>{
    return async (dispatch,getState)=> {
        let state = getState();
        let positionInMillis = (positionInPercentage * state.songsReducer.state.duration) / 100;
        await state.songsReducer.sound.setPositionAsync(positionInMillis);
        dispatch(setPosition(positionInPercentage));
    };
};
export const setPosition=(position)=>({
    type: SET_POSITION_ACTION,
    data: position,
});
export const nextSong = ()=>{

    return(dispatch,getState)=>{
        let state=getState();
        if(Object.keys(state.songsReducer.currentSong).length !== 0){
            let currentIndex = indexOfSong(state.songsReducer.songs,state.songsReducer.currentSong);
            let nextSong = state.songsReducer.songs[(currentIndex + 1) % state.songsReducer.songs.length];
            dispatch(playSong(nextSong));
        }
    }
};

export const previousSong = ()=>{
    return(dispatch,getState)=>{
        let state=getState();
        if(Object.keys(state.songsReducer.currentSong).length !== 0){
            let currentIndex = indexOfSong(state.songsReducer.songs,state.songsReducer.currentSong);
            let previousSong =  state.songsReducer.songs[(currentIndex - 1) % state.songsReducer.songs.length];
            dispatch(playSong(previousSong));
        }
    }
};

export const indexOfSong= (songs,song)=>{
    for(let i=0;i<songs.length;i++){
        if(song.id=== songs[i].id)
            return i;
    }
};