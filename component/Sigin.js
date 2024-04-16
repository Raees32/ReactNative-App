import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
const SignInScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = () => {
      // Implement your sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);
    
      // After handling sign-in, you can navigate to another screen
      // For example, navigate to the Home screen
      navigation.navigate('None');
    };
  
    const handleSignup = () => {
      navigation.navigate('Siginup');
    };
  
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image source={require('./logo1.png')} style={styles.img} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.undertitle}>Please Sign in to Continue.</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
  
           
           
           
            <Icon name='arrow-down'   style = {styles.icon} />
          


            {/* Parent view for "Don't have an account?" text and "Sign Up" button */}
            <View style={styles.signupContainer}>
              <Text style={styles.new}>Don't have an account?</Text>
            
              <TouchableOpacity  style={styles.buttons} onPress={handleSignup}>
                <Text style={styles.buttonTexts}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    undertitle: {
      color: '#ffff',
      marginBottom: 40,
      marginRight: 124,
      fontSize: 18,
      top:10
    },
    title: {
      fontSize: 43,
      color: '#ffff',
      textShadowColor: 'rgba(0, 0, 0, 0.115)',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
      marginRight: 230,
      top: 40,
      fontWeight: 'bold',
      marginTop: 10,
      fontFamily: 'sans-serif',
      marginVertical: 40,
    },
    input: {
      width: '80%',
      height: 42,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 20,
      paddingHorizontal: 14,
      marginBottom: 20,
      backgroundColor: '#fff',
      color: '#000000',
    },
    button: {
      backgroundColor: '#ff0000',
      width: '45%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 27,
      marginTop: 25,
      marginBottom: 8,
    },
   
    buttonText: {
      color: '#ffff',
      fontWeight: 'bold',
      fontSize: 25,

    },
    buttonTexts: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 25,
  
      },
    loginText: {
      color: '#ffff',
      fontSize: 18,
    },
    img: {
      width: 130,
      height: 130,
      borderRadius: 200,
      top: 40,
    },
    icon: {
      color: '#ffffff',
      fontSize: 50,
      top: 35,
     
    },
    new: {
      color: '#ffff',
      fontSize:18
    
    },
    signupContainer: {
      flexDirection: 'row', // Align children horizontally
      alignItems: 'center', // Align children vertically
      marginTop: 70,
      color:'red' // Adjust spacing as needed
    },
  });
  
  export default SignInScreen;