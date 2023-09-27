import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoPokemon from "./components/InfoPokemon";
import CadastroUsuario from "./components/CadastroUsuario";
import BuscaPokedex from "./components/BuscaPokedex";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { color } from "react-native-reanimated";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MENU</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InfoPokemon")}
      >
        <Text style={styles.buttonText}>InfoPokemon</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroUsuario")}
      >
        <Text style={styles.buttonText}>CadastroUsuario</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuscaPokedex")}
      >
        <Text style={styles.buttonText}>BuscaPokedex</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 5,
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
    "Barlow-ExtraBold": require("./assets/fonts/Barlow-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="InfoPokemon" component={InfoPokemon} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Stack.Screen name="BuscaPokedex" component={BuscaPokedex} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default App;
