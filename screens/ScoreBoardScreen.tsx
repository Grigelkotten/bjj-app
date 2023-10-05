import {View, Text, StyleSheet, Button} from 'react-native';
import { RootStackParamList } from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ScoreBoard'>;

export default function DetailsScreen({navigation, route} : Props) {
    return (
      <View style={styles.container}>
        <Text>Score Board</Text>
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
  });