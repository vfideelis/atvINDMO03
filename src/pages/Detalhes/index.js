import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Detalhe = ({ route }) => {
  const { nome, detalhes } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tela de detalhes do Curso</Text>
      <Text>Nome do Curso: {nome}</Text>
      <Text>Detalhes: {detalhes}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detalhe;
