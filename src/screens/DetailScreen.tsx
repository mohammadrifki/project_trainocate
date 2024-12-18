import React from "react";
import { RouteProp } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { pokemons } from "../data/pokemons";

type RootStackParamList = {
  Detail: { id: number };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

type DetailScreenProps = {
  route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { id } = route.params;
  const pokemon = pokemons.find((p) => p.id === id);

  return (
    <View style={styles.container}>
      {pokemon && (
        <>
          <Image source={pokemon.image} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.description}>{pokemon.description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default DetailScreen;
