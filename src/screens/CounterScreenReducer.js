import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const reducer = (state, action) => {
  if (action.type === 'IncreaseCounter') {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === 'DecreaseCounter') {
    return { ...state, counter: state.counter - action.payload };
  } else return state;
};
const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'IncreaseCounter', payload: 1 });
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'DecreaseCounter', payload: 1 });
        }}
      ></Button>
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreenReducer;
