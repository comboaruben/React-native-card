import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardSet from './components/CardSet';
import cards from './data';
import {Constants} from 'expo';



export default class App extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        
      <CardSet items={cards}></CardSet>
      </View> 
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
