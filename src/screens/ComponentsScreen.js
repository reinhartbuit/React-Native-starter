import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Reinhart';
  return (
    <View>
      <Text style={styles.textStyle1}>Getting Started with React Native!</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
