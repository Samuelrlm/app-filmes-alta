import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CardFilme({ data }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>{data.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 250,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        borderRadius: 10,
    },
    imagem: {
        width: 150,
        height: 200,
        borderRadius: 10,
    },
    titulo: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
});
