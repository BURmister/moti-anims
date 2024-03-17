import { Fragment } from 'react';
import { View, Text, useColorScheme, Dimensions } from 'react-native';
import { MotiView } from 'moti';
import { getRandom } from '../hooks/useMath';

const { height, width } = Dimensions.get('screen');

const DropTitle = ({ title, _colors }) => {
   const _scheme = useColorScheme();

   return (
      <MotiView
         from={{ transform: [{ translateY: -height * 0.2 }, { rotate: '0deg' }] }}
         animate={{ transform: [{ translateY: height + height * 0.2 }, { rotate: `${getRandom(-60, 60)}deg` }] }}
         transition={{
            type: 'timing',
            duration: getRandom(9, 13) * 1000,
            delay: getRandom(0, 10) * 1000,
            loop: true,
            repeatReverse: false,
         }}
         style={{ transform: [{ translateY: -height * 0.2 }, { rotate: '0deg' }] }}>
         <Text style={{ color: _scheme === 'light' ? _colors.light.font : _colors.dark.font }}>{title} </Text>
      </MotiView>
   );
};

const Overlay = ({ dropTitles, _colors }) => {
   return (
      <View style={{ paddingHorizontal: 8, flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
         {dropTitles.map((item, _index) => (
            <Fragment key={_index}>
               <DropTitle title={item} _colors={_colors} />
            </Fragment>
         ))}
      </View>
   );
};

export const DropTitles = ({ dropTitles, _colors }) => {
   if (!dropTitles) return;
   return <Overlay dropTitles={dropTitles} _colors={_colors} />;
};
