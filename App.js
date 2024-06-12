
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './component/SignIn';
import SignUpScreen from './component/SignUp';


import SimpleScreen from './component/StartingScreen';
const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          name="Home"
          component={SimpleScreen}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="Sigin"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="Siginup"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        
        
           
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;