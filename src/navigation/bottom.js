import * as React from 'react';
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons, AntDesign, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 

import DasboardScreen from '../dashboard'
 
import TabBar from './tabs'; 
  
const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return ( 
      <Tab.Navigator 
          tabBar={(props) => <TabBar { ...props } />} 
        >
        <Tab.Screen
          name="Home" 
          component={DasboardScreen}  
          options={{headerShown: false}}
         />
        <Tab.Screen 
          name="Saved" 
          component={DasboardScreen}  
          options={{headerShown: false}}
        />
        <Tab.Screen 
          name="Account" 
          component={DasboardScreen}  
          options={{headerShown: false}}
        /> 
        <Tab.Screen 
          name="Cart" 
          component={DasboardScreen}  
          options={{headerShown: false}}
        /> 
      </Tab.Navigator>  
  );
}