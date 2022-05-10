import React, {useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  BackHandler,
  TVEventControl,
} from 'react-native';
import FocusableImage from '../Components/FocusableImage';

const data = [
  {title: 'Letters to Juliet', image: require('../Assets/Images/pic1.jpeg')},
  {title: 'The Dictator', image: require('../Assets/Images/pic2.jpeg')},
];
const HomeScreen = () => {
  const backHandler = useRef();
  const backPressRef = useRef();
  useEffect(() => {
    TVEventControl.enableTVMenuKey();

    backHandler.current = BackHandler.addEventListener(
      'hardwareBackPress',
      function () {
        backPressRef.current.backButtonPressed();
        return true
      },
    );

    return () => {
      backHandler.current.remove();
    };
  }, []);
  const renderItem = ({item}) => {
    return (
      <FocusableImage
        ref={backPressRef}
        title={item.title}
        imageSrc={item.image}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList horizontal data={data} renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});

export default HomeScreen;
