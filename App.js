import { Fragment } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Button title="Submit" />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
