import React, {Component} from 'react';
import {View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Screen1 from 'screens/screen1';
import Screen2 from 'screens/screen2';
import Dummy1 from 'screens/dummy1';
import DummyCamera from 'screens/dummyCamera';
import Dummy2 from 'screens/dummy2';
import Dummy3 from 'screens/dummy3';

import {themePurple} from 'constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const {width} = Dimensions.get('screen');

const TabIcons = {
  Screen1: (isFocused) => (
    <View>
      {isFocused ?
        <EntypoIcon name="home" color={themePurple} size={26} /> :
        <FeatherIcon name="home" color="#000" size={24} />
      }
    </View>
  ),
  Dummy1: (isFocused) => (
    <View>
      {isFocused ?
        <AntDesignIcon name="heart" color={themePurple} size={24} /> :
        <AntDesignIcon name="hearto" color="#000" size={24} />
      }
    </View>
  ),
  Dummy2: (isFocused) => (
    <FontAwesomeIcon
      name="search"
      color={isFocused ? themePurple : '#000'}
      size={24}
    />
  ),
  Dummy3: (isFocused) => (
    <View>
      {isFocused ?
        <FontAwesome5Icon name="user-alt" color={themePurple} size={21} /> :
        <FeatherIcon name="user" color="#000" size={26} />
      }
    </View>
  ),
};

const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let currentScreen = [...state.history];
        currentScreen = currentScreen.pop();

        const isFocused = currentScreen.key === route.key;

        const onPress = () => {
          if (route.name === 'DummyCamera') {
            return;
          }
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (route.name === 'DummyCamera') {
          return (
            <TouchableOpacity
              key={index.toString().concat('tab')}
              style={styles.cameraCurve}
              onPress={() => alert('Launch camera placeholder')}
            >
              <View style={styles.cameraContainer}>
                <EntypoIcon name="video-camera" color="#fff" size={30} />
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={index.toString().concat('tab')}
            onPress={onPress}
            style={styles.flexStyle}>
            {TabIcons[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Dummy1" component={Dummy1} />
    <Tab.Screen name="DummyCamera" component={DummyCamera} />
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

const styles = StyleSheet.create({
  cameraCurve: {
    borderRadius: 64,
    padding: 20,
    backgroundColor: '#eee',
    marginLeft: -20,
    marginRight: 20,
    marginBottom: -4,
  },
  cameraContainer: {
    padding: 14,
    borderRadius: 32,
    backgroundColor: themePurple,
    transform: [{translateY: -10}],
  },
  flexStyle: {flex: 1},
  bottomTabBar: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: width / 10,
    backgroundColor: '#eee',
  },
});

export default Auth;
