import React, {Component} from "react";
import {
    View,
    StyleSheet,
    FlatList
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import RoundedButton from "../../components/RoundedButton";
import SongItem from "../../components/song-item";
import NowPlaying from "../../components/now-playing";
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import Colors from "../../constants/Colors";
import {MaterialIcons} from "@expo/vector-icons";

export default class SongsComponent extends Component {
    componentWillMount() {
        this.props.playSong();
        this.props.getAllSongs();
    }

    render() {
        return (
            <View style={styles.container}>

                <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={{flex: 1}}>
                    <View style={styles.buttonGroup}>
                        <RoundedButton icon={<MaterialIcons name={'play-arrow'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                       onPress={() => console.log("Play Songs")}
                                       title={"Play All"}/>
                        <RoundedButton icon={<MaterialIcons name={'shuffle'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                       onPress={() => console.log("Play Songs")}
                                       title={"Shuffle"}/>
                    </View>
                    <FlatList data={this.props.songs}
                              style={{flex: 1}}
                              keyExtractor={(data) => data.id + ""}
                              renderItem={({item}) => <SongItem song={item}/>}/>

                    { Object.keys(this.props.currentSong).length !== 0 ? <NowPlaying />
                        : null}
                </LinearGradient>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: responsiveHeight(2)
    }
});