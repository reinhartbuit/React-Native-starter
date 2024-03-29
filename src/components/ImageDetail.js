import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Title: {title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
