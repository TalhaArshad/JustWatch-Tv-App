import React, {useState, useImperativeHandle} from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

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
        source={imageSrc}
        style={[styles.image, isFocused && styles.frame]}></Image>
      <Text style={styles.title}>{shouldDisplayTitle ? title : ''}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 600,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 60,
  },
  frame: {
    borderColor: 'white',
  },
  image: {
    width: 380,
    height: 500,
    borderWidth: 10,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    color: 'white',
  },
});

export default FocusableImage;
