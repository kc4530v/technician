import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  value: boolean;
  onValueChange: (v: boolean) => void;
  testID?: string;
};

// iOS-style pill toggle, drawn manually so it looks identical on web/Android/iOS.
const Toggle = ({ value, onValueChange, testID }: Props) => (
  <TouchableOpacity
    testID={testID}
    activeOpacity={0.85}
    onPress={() => onValueChange(!value)}
    style={[styles.track, value ? styles.trackOn : styles.trackOff]}
  >
    <View style={[styles.knob, value ? styles.knobOn : styles.knobOff]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 28,
    borderRadius: 14,
    padding: 3,
    justifyContent: 'center',
  },
  trackOn: {
    backgroundColor: '#22C55E',
    alignItems: 'flex-end',
  },
  trackOff: {
    backgroundColor: '#D1D5DB',
    alignItems: 'flex-start',
  },
  knob: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
  },
  knobOn: {},
  knobOff: {},
});

export default Toggle;
