import React, { useReducer } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';
const COLOUR_INCREMENT = 10;

const reducer = (state, action) => {
  //state === {red: number, green: number, blue: number}
  // action === {type: 'change_red', payload 10}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return;
  }
};
const SquareScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(red, green, blue);
  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: COLOUR_INCREMENT * -1 })
        }
      ></ColourCounter>
      <ColourCounter
        colour="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: COLOUR_INCREMENT * -1 })
        }
      ></ColourCounter>
      <ColourCounter
        colour="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: COLOUR_INCREMENT * -1 })
        }
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

export default SquareScreenReducer;
