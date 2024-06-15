import {Alert, Linking} from 'react-native';

const openYoutubeURL = async (url: string, safe: boolean) => {
  // if safe is false try to open url without checking support
  if (!safe) {
    await Linking.openURL(url);
    return;
  }
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export default openYoutubeURL;
