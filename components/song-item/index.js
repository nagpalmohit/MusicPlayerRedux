import {connect} from "react-redux";
import SongItemComponent from "./SongItem.component";
import {playSong} from "../../actions/song-control.action";


const mapStateToProps = (state,props) =>({
   song: props.song,
   isActive: ((Object.keys(state.songsReducer.currentSong).length !== 0) && state.songsReducer.currentSong.id === props.song.id)
});

const mapDispatchToProps = dispatch =>({
   songClicked: (song)=>dispatch(playSong(song))
});

export default connect(mapStateToProps,mapDispatchToProps)(SongItemComponent)