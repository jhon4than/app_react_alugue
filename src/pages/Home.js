import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import Carro from '../components/Carro';
import Recommended from '../components/Recommended';

export default function Home() {
 const navigation = useNavigation();

 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Novidades</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/carro1.jpg')} 
       name="Porsche"
       description="Porsche 911 Carrera Coupe/2017 - Valor do automóvel: R$ 587 mil"
       onPress={() => {navigation.navigate('detail')} }
      />

      <New
       cover={require('../assets/carro2.jpg')} 
       name="BMW"
       description="BMW 320 GP/2021 0km"
       onPress={() => {}}
      />

      <New
       cover={require('../assets/carro3.jpg')} 
       name="BMW X1"
       description="BMW X1 XDrive/2021 0km"
       onPress={() => {}}
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Próximo de você</Text>
    </View>  

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <Carro
      cover={require('../assets/carro4.jpg')}
      />
      <Carro
      cover={require('../assets/carro5.jpg')}
      />
      <Carro
      cover={require('../assets/carro6.jpg')}
      />
    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../assets/carro1.jpg')}
        Carro="Porsche"
        offer="25%"
      />
      <Recommended
        cover={require('../assets/carro4.jpg')}
        Carro="BMW X3"
        offer="15%"
      />
      <Recommended
        cover={require('../assets/carro6.jpg')}
        Carro="Volvo XC 60/2021 0km"
        offer="10%"
      />
    </ScrollView>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});