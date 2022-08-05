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
    ActivityIndicator
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Path, SvgXml } from 'react-native-svg';
import {
    lightColors,
    darkColors,
    h1,
    h2,
    h3,
    formGroup,
    textInputOutline
} from '../contants';
import { base_url, AsyncStorage, Notify, ValidateEmail } from '../network';

const LoginScreen = ({ navigation }) => {
    const resRef = React.useRef();
    const isDarkMode = useColorScheme() === 'dark';
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [secure, setSecure] = useState(true)
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        'email': '',
        'password': '',
    });

    const _loginUser = async () => {
        try {
            if (!userDetails.email || !userDetails.password) {
                var data = {
                    message: 'All fields are required.',
                    type: 'error',
                    duration: 6000,
                    position: 'bottom'
                }
                resRef.current.sendMe(data)
                return false;
            } else if (!ValidateEmail(userDetails.email)) {
                var data = {
                    message: 'Invalid Email Address.',
                    type: 'error',
                    duration: 6000,
                    position: 'bottom'
                }
                resRef.current.sendMe(data);
                return false;
            }
            var data = {
                "email": userDetails.email.trim(),
                'password': userDetails.password,
            }
            console.log(data)
            setLoading(true)
            fetch(`${base_url}login`, {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then(async (json) => {
                    console.log(json)
                    if (json.status == 'success') { 
                        // await SecureStore.setItemAsync('user_token', json.token)
                        // await SecureStore.setItemAsync('user_details', JSON.stringify(json.user))
                        // var data = {
                        //     message: 'Login Successful',
                        //     type: 'success',
                        //     duration: 6000,
                        //     position: 'bottom'
                        // }
                        // resRef.current.sendMe(data);
                        // navigation.reset({
                        //     index: 0,
                        //     routes: [{ name: "Tabs" }],
                        // }); navigation.navigate('Dasboard', { screen: 'Account' })
                    } else {
                        var data = {
                            message: json.message,
                            type: 'error',
                            duration: 6000,
                            position: 'bottom'
                        }
                        resRef.current.sendMe(data);
                    }
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        } catch (error) {
            setLoading(false);
            var data = {
                message: "Network currently unavaibale",
                type: 'info',
                duration: 6000,
                position: 'bottom'
            }
            resRef.current.sendMe(data);
        }
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? lightColors.secondaryColor : lightColors.white,
        flex: 1
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar animated={true} backgroundColor="transparent" translucent={true} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{ width: '50%', alignSelf: 'center', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                <View style={{
                    width: 48,
                    height: 48,
                    borderRadius: 48,
                    backgroundColor: lightColors.primaryColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 5
                }}>
                    <SvgXml xml={`<svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_3290_54466)">
                            <circle cx="8.55556" cy="25.4444" r="1.55556" fill="white" />
                            <circle cx="24.8889" cy="25.4444" r="1.55556" fill="white" />
                            <path d="M37 1H32.514L30.4944 8.76623M8.58878 24H26.5327L27.6979 19.5195M27.6979 19.5195H9.48598L5 8.76623H30.4944M27.6979 19.5195L30.4944 8.76623" stroke="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_3290_54466" x="0.249649" y="0.5" width="40.7504" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3290_54466" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3290_54466" result="shape" />
                            </filter>
                        </defs>
                    </svg>`} width="80%" height="80%" />
                </View>
                <Text style={[h1, { color: lightColors.primaryColor, fontFamily: 'Ribeye-Regular', }]}>basket</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginTop: 40,
            }}>
                <Text style={[h1, { color: isDarkMode ? lightColors.white : lightColors.secondaryColor, marginVertical: 10, fontFamily: 'Rasa-Bold', }]}>Log into your account</Text>
                <Text style={[h3, { width: '80%', color: isDarkMode ? lightColors.white : lightColors.secondaryColor, textAlign: 'center' }]}>Enter your email and password to access your account or create an account.</Text>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 30
            }}>
                <View style={[formGroup,]}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M4.00002 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4.00002C2.90002 20 2.00002 19.1 2.00002 18V6C2.00002 4.9 2.90002 4 4.00002 4Z" stroke="#FF8137" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M22 6L12 13L2.00002 6" stroke="#FF8137" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={isDarkMode ? 'rgba(239, 239, 239, 0.5)' : 'rgba(17, 45, 66, .5)'}
                        style={[textInputOutline, { color: isDarkMode ? lightColors.white : lightColors.primaryColor }]}
                        value={userDetails.email}
                        onChangeText={value => setUserDetails({ ...userDetails, email: value })}
                    />
                </View>
                <View style={[formGroup,]}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M15.5 7.5L19 4M21 2L19 4L21 2ZM11.39 11.61C11.9063 12.1195 12.3168 12.726 12.5978 13.3948C12.8787 14.0635 13.0246 14.7813 13.027 15.5066C13.0295 16.232 12.8884 16.9507 12.6119 17.6213C12.3354 18.2919 11.9291 18.9012 11.4161 19.4141C10.9032 19.9271 10.2939 20.3334 9.6233 20.6099C8.95268 20.8864 8.234 21.0275 7.50863 21.025C6.78327 21.0226 6.06554 20.8767 5.39679 20.5958C4.72804 20.3148 4.12147 19.9043 3.612 19.388C2.61013 18.3507 2.05576 16.9614 2.06829 15.5193C2.08082 14.0772 2.65925 12.6977 3.679 11.678C4.69874 10.6583 6.07821 10.0798 7.52029 10.0673C8.96238 10.0548 10.3517 10.6091 11.389 11.611L11.39 11.61ZM11.39 11.61L15.5 7.5L11.39 11.61ZM15.5 7.5L18.5 10.5L22 7L19 4L15.5 7.5Z" stroke="#FF8137" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={secure}
                        placeholderTextColor={isDarkMode ? 'rgba(239, 239, 239, 0.5)' : 'rgba(17, 45, 66, .5)'}
                        style={[textInputOutline, { width: '83%', color: isDarkMode ? lightColors.white : lightColors.primaryColor }]}
                        value={userDetails.password}
                        onChangeText={value => setUserDetails({ ...userDetails, password: value })}
                    />
                    <TouchableOpacity onPress={() => setSecure(!secure)}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M14.12 14.12C13.8454 14.4147 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.88M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.65661 6.06 6.06L17.94 17.94ZM9.9 4.24C10.5883 4.07888 11.2931 3.99834 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19L9.9 4.24Z" stroke="#797676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            {
                                secure &&
                                <Path d="M1 1L23 23" stroke="#797676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            }
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '90%',
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColors={{ true: lightColors.primaryColor }}
                        lineWidth={1}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={[h3, { color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor, }]}>Remember me</Text>
                </View>

                <TouchableOpacity disabled={loading} onPress={() => _loginUser()} style={[styles.button, { backgroundColor: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor, }]}>
                    {
                        loading
                            ?
                            <ActivityIndicator color='#fff' />
                            :
                            <Text style={styles.buttonText}>LOGIN </Text>
                    }
                </TouchableOpacity>
                <Text style={[h3, { color: isDarkMode ? lightColors.secondaryColor : lightColors.primaryColor, marginTop: 50, textDecorationLine: 'underline' }]}>Forgot password</Text>

                <Text Text style={{
                    fontSize: 16,
                    width: '30%',
                    height: 25,
                    top: '3%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    backgroundColor: isDarkMode ? lightColors.secondaryColor : lightColors.white,
                    zIndex: 10,
                    color: isDarkMode ? lightColors.primaryColor : lightColors.defaultColor,
                }}>Or continue with</Text>
                <View style={{ width: '40%', height: 1, backgroundColor: isDarkMode ? lightColors.primaryColor : lightColors.defaultColor }}>
                </View>

                <View style={{
                    width: '80%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 50,
                }}>
                    <View style={[styles.socialButton, { borderColor: isDarkMode ? lightColors.primaryColor : lightColors.defaultColor }]}>
                        <Image
                            source={require('../../assets/Facebook.png')}
                            resizeMode="contain"
                        />
                        <Text style={[styles.socialButtonText, { color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>Facebook</Text>
                    </View>
                    <View style={[styles.socialButton, { borderColor: isDarkMode ? lightColors.primaryColor : lightColors.defaultColor }]}>
                        <Image
                            source={require('../../assets/Google.png')}
                            resizeMode="contain"
                        />
                        <Text style={[styles.socialButtonText, { color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>Google</Text>
                    </View>
                </View>

                <View style={{
                    width: '80%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 30
                }}>
                    <Text style={[h3, { color: isDarkMode ? lightColors.primaryColor : lightColors.secondaryColor }]}>Don’t have an account?</Text>
                    <Text style={[h3, { color: lightColors.primaryColor, fontFamily: 'Rasa-Bold', }]}>Sign up</Text>
                </View>
            </View>
            <Notify ref={resRef} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
    },
    socialButton: {
        width: '45%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    socialButtonText: {
        fontSize: 18,
    },
});

export default LoginScreen;
