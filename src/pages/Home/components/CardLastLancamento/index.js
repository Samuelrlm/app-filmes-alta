import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from "react-native";
import CardFilmeTop from "../../../components/CardFilmeTop";
import { ApiKey } from "../../../../services/apikey";
import NotaFilme from "../Detalhes/NotaFilme";

export default function CardLancamento(){
    const [filme, setFilme] = useState({});

    useEffect(() => {
        async function loadPopulares(){
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=pt-BR&page=1`
            );
            let json = await response.json();
            setFilme(json.results[8]);
        }
        loadPopulares();
    }, []);

    return(
        <ImageBackground
            source={{uri: `https://image.tmdb.org/t/p/original${filme.backdrop_path}`}}
            style={styles.container}
            borderRadius={10}
        >   
            <View style={styles.containerTitulo}>
                <Text style={styles.texto}>Melhor avaliação</Text>
            </View>
            <View style={styles.containerDados}>
                <CardFilmeTop data={filme}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerTitulo:{
        width:'100%',
        height:'15%',
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: '#00000064'
    },
    texto:{
        fontSize:17,
        color: '#fff',
        fontWeight:'bold'
    },
    container: {
        width: '100%',
        height: 250,
    },
    containerDados:{
        width:'100%',
        height:'85%',
        alignItems:'center',
        justifyContent:"center",
    },
    containerInfo:{
        width:'90%',
        height:'80%',
        backgroundColor: '#00000064',
        borderRadius:10,
    },
    imagem:{
        width:120,
        height:'100%',
        borderRadius:10,
    }

});