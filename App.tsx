import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
  Text,
  Switch,
  View,
} from 'react-native';
import PokemonCard from './componento/pokemoneCard';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen';
import AboutScreen from './screens/aboutScreen';
import Login from './screens/login';
function App() {
  const stack = createNativeStackNavigator();
  // const [name, setName] = useState('');
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const pickachuData = {
  //   name: 'Pikachu',
  //   image: require('../designs/.vscode/assets/picachu.png'),
  //   type: 'Electric',
  //   hp: 40,
  //   moves: ['tackle', 'thunderbolt', 'tail whip'],
  //   weaknesses: ['ground', 'fire'],
  // };
  // const squirtleData = {
  //   name: 'Squirtle',
  //   image: require('../designs/.vscode/assets/squirtle.png'),
  //   type: 'Water',
  //   hp: 40,
  //   moves: ['tackle', 'thunderbolt', 'tail whip'],
  //   weaknesses: ['ground', 'fire'],
  // };
  // const charmanderData = {
  //   name: 'Charmander',
  //   image: require('../designs/.vscode/assets/charmander.png'),
  //   type: 'Fire',
  //   hp: 39,
  //   moves: ['scratch', 'ember', 'growl', 'leer'],
  //   weaknesses: ['ground', 'water'],
  // };
  // const bulbasaurData = {
  //   name: 'Bulbasaur',
  //   image: require('../designs/.vscode/assets/bulbasaur.png'),
  //   type: 'Grass',
  //   hp: 40,
  //   moves: ['tackle', 'thunderbolt', 'tail whip'],
  //   weaknesses: ['fire'],
  // };

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="home">
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="about" component={AboutScreen} />
        <stack.Screen name="login" component={Login} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    borderWidth: 2,
    color: 'black',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multiline: {
    minHeight: 100,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default App;
