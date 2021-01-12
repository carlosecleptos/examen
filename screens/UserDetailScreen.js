import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserDetailScreen = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("UsersList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the User",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateUser = async () => {
    const userRef = firebase.db.collection("users").doc(user.id);
    await userRef.set({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    setUser(initialState);
    props.navigation.navigate("UsersList");
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (

    <SafeAreaView style={{flex: 1}}>
            <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://www.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png',
      }}
    />

      <View>
        <TextInput
          placeholder="Name"
          autoCompleteType="username"
          style={styles.inputView}
          value={user.name}
          onChangeText={(value) => handleTextChange(value, "name")}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputView}
          autoCompleteType="email"
          placeholder="Email"
          value={user.email}
          onChangeText={(value) => handleTextChange(value, "email")}
        />
      </View>
      <View>
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateUser()} color="#19AC52" />
      </View>
      </SafeAreaView>

  );    

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
   
    marginBottom: 7,


  },
  inputView: {
    backgroundColor: "#AED8E5",
    width: 300,
    height: 50,
    margin: 20,

    },
    tinyLogo: {
      width: 250,
      height: 220,
      left: 20
    },
  


},


);

export default UserDetailScreen;
