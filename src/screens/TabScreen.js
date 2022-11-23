import {Text, View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';

const Tab = createBottomTabNavigator();


class Funds extends Component {
    render() {
      alert('empty');
    }
  }



export class TabScreen extends Component {
  render() {
    return (
      <View style={{flex:1}} >
        <Tab.Navigator>
          <Tab.Screen name="HomePage" component={HomePage} 
          options={{
            headerShown: false,
            title:"Home",
            // tabBarActiveBackgroundColor:'rgb(29,29,29)'
         
          


          }}
          />
             <Tab.Screen name="Mutual" component={Funds} 
          options={{
            headerShown: false,
            title:"Mutual Funds",
         
          


          }}
          />
            {/* <Tab.Screen
            options={{
                headerShown: false,
            //   tabBarLabel: 'account',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('../assets/user.png')}
                  style={styles.icon1}
                />
              ),
            }}
            name="Account"
            component={Categories}
          /> */}
              
        </Tab.Navigator>
      </View>
    );
  }
}

export default TabScreen;