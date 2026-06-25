import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  checked: boolean;
  onToggle: () => void;
  testID?: string;
};

// Purple rounded checkbox with a white tick when checked.
const Checkbox = ({ checked, onToggle, testID }: Props) => (
  <TouchableOpacity
    testID={testID}
    activeOpacity={0.7}
    onPress={onToggle}
    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    style={[styles.box, checked ? styles.boxChecked : styles.boxUnchecked]}
  >
    {checked && <Ionicons name="checkmark" size={16} color={colors.white} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  box: {
    width: 24,
    height: 24,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.primary,
  },
  boxUnchecked: {
    borderWidth: 1.5,
    borderColor: colors.textTertiary,
  },
});

export default Checkbox;
