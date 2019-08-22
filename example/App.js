import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* import * as Font from 'expo-font'; */

/* async function componentWillMount() {
  await Font.loadAsync ({
    QuietMeows: require('./assets/fonts/Quiet-Meows.ttf'),
  })
} */

export default function App() {

/*   const componentWillMount = () => {
    Font.loadAsync({
      'Quiet-Meows': require('./assets/fonts/Quiet-Meows.ttf'),
    });
  } 

  componentWillMount()*/
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Michi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff637d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
  }
});
