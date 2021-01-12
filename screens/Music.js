import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity ,Button } from 'react-native';




function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width: 140,height: 140 }} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{alignItems:"center",fontWeight:"bold", fontSize: 20, marginTop: 10,color: '#333'} }>{item.artists} </Text>
        <View style={styles.scrollButton}>
              <Text style={styles.scrollButtonText}>Scroll to Top</Text>
              </View>
              </View>

      <TouchableOpacity  onPress={() => props.navigation.navigate("detalles")}
        title="detalles" >
        <Text  style={{margin: 20,color:"gray"}}>Detalles</Text>
      </TouchableOpacity>
    </View>

  );

}

export default class App extends React.Component {
  state  ={
    data:[
        {
          "artists": "Coldplay",
            "photo": "data:image/jpeg;base64,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"
        },
        {
          "artists": "Bad Bunny",
            "photo": "https://los40es00.epimg.net/los40/imagenes/2020/02/04/musica/1580839305_053268_1580839472_noticia_normal.jpg"
        },
        {
          "artists": "Drake",
            "photo": "https://www.tonica.la/__export/1594830515534/sites/debate/img/2020/07/15/drake-comparte-historia-en-cama-tras-cirugia.jpg_423682103.jpg"
        },
        {
          "artists": "6ix9ine",
            "photo": "https://t3.gstatic.com/images?q=tbn:ANd9GcSSyk7bX7f6YeVSdvI2qpZaNwtOVc4NheS3xAlhkARvcHWDlIkVCS38QrhqAXvd"
        },
        {
          "artists": "Dua lipa",
            "position": "Sales Manager",
            "photo": "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587514348_2154.jpg"
        },

     
    ]
  }



  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .1,
  shadowOffset: {
        height: 1,
        width: -2
    },
    elevation: 2
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"100%",
    flexDirection:"row",
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  button: {
      alignItems: "center",
      padding: 10,
      backgroundColor:"white",
      flexDirection:"row",
    },
    loginBtn:{
      alignItems:"rigth",
      margin:20,   
    },
  }
 }
) ;
