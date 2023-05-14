import CircularProgress from 'react-native-circular-progress-indicator';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function NotaFilme({ data }) {
    const nota = data.vote_average * 10;

    let colorActive 
    let colorInactive
    
    if (nota >= 70) {
        colorActive = "#05DA5A"
        colorInactive = "#025825"
    } else if (nota >= 50) {
        colorActive = "#FFC300"
        colorInactive = "#7F5F00"
    } else {
        colorActive = "#FF5733"
        colorInactive = "#7F2B1C"
    }

    return (
        <View style={styles.container}>
            <CircularProgress
               value={nota}
               radius={30}
               duration={1500}
               progressValueColor={colorActive}
               maxValue={100}
               valueSuffix="%"
               activeStrokeWidth={5}
               inActiveStrokeWidth={5}
               circleBackgroundColor='#000000'
               activeStrokeColor={colorActive}
               inActiveStrokeColor={colorInactive}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:60,
        height:60,
        borderRadius: 30,
    },
});