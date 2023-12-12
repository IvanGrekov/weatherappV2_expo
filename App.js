import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';

import { THEME, STYLE_VARIABLES } from './src/constants/style.constants';
import Routes from './src/routes';
import { MyLocationStoreProvider } from './src/stores/my-location';
import { getIsWeb } from './src/utils/expo.utils';

const isWeb = getIsWeb();

export default function App() {
    const content = (
        <>
            <StatusBar
                style="auto"
                barStyle="dark-content"
                backgroundColor={STYLE_VARIABLES.white}
            />

            <Box style={isWeb ? styles.appWrapper : styles.appMobileWrapper}>
                <Routes />
            </Box>
        </>
    );

    return (
        <NavigationContainer>
            <NativeBaseProvider theme={THEME}>
                <MyLocationStoreProvider>
                    {isWeb ? <View style={styles.container}>{content}</View> : <>{content}</>}
                </MyLocationStoreProvider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appMobileWrapper: {
        flex: 1,
        paddingTop: STYLE_VARIABLES.smPadding,
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
    appWrapper: {
        width: 400,
        height: 750,
        backgroundColor: STYLE_VARIABLES.bgColor,
        borderRadius: 25,
        borderWidth: 7,
        borderColor: STYLE_VARIABLES.black,
        overflow: 'hidden',
    },
});
