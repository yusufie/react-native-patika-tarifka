import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
