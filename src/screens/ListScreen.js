import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend22', age: '20' },
    { name: 'Friend2', age: '20' },
    { name: 'Friend3', age: '20' },
    { name: 'Friend4', age: '20' },
    { name: 'Friend5', age: '20' },
    { name: 'Friend6', age: '20' },
    { name: 'Friend7', age: '20' },
  ];

  return (
    <FlatList
      data={friends}
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});
export default ListScreen;
