import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
type props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Box({ children, style }: props) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 100,
    padding: 25,
    color: 'white',
  },
});
