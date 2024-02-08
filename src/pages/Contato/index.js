import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContatoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre em Contato</Text>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Mensagem" />

      <Button title="Enviar Mensagem" onPress={() => alert('Mensagem enviada')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ContatoScreen;
