import React, {useState, useImperativeHandle} from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, Platform} from 'react-native';

const FocusableImage = React.forwardRef((props, ref) => {
  const {imageSrc, title} = props;
  const [isFocused, setIsFocused] = useState(false);
  const [shouldDisplayTitle, setShouldDisplayTitle] = useState(false);
  useImperativeHandle(ref, () => ({
    backButtonPressed() {
      setShouldDisplayTitle(false);
    },
  }));
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
        setShouldDisplayTitle(false);
      }}
      onPress={() => {
        setShouldDisplayTitle(true);
      }}>
      <Image
      resizeMode= "contain"
        source={imageSrc}
        style={[styles.image, isFocused && styles.frame]}></Image>
      <Text style={styles.title}>{shouldDisplayTitle ? title : ''}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: Platform.isTVOS ? 400: 150,
    height: Platform.isTVOS ? 600: 280,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 60
  },
  frame: {
    borderColor: 'white',
  },
  image: {
    width: Platform.isTVOS ? 380: 250,
    height: Platform.isTVOS ? 500: 310,
    borderWidth: Platform.isTVOS ? 10: 5,
  },
  title: {
    fontSize: Platform.isTVOS ? 30: 20,
    marginTop: Platform.isTVOS ? 20: 12,
    color: 'white',
  },
});

export default FocusableImage;
