import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { RootStackParamList } from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';

type Props = NativeStackScreenProps<RootStackParamList, 'ScoreBoard'>;

export default function DetailsScreen({navigation, route} : Props) {
    useKeepAwake();

    const [firstCount, SetFirstCount] = useState(0);
    const [secondCount, SetSecondCount] = useState(0);

    const resetScores = () => {
        SetFirstCount(0);
        SetSecondCount(0);
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <Pressable onPress={() => SetFirstCount(firstCount + 1)}>
            <Text style={styles.firstButton}>{firstCount}</Text>
        </Pressable>
        <Pressable onPress={() => SetSecondCount(secondCount + 1)}>
            <Text style={styles.secondButton}>{secondCount}</Text>
        </Pressable>
        </View>
        <View>
            <Pressable onPress={resetScores}>
                <Text style={styles.scoreButton}>Reset Scores</Text>
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
      justifyContent: 'center',
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row', 
        gap: 30
    },
    firstButton: {
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        fontSize: 90, 
        padding: 20,
        minWidth: 140,
        minHeight: 220,
        borderRadius: 20
    }, 
    secondButton: {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        fontSize: 90,
        padding: 20,
        minWidth: 140,
        minHeight: 220,
        borderRadius: 20
    },
    scoreButton: {
        backgroundColor: '#d0d4cf',
        padding: 5,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30, 
        fontSize: 18
    }
  });