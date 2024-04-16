import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    navigation.navigate('Sigin');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image source={require('./logo1.png')} style={styles.img} />
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.undertitle}>Please Sign up in to Continue.</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
    title: {
        fontSize: 35,
        marginRight: 160,
        marginTop: 70,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        marginVertical: 9,
        fontFamily: 'sans-serif',

    },
    undertitle: {
        marginBottom: 53,
        marginRight: 60,
        fontSize: 20,
        color: '#fff'
    },


    input: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ffff',
        borderRadius: 23,
        paddingHorizontal: 14,
        marginBottom: 18,
        backgroundColor: '#fff',
        color: '#000000',
        margin:4,


    },
    button: {
        backgroundColor: '#ff0000', // Change the button color here
        width: '45%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
        marginVertical: 27,
        marginBottom: 50,
        // Change the border radius here
    },
    buttonText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 28,


    },
    loginText: {
        marginTop: 16,
        color: '#fff',
        fontSize: 19,
        paddingTop: 10,
        marginBottom: 120,

    },
    img: {
        width: 130, // Adjust the width as needed
    height: 130, // Adjust the height as needed
   
    borderRadius: 200 ,
    top: 40
      },

});

export default SignUpScreen;



