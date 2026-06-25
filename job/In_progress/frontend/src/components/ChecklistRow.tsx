import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

export type ChecklistState = 'done' | 'active' | 'pending';

type Props = {
  label: string;
  state?: ChecklistState;
  // optional right-aligned status text (Completed / In Progress / Pending)
  statusText?: string;
};

// A checklist line with a leading status circle and optional right-aligned text.
const ChecklistRow = ({ label, state = 'done', statusText }: Props) => {
  const statusColor =
    state === 'done' ? colors.success : state === 'active' ? colors.primary : colors.textTertiary;

  return (
    <View style={styles.row}>
      {state === 'done' && <Ionicons name="checkmark-circle" size={22} color={colors.success} />}
      {state === 'active' && <Ionicons name="ellipse" size={22} color={colors.primary} />}
      {state === 'pending' && <Ionicons name="ellipse-outline" size={22} color={colors.border} />}
      <Text style={[styles.label, state === 'pending' && styles.labelPending]}>{label}</Text>
      {!!statusText && <Text style={[styles.status, { color: statusColor }]}>{statusText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
  },
  label: {
    flex: 1,
    fontSize: 14.5,
    color: colors.textPrimary,
    fontWeight: '500',
    marginLeft: 10,
  },
  labelPending: {
    color: colors.textSecondary,
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
  },
});

export default ChecklistRow;
