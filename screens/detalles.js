import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity ,Button } from 'react-native';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width: 140,height: 140 }} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{alignItems:"center",fontWeight:"bold", fontSize: 20, marginTop: 10,color: '#333'}}>{item.name}</Text>
        <View style={styles.scrollButton}>
              <Text style={styles.scrollButtonText}>Scroll to Top</Text>
              </View>
              </View>

      <TouchableOpacity style={{height:50,width:50,alignItems:"center" }} >
        <Text  style={{margin: 20,color:"gray"}}>Detalles</Text>
      </TouchableOpacity>
    </View>

  );

}

export default class App extends React.Component {
  state = {
    data:[
        {
          artists: "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
          artists: "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
          artists: "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
          artists: "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
        },
        {
          artists: "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        }
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
