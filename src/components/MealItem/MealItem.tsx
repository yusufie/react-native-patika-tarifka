import React from 'react';
import {Text, View} from 'react-native';
import styles from './MealItem.style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const MealItem = ({item, onPress}: any) => {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => onPress(item.idMeal, item.strMeal)}>
      <FastImage
        style={styles.image}
        source={{uri: item.strMealThumb, priority: FastImage.priority.high}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.title_container} />
      <Text style={styles.title}>{item.strMeal}</Text>
    </TouchableWithoutFeedback>
  );
};

export default MealItem;
