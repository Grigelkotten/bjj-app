import { View, Text, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import rules from '../data/rules.json';

type Props = NativeStackScreenProps<RootStackParamList, 'Rules'>;

export default function RulesScreen({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContent}>
                {rules.map((item) => (
                    <View key={item.id} style={styles.scrollItem}>
                        <Text style={styles.title}>{item.title}</Text>
                        {item.points > 0 && (
                            <Text style={styles.points}>Points: {item.points}</Text>
                        )}
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
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
    scrollViewContent: {
        padding: 20,
    },
    scrollItem: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 8,
        paddingBottom: 4,
        fontFamily: 'Montserrat-Regular'
    }, 
    points: {
        fontWeight: 'bold',
        fontSize: 17,
        padding: 8,
    }, 
    description: {
        fontSize: 16,
        marginBottom: 30,
        marginTop: 10,
        fontFamily: 'Montserrat-Regular'
    }
});