import ArtistBox from './ArtistBox.js';
import React, { Component } from 'react';
import { FlatList } from 'react-native';

export default class ArtistList extends Component{
  constructor(props){
    super(props);
    const ds = this.props.artists;
    this.state = {
      dataSource: ds
  }
}

  componentDidMount(){
    this.updateDataSource(this.props.artists)
  }


  UNSAFE_componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({ 
      dataSource: this.state.dataSource
    })
  }

 renderListItem( {artist} ){
      return(
        <ArtistBox artist={{ artist }}/>
      );
    }

  render(){
    let artist = this.state.dataSource;

    return(
      <FlatList 
        data = { artist }
        renderItem = {(artist) => this.renderListItem({artist})}
      />
    );
  }

}
