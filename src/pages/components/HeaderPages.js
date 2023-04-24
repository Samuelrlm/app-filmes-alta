import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight ?? 60;

export default function HeaderPages({ title, tipo}) {
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {tipo != 1 && (
               <View style={styles.left}>
                    <TouchableOpacity onPress={
                        handleGoBack
                    }>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
            )}
                
            <View style={[styles.right,
                tipo == 1 && {paddingEnd: 0}
                ]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: statusBarHeight + 22,
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingStart: 10,
        paddingEnd: 20,
        paddingBottom: 5,
    },
    left: {
        width: "10%",
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    right: {
        width: "90%",
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingEnd: 20,
    },
    title: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "bold",
    },
});

