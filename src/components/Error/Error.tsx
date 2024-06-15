import React from 'react';
import LottieView from 'lottie-react-native';
import error_404 from '../../assets/error_404.json';

const Error = () => {
  return <LottieView style={{flex: 1}} autoPlay source={error_404} />;
};

export default Error;
