import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SimpleScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to the SignIn screen after 4 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Sigin');
    }, 2000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./Pictures/logo-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
       <Text style={styles.welcomeText}>Wellbeing, simplified</Text>
      <Text style={styles.welcomeText}>psychiatrai makes taking care of yourself easy and effective.</Text>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.7, // 50% of screen width
    height: width * 0.6, // 50% of screen width
    marginBottom: 40,
    bottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'Mulish-BlackItalic',
    color:'#000'
  },
});

export default SimpleScreen;