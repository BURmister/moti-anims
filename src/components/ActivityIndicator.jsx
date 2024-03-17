import { useColorScheme } from 'react-native';
import { MotiView } from 'moti';

export const ActivityIndicator = ({ _colors, size }) => {
   const _scheme = useColorScheme();

   return (
      <MotiView
         from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 0,
            opacity: 0,
         }}
         animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            opacity: 1,
         }}
         transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
         }}
         style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: _scheme === 'light' ? _colors.light.ui : _colors.dark.ui,
            shadowColor: _scheme === 'light' ? _colors.light.ui : _colors.dark.ui,
            shadowOpacity: 1,
            shadowOffset: { width: 10, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            backgroundColor: _scheme === 'light' ? _colors.light.background : _colors.dark.background,
         }}></MotiView>
   );
};
