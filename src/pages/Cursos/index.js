// CursosScreen.js

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CursoCard = ({ title, description, imageSource }) => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Detalhe', { nome: title, detalhes: description });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToDetails}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      {/* Removendo a descrição aqui para mostrar apenas quando clicar no curso */}
    </TouchableOpacity>
  );
};

const CursosScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <CursoCard
          title="Ciber Segurança"
          description="Cibersegurança é a prática proteger ativos de informação tais sistemas, computadores e servidores entre outros contra ameaças cibernéticas ou ataques maliciosos."
          imageSource={require('../../assets/ciberseguranca.png')}
        />

        <CursoCard
          title="Google Cloud"
          description="Com ele, é possível desenvolver aplicativos personalizados, estabelecer programas de gerenciamento de Customer Relationship Management (CRM), alocar SAP em nuvem e se aprofundar em projetos que envolvam Big Data e Machine Learning, contando com softwares robustos e disponíveis o tempo todo."
          imageSource={require('../../assets/cloud.png')}
        />

        <CursoCard
          title="Técnico em Eletromecânica"
          description="O curso técnico em Eletromecânica integra as áreas de instrumentação e controle de processos industriais com a eletrônica e mecânica industrial no setor produtivo, manutenção de equipamentos e instalações eletroeletrônicas industriais, observando normas técnicas e de segurança."
          imageSource={require('../../assets/eletro.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 8,
    marginBottom: 16,
  },
});

export default CursosScreen;
