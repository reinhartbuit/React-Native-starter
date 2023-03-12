import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button
        title={`Increase ${colour}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease" ${colour}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourCounter;
