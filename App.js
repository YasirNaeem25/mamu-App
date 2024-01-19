import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRouter from './Config/Routes';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <>
    <View style={{flex:1}}>
      <AppRouter />
      <FlashMessage position='top' />
      </View>
    </>
  );
}
