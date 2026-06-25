import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PhoneStatusBar from './PhoneStatusBar';
import { colors } from '../constants/colors';

type Props = {
  title: string;
  onBack?: () => void;
  backTestID?: string;
  // optional right-aligned text action (e.g. "Save")
  rightLabel?: string;
  onRight?: () => void;
  rightTestID?: string;
};

// Purple top bar: mock phone status bar, then a back chevron, a title and an
// optional right text action.
const ScreenHeader = ({
  title,
  onBack,
  backTestID = 'screen-back-button',
  rightLabel,
  onRight,
  rightTestID,
}: Props) => (
  <View testID="screen-header" style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <PhoneStatusBar />
    <View style={styles.row}>
      <TouchableOpacity
        testID={backTestID}
        onPress={onBack}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        style={styles.backBtn}
      >
        <Ionicons name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.spacer} />
      {!!rightLabel && (
        <TouchableOpacity
          testID={rightTestID}
          onPress={onRight}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={styles.rightLabel}>{rightLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingBottom: 20,
    paddingHorizontal: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
      android: { elevation: 4 },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  spacer: {
    flex: 1,
  },
  rightLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScreenHeader;
