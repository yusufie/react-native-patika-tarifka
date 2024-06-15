import React from 'react';
import loading_plane from '../../assets/loading_paper_plane.json';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return <LottieView style={{flex: 1}} autoPlay source={loading_plane} />;
};

export default Loading;
