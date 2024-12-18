// src/screens/HomeScreen.tsx
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { pokemons } from "../data/pokemons";
import PokemonCard from "../components/PokemonCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
  },
});

export default HomeScreen;
