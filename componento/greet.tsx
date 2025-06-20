import { View, Text } from 'react-native';

type Greetprop = {
  name: string;
};

export default function Greet({ name }: Greetprop) {
  return (
    <View>
      <Text>Hello@ , {name}</Text>
    </View>
  );
}
