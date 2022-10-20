import React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

import Home from './pages/Home'; 
import Detail from './pages/Detail'; 
import Finalizar from './pages/Finalizar'; 
import Agradecimento from './pages/Agradecimento';

const Stack = createStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="home" 
        component={Home} 
        options={{
          title: 'Alugue',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Feather
              name="shopping-bag"
              size={24}
              color="black"
              />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen 
        name="detail" 
        component={Detail} 
        options={{
          title: 'Detalhe',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },

          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Feather
              name="shopping-bag"
              size={24}
              color="black"
              />
            </TouchableOpacity>
          )
        }}

        />
        <Stack.Screen 
        name="finalizar" 
        component={Finalizar} 
        options={{
          title: 'Finalizar Agendamento',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },
        }}

        />
        <Stack.Screen 
        name="agradecimento" 
        component={Agradecimento} 
        options={{
          title: 'Obrigado pela preferência!',
          headerTitleStyle:{
            fontFamily: 'Montserrat_700Bold'
          },
        }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;