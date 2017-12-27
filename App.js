import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Inspections from './pages/Inspections';

export default class App extends React.Component {
  render() {
    const MainNavigation = TabNavigator({
      inspections: {
        screen:Inspections
      } 
    })
    return (
      <View style={styles.container}>
        <MainNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
