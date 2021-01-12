import React, { useState, useEffect } from "react";
import { Button, StyleSheet,Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";
const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { artists, email,  } = doc.data();
        users.push({
          id: doc.id,
          artists,
          email,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
                  <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://i.pinimg.com/originals/c2/34/17/c23417fab882cdd271c055255322f199.jpg',
      }}  />    


      <Button style={styles.loginBtn}
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Ingresa"
          

      />       


      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://i.pinimg.com/originals/c2/34/17/c23417fab882cdd271c055255322f199.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    
  },
    tinyLogo: {
      width: 355,
      right:20,
      margin:20,
      height: 500,
      },
    loginBtn:{
      margin:20,

    }
  

}


);


export default UserScreen;
