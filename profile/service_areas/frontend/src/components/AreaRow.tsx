import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  name: string;
  distance: string;
  onPress?: () => void;
  showDivider?: boolean;
  testID?: string;
};

// One service-area row: name, distance and a red target (bullseye) marker.
const AreaRow = ({ name, distance, onPress, showDivider = true, testID }: Props) => (
  <TouchableOpacity
    testID={testID}
    activeOpacity={0.6}
    onPress={onPress}
    style={[styles.row, showDivider && styles.divider]}
  >
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.distance}>{distance}</Text>
    <View style={styles.target}>
      <View style={styles.targetDot} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  distance: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 14,
  },
  target: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger,
  },
});

export default AreaRow;
