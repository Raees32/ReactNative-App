
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SoundPlayer from 'react-native-sound-player';

const SimpleScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Load and play the sound when the component mounts
    try {
      // Play the sound
      SoundPlayer.playSoundFile('beach-sequence-60115', 'mp3');

      // Stop the sound after 5 seconds
      setTimeout(() => {
        SoundPlayer.stop();
      }, 3000);
    } catch (error) {
      console.log('Failed to play the sound', error);
    }

    // Navigate to the SignIn screen after 4 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Sigin');
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timer);
    };
  }, [navigation]);

  // Animation setup
  const rotation = new Animated.Value(0);
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    // Start the logo rotation animation when the component mounts
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./logo.jpg')}
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
        resizeMode="cover"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180, // Adjust width and height according to your logo size
    height: 180,
  },
});

export default SimpleScreen;
