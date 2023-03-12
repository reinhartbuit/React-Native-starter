import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomesssScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      ></Button>
      <Button
        title="Go to Image Screen Demo"
        onPress={() => navigation.navigate('Image')}
      ></Button>
      <Button
        title="Go to Counter Screen Demo"
        onPress={() => navigation.navigate('Counter')}
      ></Button>
      <Button
        title="Go to Colour Screen Demo"
        onPress={() => navigation.navigate('Colour')}
      ></Button>
      <Button
        title="Go to Square Screen Demo"
        onPress={() => navigation.navigate('Sqaure')}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
