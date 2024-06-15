import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './screens/Categories/Categories';
import Meals from './screens/Meals/Meals';
import Recipe from './screens/Recipe/Recipe';
import {Colors} from './themes/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {color: Colors.primary},
          headerTitleAlign: 'center',
          headerTintColor: Colors.primary,
          headerBackTitleVisible: true,
          headerBackTitleStyle: {marginLeft: 2, fontSize: 20},
        }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
