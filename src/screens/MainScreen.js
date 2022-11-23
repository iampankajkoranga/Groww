import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';
import Profile from './Profile';
// import FirstScreen from './FirstScreen';
// import SecondScreen from './SecondScreen';
// import Navigation from './Navigation';
import TabScreen from './TabScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;
