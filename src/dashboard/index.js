import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path, } from 'react-native-svg';
import {
    lightColors,
    darkColors,
    h1,
    h2,
    h3,
    h4,
    formGroup,
    textInputOutline,
    headerStyle
} from '../contants';
import { } from '../network';

const DasboardScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [secure, setSecure] = useState(true)

    const backgroundStyle = {
        backgroundColor: isDarkMode ? lightColors.secondaryColor : lightColors.white,
        flex: 1
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar animated={true} backgroundColor="transparent" translucent={true} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={[headerStyle, { backgroundColor: lightColors.secondaryColor }]}>
                <View style={{
                    width: '100%',
                    height: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: 44,
                        height: 44,
                        borderRadius: 44,
                        backgroundColor: lightColors.primaryColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M33 1H28.514L26.4944 8.76623M4.58878 24H22.5327L23.6979 19.5195M23.6979 19.5195H5.48598L1 8.76623H26.4944M23.6979 19.5195L26.4944 8.76623" stroke="white" />
                        </Svg>
                    </View>
                    <View
                        style={{
                            fontFamily: 'Rasa-Bold', width: '60%',
                            height: 32,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                    >
                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#112D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M15.75 15.75L12.4875 12.4875" stroke="#112D42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                        <TextInput
                            placeholder='Search in basket'
                            placeholderTextColor='#112D42B0'
                            style={{
                                width: '70%',
                                height: 50,
                            }}
                        />
                    </View>
                    <Svg width="43" height="20" viewBox="0 0 43 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M2 2H41" stroke="#FF8137" stroke-width="3" stroke-linecap="round" />
                        <Path d="M2 10H32" stroke="#FF8137" stroke-width="3" stroke-linecap="round" />
                        <Path d="M2 18H24" stroke="#FF8137" stroke-width="3" stroke-linecap="round" />
                    </Svg>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 217,
                backgroundColor: lightColors.primaryColor,
            }}>
                <View style={{ padding: 20, flexDirection: 'row', }}>
                    <View style={{
                        width: 75,
                        height: 75,
                        borderRadius: 75,
                        borderWidth: 2,
                        borderColor: '#fff',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                        <Image
                            source={require('../../assets/cloth.jpg')}
                            borderRadius={75}
                            style={{
                                width: 71,
                                height: 71,
                            }}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        height: 75,
                        marginLeft: 10
                    }}>
                        <Text style={[h2, { color: lightColors.secondaryColor }]}>Daniel Obi </Text>
                        <Text style={[h4, { color: lightColors.secondaryColor }]}>danielobi@gmail.com</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: 100,
                    borderRadius: 30,
                    backgroundColor: '#fff',
                    marginTop: 40
                }}>
                    <View style={{
                        borderRadius: 10,
                        width: '90%',
                        height: '100%',
                        backgroundColor: isDarkMode ? lightColors.secondaryColor : lightColors.white,
                        alignSelf: 'center',
                        bottom: 50,
                        zIndex: 10,
                        padding: 30,
                        paddingTop: 40
                    }}>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/Bell.jpg')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Notification
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/Registration.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Edit profile
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/StarFilled.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Wishlist
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/ActivityHistory.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Order history
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/Tracking.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Track order
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/CardPayment.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Payment option
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/Gear.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Settings
                            </Text>
                        </View>
                        <View style={styles.listCon}>
                            <Image
                                source={require('../../assets/Export.png')}
                                resizeMode="contain"
                            />
                            <Text style={[h3, { fontFamily: 'Rasa-Bold', width: '65%', color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>
                                Log out
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listCon: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    }
});

export default DasboardScreen;
