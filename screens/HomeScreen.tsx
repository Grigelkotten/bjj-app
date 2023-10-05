import {View, Text, StyleSheet, Button, Pressable, ImageBackground} from 'react-native';
import { RootStackParamList } from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation} : Props) {

    const image = require('../assets/logo.png');
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='contain' style={styles.image} blurRadius={2}>
        <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('ScoreBoard')}>
            <Text style={styles.button}>Score Board</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Rules')}>
            <Text style={styles.button}>Rules</Text>
        </Pressable>
        </View>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#d0d4cf',
        padding: 5,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 18, 
        minWidth: 120
    }, 
    image: {
        flex: 1,
        justifyContent: 'center'
    }
  });