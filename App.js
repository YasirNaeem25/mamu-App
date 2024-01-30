import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRouter from './Config/Routes';
import FlashMessage from 'react-native-flash-message';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <>

      <View style={{ flex: 1 }}>
        <MenuProvider>
          <AppRouter />
          <FlashMessage position='bottom' />
        </MenuProvider>
      </View>
    </>
  );
}
