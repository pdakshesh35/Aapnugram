import React from 'react';
import {  StyleSheet, View} from 'react-native';
import {Login} from "./src/models";
import {store} from './src/store';
import {Provider} from 'react-redux'



export default class App extends React.Component {
  state = {
    isLoadingComplete: false,

  };

  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
            <Login/>
          </View>
        </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
