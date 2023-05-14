import React,{useState,useEffect} from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";


export default function Trailer(){
    return(
        <TouchableOpacity style={styles.container}>
            <Feather name="play" size={20} color="#FFF" />
            <Text style={styles.texto}>Trailer</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 40,
        borderRadius: 5,
        borderColor: "#9D9D9D",
        borderWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#AC000000",
        gap: 5,
    },
    texto: {
        color: "#FFF",
        fontSize: 15,
    },
});