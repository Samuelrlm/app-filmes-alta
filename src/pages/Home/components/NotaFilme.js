import CircularProgress from 'react-native-circular-progress-indicator';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardFilme({ data }) {
    const [progress, setProgress] = useState(0);

    return (
        <View style={styles.container}>
            <CircularProgress
                value={progress}
                radius={120}
                duration={2000}
                progressValueColor={'#ecf0f1'}
                maxValue={200}
                title={'KM/H'}
                titleColor={'white'}
                titleStyle={{fontWeight: 'bold'}}
            />
        </View>
    );

}