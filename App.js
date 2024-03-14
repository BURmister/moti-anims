import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme, StyleSheet } from 'react-native';
import { useRef } from 'react';

import { MotiView } from 'moti';

export default function App() {
   const _scheme = useColorScheme();
   const colors = useRef({
      background: _scheme === 'light' ? '#fff' : '#000',
      font: _scheme === 'light' ? '#000' : '#fff',
      ui: _scheme === 'light' ? '#000' : '#fff',
   });

   return (
      <View style={[styles.container, { backgroundColor: colors.current.background }]}>
         <MotiView
            from={{
               width: 100,
               height: 100,
               borderRadius: 100 / 2,
               borderWidth: 0,
               opacity: 0,
            }}
            animate={{
               width: 100 + 20,
               height: 100 + 20,
               borderRadius: (100 + 20) / 2,
               borderWidth: 100 / 10,
               opacity: 1,
            }}
            transition={{
               type: 'timing',
               duration: 1000,
               loop: true,
            }}
            style={{
               width: 100,
               height: 100,
               borderRadius: 100 / 2,
               borderWidth: 100 / 10,
               borderColor: colors.current.ui,
               shadowColor: colors.current.ui,
               shadowOffset: { width: 0, height: 0 },
               shadowOpacity: 1,
               shadowRadius: 10,
            }}></MotiView>
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
