import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const FocusableImage = ({imageSrc, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSrc} style={styles.image}></Image>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  image: {
    width: 350,
    height: 500,
  },
  title: {
    fontSize: 30,
    marginTop: 10,
  },
});

export default FocusableImage;
