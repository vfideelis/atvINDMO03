
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CursosScreen from '../pages/Cursos';
import Detalhe from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cursos'
        component={CursosScreen}
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen
        name='Detalhe'
        component={Detalhe}
      />
    </Stack.Navigator>
  );
}
