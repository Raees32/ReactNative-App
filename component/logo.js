
import { View, StyleSheet, Image, Animated, Easing } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import React, { useRef  , useEffect } from 'react';


import { StackRouter } from '@react-navigation/routers';



const SimpleScreen = () => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Load and play the sound when the component mounts
    try {
      // Play the sound
      SoundPlayer.playSoundFile('beach-sequence-60115', 'mp3');
      
      setTimeout(() => {
        SoundPlayer.stop();
      }, 5000);
    } catch (error) {
      console.log('Failed to play the sound', error);
    }

    return () => {
      // Stop the sound when the component unmounts
      SoundPlayer.stop();
    };
  }, []);

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
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

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
