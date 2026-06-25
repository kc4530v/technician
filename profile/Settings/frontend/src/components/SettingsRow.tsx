import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  icon: string;
  label: string;
  // displayed value: 'On' / 'Off' / a string like 'English'
  value: string;
  // 'on' => green, 'off' => dark, 'neutral' => grey
  valueTone?: 'on' | 'off' | 'neutral';
  onPress?: () => void;
  testID?: string;
};

// One App Settings row: purple leading icon, label, a coloured value and a chevron.
const SettingsRow = ({ icon, label, value, valueTone = 'neutral', onPress, testID }: Props) => {
  const valueColor =
    valueTone === 'on' ? colors.success : valueTone === 'off' ? colors.textPrimary : colors.textSecondary;

  return (
    <TouchableOpacity testID={testID} activeOpacity={0.6} onPress={onPress} style={styles.row}>
      {icon === 'bullseye' ? (
        // thin ring + small centre dot (matches the design's target icon)
        <View style={styles.bullseye}>
          <View style={styles.bullseyeDot} />
        </View>
      ) : (
        <Ionicons name={icon as any} size={24} color={colors.primary} />
      )}
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
    marginLeft: 16,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 8,
  },
  bullseye: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bullseyeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});

export default SettingsRow;
