import React from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './CategoryItem.style';
import FastImage from 'react-native-fast-image';

const CategoryItem = ({onPress, item}: any) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => onPress(item.idCategory, item.strCategory)}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.strCategoryThumb,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text style={styles.text}>{item.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryItem;
