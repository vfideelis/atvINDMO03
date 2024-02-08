import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './src/pages/Home';
import CursosScreen from './src/pages/Cursos';
import ContatoScreen from './src/pages/Contato';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cursos"
          component={CursosScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="envelope" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;