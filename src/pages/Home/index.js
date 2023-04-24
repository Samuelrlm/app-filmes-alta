import React, {useEffect, useState}from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import HeaderPages from "../components/HeaderPages";
import { ApiKey } from "../../services/apikey";
import CardFilme from "./components/CardFilme";
import CardDetalhes from "./components/CardDetalhes";

export default function Home() {
    const [showDetails, setShowDetails] = useState(false);
    const [detalhes, setDetalhes] = useState([]);
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`
            );
            let json = await response.json();
            setFilmes(json.results);
        }
        loadFilmes();
    }, []);



    return (
        <View style={styles.container}>
            <HeaderPages title='Home'tipo={1}/>
            <View style={styles.containerLista}>
                <Text style={styles.texto}>Filmes mais assistidos</Text>
                <FlatList
                    data={filmes}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {setShowDetails(true), setDetalhes(item)}}>
                            <CardFilme data={item}/>
                        </TouchableOpacity>
                    )}
                />
                
            </View>
            {showDetails && (
                    <View style={styles.containerdetalhes}>
                        <View style={styles.containerClose}>
                            <TouchableOpacity style={styles.containerX} onPress={() => setShowDetails(false)}>
                                <Feather name="x" size={24} color="#000000" />
                            </TouchableOpacity>
                        </View>
                        <CardDetalhes data={detalhes}/>
                    </View>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        alignItems: "center",
    },
    containerLista: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        alignItems: "center",
        marginTop: 10,
    },
    texto: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        margin: 10,
    },
    containerdetalhes: {
        width: "100%",
        height: "100%",
        position: "absolute",
        paddingTop: 60,
        backgroundColor: "#000000CE",
    },
    containerClose: {
        width: "100%",
        alignItems: "flex-end",
        paddingEnd: 25,
        marginBottom: 10,
    },
    containerX: {
        width: 28,
        height: 28,
        borderRadius: 28 /2,
        backgroundColor: "#B9B9B9B7",
        alignItems: "center",
        justifyContent: "center",
    },
});