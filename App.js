import React from "react";
import { StyleSheet, } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import home from './screens/home';
import UsersList from "./screens/UsersList";
import Music from "./screens/Music";
import detalles from "./screens/detalles";







const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FF0000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Last.fm" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Regresar" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Regresar" }}
      />
            <Stack.Screen
        name="Music"
        component={Music}
        options={{ title: "Regresar" }}
      />
                  <Stack.Screen
        name="detalles"
        component={detalles}
        options={{ title: "Regresar" }}
      />
                        <Stack.Screen
        name="home"
        component={home}
        options={{ title: "Regresar" }}
      />




             


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <MyStack />


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems : "center",
    justifyContent:"center",
    margin:20

}



});
