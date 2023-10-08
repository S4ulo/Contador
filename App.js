import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  function Contar() {
    setContador(contador + 1);
  }

  function Zerar() {
    setContador(0);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./imagens/contador.png')}
        style={styles.imagemContador}
      />

      <Text style={styles.textoH1}>{contador}</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity onPress={Contar}style={styles.botaoContar}>
          <Image
            source={require('./imagens/dedoIndicador1.png')}
            style={styles.imagemBotao}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={Zerar}  style={styles.botaoZerar}>
          <Image
            source={require('./imagens/maoZumbi.png')}
            style={styles.imagemBotao}
          />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemContador: {
    width: 850,
    height: 170,
    marginBottom: 20,
  },
  textoH1: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  imagemBotao: {
    width: 150,
    height: 200,
  },
  botaoContar:{
    padding: 40,
    marginTop: -70
  },
  botaoZerar:{
    padding:40,
    marginTop: -70,
   
  },
});
