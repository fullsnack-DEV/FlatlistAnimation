import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from  "@react-navigation/native"
import {createNativeStackNavigator} from  "@react-navigation/native-stack"
import HomeScreen from './Screens/HomeScreen';
import Flatlistanimation from './Screens/Flatlistanimation';


const {Navigator ,Screen} = createNativeStackNavigator()


export default function App() {
  return (
     <NavigationContainer >
       <Navigator screenOptions={{headerShown: false}} >
         <Screen name="Home" component={HomeScreen} />
         <Screen name="Day1" component={Flatlistanimation} />
       </Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
