import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import { RootStackParamList } from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation} : Props) {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Pressable onPress={() => navigation.navigate('ScoreBoard')}>
            <Text style={styles.button}>Score Board</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#d0d4cf',
        padding: 5,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center'
    }
  });