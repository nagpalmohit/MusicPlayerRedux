import {connect} from "react-redux";
import NowPlayingComponent from "./NowPlaying.component";
import {togglePause} from "../../actions/song-control.action";
import {Actions} from "react-native-router-flux";

const mapStateToProps = state =>({
   song: state.songsReducer.currentSong,
   currentPosition:state.songsReducer.position,
   isPaused: state.songsReducer.isPaused,
});

const mapDispatchToProps = dispatch =>({
   nowPlayingClicked: () => Actions.nowPlaying(),
   onToggle: () => dispatch(togglePause()),
});

export default connect(mapStateToProps,mapDispatchToProps)(NowPlayingComponent)