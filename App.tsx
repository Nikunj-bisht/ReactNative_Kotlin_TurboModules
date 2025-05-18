/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {Button, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NativeSnackbar from './specs/NativeSnackbar';
import NativeClearStorage from './specs/NativeClearStorage';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const safePadding = '5%';
  const callNativeMethod = () => {
    NativeSnackbar.showSnackbar('Hey there!');
  };
  const clearStorage = () => {
    NativeClearStorage.clearStorage();
  };

  return (
    <View style={backgroundStyle}>
      <Button title={'Show Snackbar'} onPress={callNativeMethod} />
      <Button title={'Clear Storage'} onPress={clearStorage} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
