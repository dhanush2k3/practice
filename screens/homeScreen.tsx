import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  about: undefined;
  login: undefined;
  profile: undefined; // add your screen names here
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: NavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go To Contacts"
        onPress={() => navigation.navigate('about')}
      />
      <View style={styles.buttonspace}>
        <Button
          title="Go To Login"
          onPress={() => navigation.navigate('login')}
        />
      </View>
      <View style={styles.buttonspace}>
        <Button
          title="Go To Profile"
          onPress={() => navigation.navigate('profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonspace: {
    padding: 20,
    margin: 20,
  },
});

