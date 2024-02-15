import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StackRoutes from '../../src/routes/stackRoutes';
import Contato from '../pages/Contato';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#ff1493',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#ff1493',
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cursos"
        component={StackRoutes}
        options={{
          title: 'Cursos',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#ff1493',
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="briefcase" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          title: 'Contato',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#ff1493',
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="address-card" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
