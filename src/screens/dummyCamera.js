import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dummy1 = () => {
  return (
    <View style={styles.container}>
      <Text>Dummy 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Dummy1;
