import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FocusableImage from '../Components/FocusableImage';

const data = [
  {title: 'Letters to Juliet', image: require('../Assets/Images/pic1.jpeg')},
  {title: 'The Dictator', image: require('../Assets/Images/pic2.jpeg')},
];
const HomeScreen = () => {
  const renderItem = ({item}) => {
    return <FocusableImage title={item.title} imageSrc={item.image}/>;
  };
  return (
    <View style= {styles.container}>
      <FlatList 
        horizontal
      data={data} renderItem={renderItem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
        
    }
})

export default HomeScreen;
