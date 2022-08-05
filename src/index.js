import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Svg, { Path, } from 'react-native-svg';
import { lightColors, darkColors, h1, h2 } from './contants';
import { } from './network';

const IndexScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? lightColors.secondaryColor : lightColors.white,
        flex: 1
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar animated={true} backgroundColor="transparent" translucent={true} barStyle={'light-content'} />
            <ImageBackground
                source={require('../assets/cloth.jpg')}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(17, 45, 66, 0.68)'
                }}>
                    <View style={{
                        flex: 3,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: '30%'
                    }}>
                        <View style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150,
                            backgroundColor: lightColors.primaryColor,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Svg width="43" height="32" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M42.6111 1H36.7778L34.1515 11.1111M5.66667 30.9444H29L30.5152 25.1111M30.5152 25.1111H6.83333L1 11.1111H34.1515M30.5152 25.1111L34.1515 11.1111" stroke="white" />
                            </Svg>
                            <Text style={[h1, { color: lightColors.white, fontFamily: 'Ribeye-Regular', }]}>basket</Text>
                        </View>
                        <Text style={[h1, { color: lightColors.white, marginVertical: 10 }]}>Start Shopping.</Text>
                        <Text style={[h1, { color: lightColors.white, marginVertical: 10 }]}>Stay Happy.</Text>
                        <Text style={[h1, { color: lightColors.white, marginVertical: 10 }]}>Anytime.</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                        <Text style={[h2, { top: 20, color: lightColors.primaryColor, fontFamily: 'Rasa-SemiBold', }]}>Basket Online Marketplace</Text>
                        <View style={{
                            width: '80%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <Text style={[h2, { color: lightColors.primaryColor, fontFamily: 'Rasa-SemiBold', }]}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Index2')}>
                                <Text style={[h2, { color: lightColors.primaryColor, fontFamily: 'Rasa-SemiBold', }]}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default IndexScreen; 