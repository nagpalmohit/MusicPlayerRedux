import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from "expo-font";
import {applyMiddleware, createStore} from "redux";
import {connect, Provider} from "react-redux";

import rootReducer from "./reducers/root.reducer";
import thunk from "redux-thunk";
import SongsComponent from "./screens/songs";
import SearchComponent from "./screens/search";
import NowPlayingComponent from "./screens/now-playing";
import {Router, Scene} from "react-native-router-flux";
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "./constants/Colors";
import {MaterialIcons} from "@expo/vector-icons";

// Configuring the store
const store = createStore(rootReducer, applyMiddleware(thunk));
const RouterWithRedux = connect()(Router);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }


    async componentWillMount() {
        await Font.loadAsync({
            'fira-regular': require("./assets/fonts/FiraSans-Regular.ttf"),
            'fira-semibold': require("./assets/fonts/FiraSans-SemiBold.ttf")
        });
        // let songs = await getAllSongs();
        this.setState({
            fontLoaded: true,
        });
    }

    async componentDidMount() {
        // await Audio.setAudioModeAsync({
        //     allowsRecordingIOS: false,
        //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        //     playsInSilentModeIOS: true,
        //     shouldDuckAndroid: true,
        //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        //     playThroughEarpieceAndroid: false,
        //     staysActiveInBackground: true
        // });
        // this.state.sound.setOnPlaybackStatusUpdate(this.updatePosition.bind(this));
    }

    render() {
        return (
            <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.container}>
                {(this.state.fontLoaded) ?
                    <Provider store={store}>
                        <View style={styles.container}>
                            <RouterWithRedux>
                                <Scene key="root"
                                       tabBarStyle={{
                                           backgroundColor: Colors.primaryColor,
                                           height: responsiveHeight(7)
                                       }}
                                       showLabel={false}
                                       tabs={true} >
                                    <Scene key="songStack"
                                           icon={() => <MaterialIcons name={'music-note'} size={responsiveFontSize(5)}
                                                                      color={Colors.accentColor}/>}>
                                        <Scene key="songScreen" hideNavBar={true} component={SongsComponent}/>
                                        <Scene key="nowPlaying" hideNavBar={true} component={NowPlayingComponent}/>
                                    </Scene>

                                    <Scene key="searchStack" icon={() => <MaterialIcons name={'search'} size={responsiveFontSize(5)}
                                                                                        color={Colors.accentColor}/>}>
                                        <Scene key="searchScreen" hideNavBar={true} component={SearchComponent}
                                               tabIcon={(<Text>Song Screen</Text>)}/>
                                        <Scene key="nowPlaying" hideNavBar={true} component={NowPlayingComponent}/>
                                    </Scene>
                                </Scene>
                            </RouterWithRedux>
                        </View>
                    </Provider>
                    : null
                }
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: responsiveHeight(4),
    },
});

/**
 * let response = await fetch("RESTAURANT_ENDPOINT");
 * let responseJson = await response.json();
 *
 * let updatedStructure = responseJson.map((item) => ({
 *     name: item.restaurants.name,
 *     id: item.restaurants.id
 * }))
 */