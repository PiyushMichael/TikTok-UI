import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dummy3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Dummy 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dummyText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#555',
  },
});

export default Dummy3;
