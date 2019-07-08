import {connect} from "react-redux";
import {fetchSongs,playSong} from "./songs.action";
import SongsComponent from "./Songs.component";

const mapStateToProps = state => ({
    songs: state.songsReducer.songs,
    currentSong: state.songsReducer.currentSong,
});


const mapDispatchToProps = dispatch => ({
    getAllSongs: ()=> dispatch(fetchSongs()),
    playSong:()=> dispatch(playSong()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongsComponent);