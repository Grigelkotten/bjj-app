import { NavigationContainer } from '@react-navigation/native';
import {NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import ScoreBoardScreen from './screens/ScoreBoardScreen';
import RulesScreen from './screens/RulesScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Home: undefined;
  ScoreBoard: undefined;
  Rules: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
    <NavigationContainer onReady={onLayoutRootView}>
      <StatusBar style="auto"  />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ title: 'Borås Grappling Academy', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} 
        options={{ title: 'Score Board', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Rules" component={RulesScreen} 
        options={{ title: 'Rules', headerTitleAlign: 'center'}}/>
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
