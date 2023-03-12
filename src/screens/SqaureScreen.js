import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';
const COLOUR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red, green, blue);

  const setColour = (colour, change) => {
    switch (colour) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => {
          setColour('red', COLOUR_INCREMENT);
        }}
        onDecrease={() => {
          setColour('red', COLOUR_INCREMENT * -1);
        }}
      ></ColourCounter>
      <ColourCounter
        colour="Green"
        onIncrease={() => {
          setColour('green', COLOUR_INCREMENT);
        }}
        onDecrease={() => {
          setColour('green', COLOUR_INCREMENT * -1);
        }}
      ></ColourCounter>
      <ColourCounter
        colour="Blue"
        onIncrease={() => {
          setColour('blue', COLOUR_INCREMENT);
        }}
        onDecrease={() => {
          setColour('blue', COLOUR_INCREMENT * -1);
        }}
      ></ColourCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
