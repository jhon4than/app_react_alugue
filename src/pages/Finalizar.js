import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import RenderCarro from "../components/RenderCarro";

export default function Finalizar() {
  const navigation = useNavigation();
  return (
    <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <RenderCarro />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: "105%" }}>
          <Text style={styles.carro}>Porsche 911 Carrera Coupe/2017</Text>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.200,20 - mês</Text>
      <Text style={styles.description}>Parabéns pela sua escolha!</Text>
      <Text style={styles.description}>Faça o seu cadastro para agendar o carro!</Text>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="CPF"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Data Nascimento"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Endereço"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <TextInput
            placeholder="Data Agendamento"
            style={styles.input}
          />
        </View>
      </View>
      <View>
        <Button title="Finalizar" onPress={() => {navigation.navigate('agradecimento')} }></Button>
      </View>
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
  carro: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
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
  price: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "#000",
  },
  description: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    color: "#b3aeae",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
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
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  inputArea: {
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#FFF",
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "90%",
  },
});
