import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  value: string;
  onPress?: () => void;
  testID?: string;
};

// A bordered time field that opens a picker — shown as the value plus a chevron.
const TimeDropdown = ({ value, onPress, testID }: Props) => (
  <TouchableOpacity testID={testID} activeOpacity={0.7} onPress={onPress} style={styles.box}>
    <Text style={styles.text}>{value}</Text>
    <Ionicons name="chevron-down" size={15} color={colors.textTertiary} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  text: {
    fontSize: 13.5,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});

export default TimeDropdown;
