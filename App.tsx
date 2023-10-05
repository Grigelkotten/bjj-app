import { NavigationContainer } from '@react-navigation/native';
import {NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ScoreBoardScreen from './screens/ScoreBoardScreen';

export type RootStackParamList = {
  Home: undefined;
  ScoreBoard: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar style="auto"  />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Borås Grappling Academy', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} 
        options={{ title: 'Score Board', headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
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
