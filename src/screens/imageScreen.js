import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score="5"
      ></ImageDetail>
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score="6"
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score="7"
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
