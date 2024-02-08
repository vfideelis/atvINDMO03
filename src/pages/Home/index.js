import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Image } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/logo-senai.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text h4 style={styles.text}>Vinicius Fidelis</Text>
        <Text style={styles.text}>Sumaré, 30/01/2024</Text>
        <Text style={styles.text}>Escola SENAI Celso Charuri</Text>
        <Text style={styles.text}>Técnico em Desenvolvimento de Sistemas</Text>
        <Text style={styles.text}>INDMO - Interface para Dispositivos Móveis</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    paddingTop: 20, 
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  innerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginBottom: 10,
  },
});

export default HomeScreen;
