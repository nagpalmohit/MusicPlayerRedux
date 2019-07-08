import {connect} from "react-redux";
import NowPlayingComponent from "./NowPlaying.component";
import {nextSong, previousSong, seek} from "./now-playing.action";
import {togglePause} from "../../actions/song-control.action";

const mapStateToProps = state => ({
    currentSong: state.songsReducer.currentSong,
    isPaused: state.songsReducer.isPaused,
    position: state.songsReducer.position
});

const mapDispatchToProps = dispatch => ({
    seek: (position) => dispatch(seek(position)),
    nextSong: () => dispatch(nextSong()),
    previousSong: () => dispatch(previousSong()),
    togglePause: () => dispatch(togglePause())
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingComponent);