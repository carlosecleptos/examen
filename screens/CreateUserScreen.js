import React, { useState } from "react";
import {
  Button,
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";




const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>

    <ScrollView style={styles.container}>
            <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://www.last.fm/static/images/lastfm_logo_facebook.15d8133be114.png',
      }}
    />

      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={2}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}

      <View style={styles.button}>
      <Button
        onPress={() => props.navigation.navigate("Music")}
        title="Ingresa"
      />

      </View>
    </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    marginTop:20, 
  },
  inputGroup: {
    backgroundColor: "#AED8E5",
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  tinyLogo: {
    right:20,
    width: 290,
    height: 200,
    margin:20
  },

  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },

});
export default AddUserScreen;

