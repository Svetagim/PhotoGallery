import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import PhotoList from './src/components/PhotoList'
import PhotoGrid from './src/components/PhotoGrid'
import FavoriteView from './src/components/FavoriteView'
import SearchView from './src/components/SearchView'


export default class App extends Component {
  appViewNum = 0
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View> 
        <Header
        leftComponent={{ icon: 'menu', onPress: () => console.log('pressed') }}
        centerComponent={{ text: 'My Photo Gallery' }}
        rightComponent={{ icon: 'home' }}
      />
         { this.appViewNum ? <FavoriteView/> : <SearchView/>}
        </View>
      </SafeAreaView>
    );
  }
}

const cyanColor = 'rgb(97, 149, 200)'
const styles = StyleSheet.create({
  header: {
    backgroundColor: cyanColor,
    padding: 10,
    fontSize: 36,
    textAlign: 'center'
  }
});

