import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from "@react-navigation/drawer";


import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/customDrawer';


const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}>

      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}

      />

      <Drawer.Screen
        name='Sobre'
        component={Sobre}

      />
      <Drawer.Screen
        name='Contato'
        component={Contato}

      />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
