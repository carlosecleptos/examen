import {StyleSheet, View, } from 'react-native';
import ArtistList from './ArtistList.js';

import React, { Component } from 'react';
import {getMusicData} from './api'

export default class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: null
    }
  }

  componentDidMount(){
    getMusicData().then(data=>this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists

    return (
      <View style={styles.container}>
        { artists && <ArtistList artists={ artists }/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  }
});