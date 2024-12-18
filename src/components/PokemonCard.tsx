// src/components/PokemonCard.tsx
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

interface PokemonCardProps {
  name: string;
  image: any;
  onPress: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PokemonCard;
