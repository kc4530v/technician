import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  title: string;
  // optional right-aligned edit action
  actionLabel?: string;
  onAction?: () => void;
  actionTestID?: string;
};

// Bold section title with an optional purple "✎ Edit ..." link on the right.
const SectionHeader = ({ title, actionLabel, onAction, actionTestID }: Props) => (
  <View style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {!!actionLabel && (
      <TouchableOpacity
        testID={actionTestID}
        onPress={onAction}
        style={styles.action}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons name="create-outline" size={15} color={colors.primary} />
        <Text style={styles.actionText}>{actionLabel}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 4,
  },
});

export default SectionHeader;
