import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  value: boolean;
  onValueChange: (v: boolean) => void;
  // colour of the track when on (defaults to green)
  onColor?: string;
  testID?: string;
};

// iOS-style pill toggle, drawn manually so it looks identical on web/Android/iOS.
const Toggle = ({ value, onValueChange, onColor = '#22C55E', testID }: Props) => (
  <TouchableOpacity
    testID={testID}
    activeOpacity={0.85}
    onPress={() => onValueChange(!value)}
    style={[
      styles.track,
      value ? { backgroundColor: onColor, alignItems: 'flex-end' } : styles.trackOff,
    ]}
  >
    <View style={styles.knob} />
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
});

export default Toggle;
