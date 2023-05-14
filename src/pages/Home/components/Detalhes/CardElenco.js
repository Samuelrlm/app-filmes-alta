import React,{useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { ApiKey } from "../../../../services/apikey";

export default function CardElenco({ data }) {
    const [elenco, setElenco] = useState([]);
    useEffect(() => {
        async function loadElenco() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/${data.id}/credits?api_key=${ApiKey}&language=pt-BR`
            );
            let json = await response.json();
            setElenco(json.cast);
        }
        loadElenco();
    }, []);

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={elenco}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
                        style={styles.imagem}
                    />
                    <View style={styles.containerName}>
                        <Text style={styles.nome}>{item.name}</Text>
                    </View>
                    <View style={styles.containerPerssonagem}>
                        <Text style={styles.personagem}>{item.character}</Text>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 150,
        backgroundColor: "#000000",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
    },
    imagem: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerName: {
        paddingStart: 5,
        paddingEnd: 5,
        width: '100%',
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

    },
    nome: { 
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 5,
        textAlign: "center",
    },
    containerPerssonagem: {
        width: '100%',
        height: 24,
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    personagem: {
        color: "#FFF",
        fontSize: 11,
        fontStyle: "italic",
        textAlign: "center",
    },
});

