import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRouter from './Config/Routes';
import FlashMessage from 'react-native-flash-message';
import { MenuProvider } from 'react-native-popup-menu';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <>

      <View style={{ flex: 1 }}>
        <StripeProvider
          publishableKey="pk_test_51Ob2QEJMNHDRBfcJPQd3a0I3qcoctva1EqA50onKOk8WfdClRU4OkJKXID0vcAc2BtJcRyj4URs4nKu7U2bNshm000l7VHLLaK"
        // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
        >
          <MenuProvider>
            <AppRouter />
            <FlashMessage position='bottom' />
          </MenuProvider>
        </StripeProvider>
      </View>
    </>
  );
}
