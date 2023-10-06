import { View, Text, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import position from '../data/position.json';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Sparring'>;

export default function SparringScreen({ navigation, route }: Props) {

    const [currentPosition, setCurrentPosition] = useState('Ready');

    const generateRandomPosition = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * position.length);
        } while (position[randomIndex].name === currentPosition);

        const newPosition = position[randomIndex].name;
        setCurrentPosition(newPosition);
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.positionText}>{currentPosition}</Text>
            </View>
            <View>
                <Pressable onPress={generateRandomPosition}>
                    <Text style={styles.button}>Generate Position</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    positionText: {
        backgroundColor: '#a3a2a2',
        fontFamily: 'Montserrat-Regular',
        fontSize: 30,
        padding: 30,
        minWidth: 320,
        textAlign: 'center',
        borderRadius: 20
    },
    button: {
        backgroundColor: '#d0d4cf',
        padding: 5,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 18,
        minWidth: 170,
        fontFamily: 'Montserrat-Regular'
    },
});