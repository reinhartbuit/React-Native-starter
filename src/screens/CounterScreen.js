import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCount] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCount(counter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCount(counter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
