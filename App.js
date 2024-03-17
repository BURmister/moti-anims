import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { useState, useEffect } from 'react';
import { View, useColorScheme, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

import { ActivityIndicator } from './src/components/ActivityIndicator';
import { DropTitles } from './src/components/DropTitles';

const _colors = {
   light: {
      background: '#fff',
      font: '#000',
      ui: '#000',
   },
   dark: {
      background: '#000',
      font: '#fff',
      ui: '#fff',
   },
};

const dropTitleList = [
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
   'drop title',
];

export default function App() {
   const [loading, setLoading] = useState(true);
   const _scheme = useColorScheme();

   NavigationBar.setBackgroundColorAsync(_scheme === 'light' ? _colors.light.background : _colors.dark.background);
   NavigationBar.setButtonStyleAsync(_scheme);

   useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
   }, []);

   return (
      <View style={[styles.container, { backgroundColor: _scheme === 'light' ? _colors.light.background : _colors.dark.background }]}>
         {loading ? <ActivityIndicator _colors={_colors} size={100} /> : <DropTitles _colors={_colors} dropTitles={dropTitleList} />}
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
