import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    FlatList
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as GlobalStyles from "../../styles";
import Colors from "../../constants/Colors";
import NowPlaying from "../../components/now-playing";
import SongItem from "../../components/song-item";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

export default class SearchComponent extends Component {
    render() {
        return (
            <View style={GlobalStyles.styles.container}>
                <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={{flex: 1}}>
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchLabel}>Search : </Text>
                        <TextInput placeholderTextColor={Colors.placeholderColor}
                                   onChangeText={(text) =>this.props.searchSong(text)}
                                   placeholder={"Search any song : "}
                                   style={styles.searchInput}/>
                        <FlatList data={this.props.filteredSongs}
                                  style={{flex: 1}}
                                  keyExtractor={(data) => data.id + ""}
                                  renderItem={({item}) => <SongItem song={item}/>}/>
                    </View>
                    {Object.keys(this.props.currentSong).length !== 0 ?
                        <NowPlaying />
                        : null}
                </LinearGradient>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        alignItems: 'stretch',
        paddingHorizontal: responsiveWidth(6)
    },
    searchLabel: {
        paddingTop: responsiveHeight(2),
        color: Colors.headingColor,
        fontSize: responsiveFontSize(2),
        marginBottom: responsiveHeight(1),
        fontFamily: 'fira-regular'
    },
    searchInput: {
        backgroundColor: Colors.blueColor,
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(2.2),
        borderRadius: responsiveWidth(2),
        fontFamily: 'fira-semibold',
        color: Colors.headingColor
    }
});