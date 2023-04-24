import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { ApiKey } from "../../../services/apikey";

export default function ListOndeAssistir({ data}) {
    const [dados, setDados] = useState([]);
    
    useEffect(() => {
        async function loadDados() {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/${data.id}/watch/providers?api_key=${ApiKey}`
            );
            let json = await response.json();
            setDados(json.results.BR);
        }
        loadDados();
    }, []);


    return (
        //sedados for undefined, retorna null se não retorna o flatlist
        !dados ? <Text style={styles.texto}>Sem mídias disponives para o brasil</Text> :

        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dados.flatrate}
            keyExtractor={(item) => item.provider_id.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.logo_path}` }}
                        style={styles.imagem}
                    />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 5,
        marginLeft: 10,
    },
    imagem: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    texto: {
        color: "#FFF",
        fontSize: 13,
        fontStyle: "italic",
        marginTop: 10,
        textAlign: "center",
    },
});
