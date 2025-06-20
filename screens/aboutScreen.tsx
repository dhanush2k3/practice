import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
} from 'react-native';
import UserList from '../componento/userList';
import PokemonCard from '../componento/pokemoneCard';
type User = {
  id: string;
  name: string;
  email: string;
};

const users: User[] = [
  { id: '1', name: 'Dhanush', email: 'dhanush@anime.com' },
  { id: '2', name: 'Itachi Uchiha', email: 'itachi@uchiha.com' },
  { id: '3', name: 'Hinata Hyuga', email: 'hinata@byakugan.com' },
  { id: '4', name: 'Naruto Uzumaki', email: 'naruto@hokage.jp' },
  { id: '5', name: 'Sasuke Uchiha', email: 'sasuke@revenge.net' },
  { id: '6', name: 'Kakashi Hatake', email: 'kakashi@konoha.org' },
  { id: '7', name: 'Sakura Haruno', email: 'sakura@leafhospital.com' },
  { id: '8', name: 'Jiraiya', email: 'pervy_sage@toads.com' },
  { id: '9', name: 'Shikamaru Nara', email: 'shikamaru@lazy.com' },
  { id: '10', name: 'Rock Lee', email: 'lee@hardwork.com' },
  { id: '11', name: 'Neji Hyuga', email: 'neji@destiny.jp' },
  { id: '12', name: 'Tsunade', email: 'tsunade@senju.com' },
];

const pokemonList = [
  {
    id: '001',
    name: 'Pikachu',
    image: require('..//.vscode/assets/picachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Thunder Shock', 'Quick Attack'],
    weaknesses: ['Ground'],
  },
  {
    id: '002',
    name: 'Charmander',
    image: require('../.vscode/assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Ember', 'Scratch'],
    weaknesses: ['Water', 'Ground', 'Rock'],
  },
  {
    id: '003',
    name: 'Squirtle',
    image: require('../.vscode/assets/squirtle.png'),
    type: 'Water',
    hp: 44,
    moves: ['Water Gun', 'Tackle'],
    weaknesses: ['Electric', 'Grass'],
  },
  {
    id: '004',
    name: 'Bulbasaur',
    image: require('../.vscode/assets/bulbasaur.png'), // make sure the image exists
    type: 'Grass',
    hp: 45,
    moves: ['Vine Whip', 'Tackle'],
    weaknesses: ['Fire', 'Flying', 'Ice'],
  },

  // Add more here...
];

const handleUserPress = (user: User) => {
  Alert.alert('User Selected', `${user.name}\n${user.email}`);
};
export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0FDF4" />
      {/* <UserList users={users} onUserPress={handleUserPress} /> */}
      <FlatList
        data={pokemonList}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            type={item.type}
            hp={item.hp}
            moves={item.moves}
            weaknesses={item.weaknesses}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4', // optional background
    paddingTop: 16, // space from top
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
