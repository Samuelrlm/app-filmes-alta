import React from "react";
import { StyleSheet, View } from "react-native";
import TopFilmes from "./components/TopFilmes";

export default function Home() {
    return (
        <View style={styles.container}>
            <TopFilmes />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
    }
});