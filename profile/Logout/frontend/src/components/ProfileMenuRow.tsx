import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  icon: string;
  label: string;
  value?: string;
  valueAccent?: boolean;
  danger?: boolean;
  showChevron?: boolean;
  onPress?: () => void;
  testID?: string;
};

// One tappable row in the profile menu: leading icon, label, an optional
// right-aligned value and a chevron. `danger` renders the red "Logout" row.
const ProfileMenuRow = ({
  icon,
  label,
  value,
  valueAccent,
  danger,
  showChevron = true,
  onPress,
  testID,
}: Props) => {
  const tint = danger ? colors.danger : colors.textPrimary;

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.row}
    >
      <Ionicons name={icon as any} size={22} color={danger ? colors.danger : colors.textSecondary} />
      <Text style={[styles.label, { color: tint }]}>{label}</Text>

      <View style={styles.right}>
        {!!value && (
          <Text style={[styles.value, valueAccent && styles.valueAccent]}>{value}</Text>
        )}
        {showChevron && !danger && (
          <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  label: {
    flex: 1,
    fontSize: 15,
    marginLeft: 14,
    fontWeight: '500',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 6,
  },
  valueAccent: {
    color: colors.success,
    fontWeight: '600',
  },
});

export default ProfileMenuRow;
