import {connect} from "react-redux";
import SearchComponent from "./Search.component";
import {searchSong} from "./search.action";

const mapStateToProps = state => ({
    currentSong: state.songsReducer.currentSong,
    filteredSongs: state.songsReducer.filteredSongs,
});

const mapDispatchToProps = dispatch => ({
    searchSong:(text)=> dispatch(searchSong(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);