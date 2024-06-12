import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // After handling sign-in, you can navigate to another screen
    navigation.navigate('None');
  };

  const handleSignup = () => {
    navigation.navigate('Siginup');
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Image source={require('./Pictures/log3.png')} style={styles.img} />
          <Text style={styles.title}>Login</Text>
          <Text style={styles.undertitle}>Please sign in to continue.</Text>

          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="#000" style={styles.inputIcon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={"#000"}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#000" style={styles.inputIcon} />
            <TextInput
              placeholder="Password"
              style={styles.inputWithIcon}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={"#000"}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <FontAwesome
                name={secureTextEntry ? 'eye-slash' : 'eye'}
                size={20}
                color="#000"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.new}>Don't have an account?</Text>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
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
    backgroundColor: '#ffff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: width * 0.1, // 10% of the screen width
    alignItems: 'center',
  },
  img: {
    width: width * 0.3, // 30% of the screen width
    height: width * 0.3,
    marginBottom: height * 0.05,
    top: height * 0.05,
  },
  title: {
    fontSize: width * 0.1, // 10% of the screen width
    color: '#000',
    fontWeight: 'bold',
    marginBottom: height * 0.03,
    right: width * 0.32,
    fontFamily:'Mulish-Black',
  },
  undertitle: {
    fontSize: width * 0.045, // 4.5% of the screen width
    color: '#000',
    marginBottom: height * 0.05,
    right: width * 0.15,
    fontFamily:'Mulish-Black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.03,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#B2CAAC',
    borderWidth: 1.4,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: height * 0.06,
    color: '#000',
  },
  inputWithIcon: {
    flex: 1,
    height: height * 0.06,
    color: '#000',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#5D63AA',
    width: '45%',
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    marginTop: height * 0.02,
    top: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.05,
    fontFamily:'Mulish-Black',
   

  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.08,
  left: 55,



  },
  new: {
    color: '#000',
    fontSize: width * 0.04,
    marginRight: 2,
    left: width * 0.0009,
    marginBottom: height * 0.05,
  
  },
  signupButton: {
    backgroundColor: 'transparent',
    marginLeft: width * 0.2,
  },
  signupButtonText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: width * 0.05,
    // textDecorationLine: 'underline',
    position: 'absolute',
  right: width * 0.33, // Adjust the right position as needed
  top: height * 0.001,
  fontFamily:'Mulish-Black',
 
  },
});

export default SignInScreen;