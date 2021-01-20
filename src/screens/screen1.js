import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>click to launch second screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen1;
