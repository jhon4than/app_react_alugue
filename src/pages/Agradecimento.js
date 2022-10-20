import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

export default function Agradecimento() {
  const navigation = useNavigation();
  return (
    <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={{ width: "105%" }}>
          <Text style={styles.resumo}>Resumo do Agendamento</Text>
        </View>
      </View>

      <Text style={styles.escrita}>Jhonathan Meireles de Oliveira</Text>
      <Text style={styles.escritaResumo}>CPF: 125.456.458-89</Text>
      <Text style={styles.escritaResumo}>Nascimento: 25/03/1998</Text>
      <Text style={styles.escritaResumo}>Email: Jhon4than@teste.com</Text>
      <Text style={styles.escritaResumo}>Endereço: Rua alameda nº20 - Centro - Juiz de fora</Text>
      <Text style={styles.escritaResumo}>Data Agendamento: 25/08/2022</Text>

      <Text style={styles.carro}>Porsche 911 Carrera Coupe/2017</Text>
      <Text style={styles.price}>R$ 1.200,20 - mês</Text>
      <Text style={styles.description}>Parabéns pela sua escolha!</Text>
      <Text style={styles.description}>Agora verifique seu email que enviaremos a confirmação e mais informações dos documentos a apresentar na hora da retirada do veículo</Text>
    </View>
    <View style={styles.button}>
        <Button  title="Início" onPress={() => {navigation.navigate('home')} }></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  swiperContent: {
    flexDirection: "row",
    height: 340,
    width: "100%",
  },
  headerContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  resumo: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
    textAlign: "center"
  },
  escrita: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
    marginTop: 30,
    marginLeft:10
  },
  escritaResumo: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    color: "#4f4a4a",
    marginTop: 5,
    marginLeft: 10
  },
  rating: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 9,
    color: "#4f4a4a",
  },
  myStarStyle: {
    color: "#E7A74e",
    backgroundColor: "transparent",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  carro: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "#000",
    marginTop: 50
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "#000",
    marginTop: 10
  },
  description: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    color: "#b3aeae",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 60,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  },
  button: {
    marginTop:156
  },
});
