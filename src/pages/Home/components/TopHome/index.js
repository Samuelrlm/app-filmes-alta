import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar }  from "react-native";
import { ApiKey } from "../../../../services/apikey";

const StatusBarHeight = StatusBar.currentHeight;

export default function TopHome(){
    const [filme, setFilme] = useState({});
    useEffect(() => {
        async function loadPopulares(){
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`
            );
            let json = await response.json();
            setFilme(json.results[0]);
        }
        loadPopulares();
    }, []);

    return(
        <ImageBackground
            source={{uri: `https://image.tmdb.org/t/p/original${filme.backdrop_path}`}}
            style={styles.container}
        >
            <View style={styles.containerTags}>
                <TouchableOpacity style={styles.tags}>
                    <Text style={styles.textoTags}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tags}>
                    <Text style={styles.textoTags}>Series</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tags}>
                    <Text style={styles.textoTags}>Programas de TV</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        paddingBottom: 20,
    },
    containerTags:{
        width: '100%',
        height: StatusBarHeight + 35,
        flexDirection: 'row',
        backgroundColor: '#00000064',
        alignItems: 'flex-end',
    },
    tags:{
        width: '33.33%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    textoTags:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});