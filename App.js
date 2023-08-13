/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreen from './src/screens/splashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import TabStack from './src/stacks/tabStack';
import PlaceDetailsScreen from './src/screens/placeDetail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TabStack" component={TabStack} options={{ headerShown: false }} />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetailsScreen}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
