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
  return (
    <View style={backgroundStyle}>
      <Button title={'Hello'} onPress={callNativeMethod} />
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
