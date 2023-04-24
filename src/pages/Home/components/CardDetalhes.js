import React, {useState, useEffect} from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View, Image, StyleSheet, ImageBackground, ScrollView, FlatList } from "react-native";
import { ApiKey } from "../../../services/apikey";
import ListOndeAssistir from "./ListOndeAssistir";
import CardElenco from "./CardElenco";


export default function CardDetalhes({ data }) {
    const [detalhes, setDetalhes] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        async function loadDetalhes() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/${data.id}?api_key=${ApiKey}&language=pt-BR`
            );
            let json = await response.json();
            setDetalhes(json);
            setGenres(json.genres);
        }
        loadDetalhes();
    }, []);
    console.log(detalhes.id);

    //pega o tempo de duração do filme e converte para horas e minutos e segundos para finar no formato 1h 30min
    const duracao = detalhes.runtime;
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;
    

    return (
        <View style={styles.container}>
            <View style={styles.containerScrroll}>
                <ScrollView 
                    key={data.id}
                    showsVerticalScrollIndicator={false}
                    style={styles.containerMain}>
                    <ImageBackground
                        style={styles.containerImagem}
                        borderTopLeftRadius={10}
                        borderTopRightRadius={10}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }}
                        >
                        <View style={styles.containertitulo}>
                            <Text style={styles.titulo}>{data.title}</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.containerTagline}>
                        <Text style={styles.tagline}>{detalhes.tagline}</Text>
                    </View>
                    <View style={styles.containerSinopse}>
                        <Text style={styles.subtitulo}>Sinopse</Text>
                        <ScrollView 
                            showsVerticalScrollIndicator={true}
                            key={data.id}
                            style={styles.containerTexto}>
                            <Text style={styles.texto}>{data.overview}</Text>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.containerObs}>
                        <View style={styles.leftObs}>
                            <Text style={styles.tituloObs}>Gênero</Text>
                            <View style={styles.containerGeneros}>
                                {genres.map((item) => {
                                    return(
                                        <View style={styles.containerGenero}>
                                            <Text style={styles.genero}>{item.name}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={styles.rightObs}>
                            <View style={styles.containerTempo}>
                                <Feather name="clock" size={24} color="#FFF" />
                                <Text style={styles.genero}>{horas}h {minutos} min</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerMidias}>
                        <Text style={styles.subtitulo}>Onde assistir</Text>
                        <ListOndeAssistir data={data}/>
                    </View>
                    <View style={styles.containerElenco}>
                        <Text style={styles.subtitulo}>Elenco Principal</Text>
                        <CardElenco data={data}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    containerScrroll:{
        width: "100%",
        height: "93%",
        alignItems: "center",
    },
    containerMain: {
        width: "88%",
        backgroundColor: "#1A1A1A",
        borderRadius: 10,
    },
    containerImagem: {
        width: "100%",
        height: 200,
        alignItems: "center",
        borderRadius: 10,
    },
    containertitulo: {
        width: "100%",
        height: 30,
        backgroundColor: "#00000074",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center",
    },
    titulo: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    containerTagline: {
        width: "100%",
        paddingStart: 5,
        paddingEnd: 5,
        minHeight:30,
        maxHeight:45,
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    tagline:{
        color: "#9B9B9B",
        fontSize: 14,
        fontStyle: "italic",
        textAlign: "center",
    },
    containerSinopse: {
        width: "100%",
        paddingTop: 5,
        paddingStart: 5,
        paddingEnd: 5,
    },
    subtitulo: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    containerTexto: {
        width: "100%",
        minHeight: 100,
        maxHeight: 150,
        marginTop: 5,
        paddingEnd: 5,
    },
    texto: {
        color: "#FFF",
        fontSize: 15,
    },
    containerMidias: {
        width: "100%",
        paddingStart: 5,
        marginTop: 10,
    },
    containerGeneros: {
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 5,        
    },
    containerObs: {
        width: "95%",
        paddingStart: 10,
        marginTop: 10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    tituloObs: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
    },
    containerGenero: {
        width: "auto",
        paddingStart: 10,
        paddingEnd: 10,
        height: 30,
        backgroundColor: "#00000074",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 5,
    },
    genero: {
        color: "#FFF",
        fontSize: 14,
        textAlign: "center",
    },
    leftObs: {
        width: "78%",
        justifyContent: "center",
    },
    rightObs: {
        width: "22%",
        alignItems: "center",
    },
    containerTempo: {
        marginTop: 5,
        gap: 5,
        marginLeft: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    containerElenco: {
        width: "100%",
        paddingStart: 5,
        paddingEnd: 5,
        marginTop: 10,
    },
}); 