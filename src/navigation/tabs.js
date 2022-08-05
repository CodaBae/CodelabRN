import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native';
// import { Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';
import Svg, { Circle, Rect, G, Path, Mask } from 'react-native-svg';
import {
    lightColors,
    darkColors,
    h1,
    h2,
    h3,
    h4,
    formGroup,
    textInputOutline
} from '../contants';

const { width, height } = Dimensions.get('screen');
const Tab = ({ isFocused, color, tab, onPress }) => {
    return (
        <TouchableOpacity style={styles.icon} onPress={onPress}>
            {(tab.name === 'Home') &&
                <Svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M3.86673 17.2343L20 0.715604L36.1333 17.2343H3.86673Z" stroke={isFocused ? lightColors.primaryColor : color} />
                    <Mask id="path-2-inside-1_3290_54617" fill="white">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M33.6987 17.6375H6.30145V33.1429H15.6165V26.6306H24.6576V33.1429H33.6987V17.6375Z" />
                    </Mask>
                    <Path d="M6.30145 17.6375V16.6375H5.30145V17.6375H6.30145ZM33.6987 17.6375H34.6987V16.6375H33.6987V17.6375ZM6.30145 33.1429H5.30145V34.1429H6.30145V33.1429ZM15.6165 33.1429V34.1429H16.6165V33.1429H15.6165ZM15.6165 26.6306V25.6306H14.6165V26.6306H15.6165ZM24.6576 26.6306H25.6576V25.6306H24.6576V26.6306ZM24.6576 33.1429H23.6576V34.1429H24.6576V33.1429ZM33.6987 33.1429V34.1429H34.6987V33.1429H33.6987ZM6.30145 18.6375H33.6987V16.6375H6.30145V18.6375ZM7.30145 33.1429V17.6375H5.30145V33.1429H7.30145ZM15.6165 32.1429H6.30145V34.1429H15.6165V32.1429ZM16.6165 33.1429V26.6306H14.6165V33.1429H16.6165ZM15.6165 27.6306H24.6576V25.6306H15.6165V27.6306ZM23.6576 26.6306V33.1429H25.6576V26.6306H23.6576ZM33.6987 32.1429H24.6576V34.1429H33.6987V32.1429ZM32.6987 17.6375V33.1429H34.6987V17.6375H32.6987Z" fill={isFocused ? lightColors.primaryColor : color} mask="url(#path-2-inside-1_3290_54617)" />
                </Svg>

            }
            {(tab.name === 'Saved') &&
                <Svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M20 2.39327L24.0136 15.0565L24.1242 15.4055H24.4903H37.5128L26.9668 23.2602L26.6812 23.4728L26.7888 23.8122L30.8104 36.5007L20.2987 28.6715L20 28.4491L19.7013 28.6715L9.18956 36.5007L13.2112 23.8122L13.3188 23.4728L13.0332 23.2602L2.48724 15.4055H15.5097H15.8758L15.9864 15.0565L20 2.39327Z" stroke={isFocused ? lightColors.primaryColor : color} />
                </Svg>
            }
            {(tab.name === 'Account') &&
                <Svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Mask id="path-1-inside-1_3290_54606" fill="white">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M18.3998 14.2855C20.8333 13.0372 22.5 10.4906 22.5 7.55208C22.5 3.38118 19.1421 0 15 0C10.8579 0 7.5 3.38118 7.5 7.55208C7.5 10.4906 9.16672 13.0372 11.6002 14.2855C4.95364 15.8364 0 21.8357 0 29H30C30 21.8357 25.0464 15.8364 18.3998 14.2855Z" />
                    </Mask>
                    <Path d="M18.3998 14.2855L17.9434 13.3957L15.518 14.6399L18.1726 15.2593L18.3998 14.2855ZM11.6002 14.2855L11.8274 15.2593L14.482 14.6399L12.0566 13.3957L11.6002 14.2855ZM0 29H-1V30H0V29ZM30 29V30H31V29H30ZM21.5 7.55208C21.5 10.1037 20.0538 12.3131 17.9434 13.3957L18.8563 15.1752C21.6127 13.7612 23.5 10.8775 23.5 7.55208H21.5ZM15 1C18.5833 1 21.5 3.92693 21.5 7.55208H23.5C23.5 2.83543 19.7009 -1 15 -1V1ZM8.5 7.55208C8.5 3.92693 11.4167 1 15 1V-1C10.2991 -1 6.5 2.83543 6.5 7.55208H8.5ZM12.0566 13.3957C9.94619 12.3131 8.5 10.1037 8.5 7.55208H6.5C6.5 10.8775 8.38725 13.7612 11.1437 15.1752L12.0566 13.3957ZM1 29C1 22.3063 5.62772 16.7059 11.8274 15.2593L11.3729 13.3116C4.27955 14.9668 -1 21.3651 -1 29H1ZM30 28H0V30H30V28ZM18.1726 15.2593C24.3723 16.7059 29 22.3063 29 29H31C31 21.3651 25.7204 14.9668 18.6271 13.3116L18.1726 15.2593Z" fill={isFocused ? lightColors.primaryColor : color} mask="url(#path-1-inside-1_3290_54606)" />
                </Svg>
            }
            {(tab.name === 'Cart') &&
                <Svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M41 1H33.4904L31.4933 9.45625M3.45211 27.6063H27.2069L28.1324 23.6875M28.1324 23.6875L3.84181 23.7446L1 9.45625H31.4933M28.1324 23.6875L31.4933 9.45625" stroke={isFocused ? lightColors.primaryColor : color} stroke-linecap="round"/>
                    <Circle cx="6.5249" cy="31.05" r="1.5" stroke={isFocused ? lightColors.primaryColor : color}/>
                    <Circle cx="24.3027" cy="31.05" r="1.5" stroke={isFocused ? lightColors.primaryColor : color}/>
                </Svg> 
            } 
            <Text style={[{ color: isFocused ? lightColors.primaryColor : color, fontSize: 20, top: 5, fontFamily: 'Rasa-Regular', }]}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

function TabBar({ state, navigation }) {
    const [selected, setSelected] = useState('Dashboard');
    const { routes } = state;
    const renderColor = currentTab => (currentTab === selected ? '#14234A' : '#94AFB6');
    const handlePress = (activeTab, index) => {
        if (state.index !== index) {
            setSelected(activeTab)
            navigation.navigate(activeTab);
        }
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => (
                        <Tab
                            tab={route}
                            onPress={() => handlePress(route.name, index)}
                            color={renderColor(route.name)}
                            key={route.key}
                            isFocused={state.index === index}
                        />
                    ))
                }
            </View>
        </View>
    );
}
export default TabBar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width,
        height: 70, 
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: width / 4,
        height: '100%',
    }
});