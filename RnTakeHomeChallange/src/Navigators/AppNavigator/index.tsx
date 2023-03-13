import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CART_SCREEN, HOME_SCREEN, LOGIN_SCREEN} from '../RouteName';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen, HomeScreen, LoginScreen} from '../../Screens';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={CART_SCREEN}
          component={CartScreen}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
