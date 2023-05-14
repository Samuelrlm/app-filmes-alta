import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import NotaFilme from "../Home/components/Detalhes/NotaFilme";
import Trailer from "../Home/components/Detalhes/Trailer";

export default function CardFilmeTop({data}){
    //pegar a data de lançamento e formatar para o tipo dd/mm/aaaa
    const dataLancamento = data.release_date

    return(
        <View style={styles.container}>
            <View style={styles.containerFilme}>
                <Image 
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/original${data.poster_path}`}}
                />
                <View style={styles.containerDireito}>
                    <View style={styles.containerMain}>
                        <View>
                            <Text style={styles.titulo}>{data.title}</Text>
                            <Text style={styles.descricaoLancamento}>{dataLancamento}</Text>
                        </View>
                        <View style={styles.containerNota}>
                            <NotaFilme data={data} />
                            <View style={styles.ContainerTexto}>
                                <Text style={styles.textoAvaliacao}>Avaliação dos usuários</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    containerFilme: {
        width: '90%',
        height: '100%',
        //backgroundColor transparente levemente ofuscado
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerNota: {
        width: '80%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 30,
    },
    ContainerTexto: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        paddingStart: 10,
    },
    textoAvaliacao: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 5,
    },
    containerDireito: {
        width: '70%',
        height: '100%',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    containerMain: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    titulo: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    descricaoLancamento: {
        color: '#DCDCDC',
        fontStyle: 'italic',
        fontSize: 14,
    },
});
