import React, {useEffect, useState}from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import CardDetalhes from "../Detalhes";
import { ApiKey } from "../../../../services/apikey";
import CardFilme from "./CardFilme";
import CardLancamento from "../CardLastLancamento";
import TopHome from "../TopHome";



export default function TopFilmes() {
    const [showDetails, setShowDetails] = useState(false);
    const [detalhes, setDetalhes] = useState([]);
    const [filmes, setFilmes] = useState([]);
    const [melhores, setMelhores] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`
            );
            let json = await response.json();
            setFilmes(json.results);
        }
        async function loadFilmes2() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=pt-BR&page=1`
            );
            let json = await response.json();
            setMelhores(json.results);
        }
        loadFilmes2();
        loadFilmes();
    }, []);
    return (
        <>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.containerLista}>
                <TopHome />
                <View style={styles.containerListaFilmes}>
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
                <View style={styles.containerLançamentos}>
                    <CardLancamento />
                </View>
                <View style={styles.containerListaFilmes}>
                    <Text style={styles.texto}>Melhores da historia</Text>
                    <FlatList
                        data={melhores}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {setShowDetails(true), setDetalhes(item)}}>
                                <CardFilme data={item}/>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
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
            </>
    );
}

const styles = StyleSheet.create({
    containerLista: {
        width: "100%",
        height: '100%',
        backgroundColor: "#000000",
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
        zIndex: 99
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
    containerLançamentos: {
        marginTop: 20,
        width: "100%",
        height: 240,
    },
    containerListaFilmes: {
        width: "100%",
        marginTop: 20,
    },
});