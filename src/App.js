import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Screen1 from 'screens/screen1';
import Screen2 from 'screens/screen2';
import Dummy1 from 'screens/dummy1';
import Dummy2 from 'screens/dummy2';
import Dummy3 from 'screens/dummy3';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const {width} = Dimensions.get('screen');

const TabIcons = {
  Screen1: 'dashboard',
  Dummy1: 'archive',
  Dummy2: 'tags',
  Dummy3: 'bell',
};

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        return <Icon name={TabIcons[route.name]} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ffc845',
      inactiveTintColor: '#d2d2d2',
      labelStyle: {
        fontSize: width / 32,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      style: {
        height: 64,
      },
    }}>
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Dummy1" component={Dummy1} />
    <Tab.Screen name="Dummy2" component={Dummy2} />
    <Tab.Screen name="Dummy3" component={Dummy3} />
  </Tab.Navigator>
);

class Auth extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Auth;
