// import 'react-native-gesture-handler';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, useColorScheme, TextInput, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import MyStack from './src/navigation/stacks'; 
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native'; 
// import { base_url, Ionicons, FontAwesome5, Notify, FontAwesome, Entypo, Toast, typeOfVar, LottieView, ValidateEmail, FloatingMenu, actionsButton, renderItemIcon, formatDate, SecureStore, categories, groupBy, numberWithCommas } from './src/network';
 
export default function App() {
  // const animation = useRef(null);
  const scheme = useColorScheme();
  // const [appIsReady, setAppIsReady] = useState(false); 
  // const [loaded] = useFonts({
  //   'OpenSans-Bold': require('./assets/font/Quicksand-Bold.ttf'),
  //   'OpenSans-Light': require('./assets/font/Quicksand-Light.ttf'),
  //   'OpenSans-Medium': require('./assets/font/Quicksand-Medium.ttf'),
  //   'OpenSans-SemiBold': require('./assets/font/Quicksand-SemiBold.ttf'),
  //   'OpenSans-Regular': require('./assets/font/Quicksand-Regular.ttf'),
  // }); 

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyStack />
    </NavigationContainer>
  );
};
  