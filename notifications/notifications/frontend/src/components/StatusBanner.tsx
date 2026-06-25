import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  label: string;
  icon?: string;
  // optional right-aligned text (e.g. a timer)
  right?: string;
};

// Soft green banner used for job states ("Reached Customer", "In Progress",
// "Work Completed"), optionally with a right-aligned timer.
const StatusBanner = ({ label, icon = 'checkmark-circle', right }: Props) => (
  <View style={styles.banner}>
    <Ionicons name={icon as any} size={18} color={colors.success} />
    <Text style={styles.label}>{label}</Text>
    {!!right && <Text style={styles.right}>{right}</Text>}
  </View>
);

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.successSoft,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: colors.success,
    marginLeft: 8,
  },
  right: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});

export default StatusBanner;
