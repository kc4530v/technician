import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PhoneStatusBar from './PhoneStatusBar';
import { LOGIN } from '../../constants/testIds';
import { colors } from '../constants/colors';

const logo = require('../../assets/images/company-logo.png');

type Props = {
  name: string;
  status?: string;
  verified?: boolean;
  online?: boolean;
  onBack?: () => void;
  onMenu?: () => void;
  // optional notification bell with an unread badge
  showBell?: boolean;
  badgeCount?: number;
  onBell?: () => void;
};

// Purple top bar used across the app — circular company logo with an online
// dot, the company name with a verified badge, an "Online" sub-label, plus a
// back chevron, an optional notification bell and an overflow (kebab) menu.
const CompanyHeader = ({
  name,
  status = 'Online',
  verified = true,
  online = true,
  onBack,
  onMenu,
  showBell = false,
  badgeCount,
  onBell,
}: Props) => (
  <View testID="company-header" style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <PhoneStatusBar />

    <View style={styles.row}>
      <TouchableOpacity
        testID={LOGIN.backButton}
        onPress={onBack}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        style={styles.iconBtn}
      >
        <Ionicons name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>

      <View style={styles.logoWrap}>
        <Image source={logo} style={styles.logo} resizeMode="cover" />
        {online && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.titleWrap}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          {verified && (
            <Ionicons
              name="checkmark-circle"
              size={18}
              color={colors.green}
              style={styles.verified}
            />
          )}
        </View>
        <Text style={styles.status}>{status}</Text>
      </View>

      {showBell && (
        <TouchableOpacity
          testID="company-header-bell"
          onPress={onBell}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          style={styles.iconBtn}
        >
          <Ionicons name="notifications-outline" size={22} color={colors.white} />
          {badgeCount != null && badgeCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badgeCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}

      <TouchableOpacity
        testID={LOGIN.menuButton}
        onPress={onMenu}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        style={styles.iconBtn}
      >
        <Ionicons name="ellipsis-vertical" size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  </View>
);

const LOGO_SIZE = 46;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
      android: { elevation: 4 },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  iconBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrap: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    marginHorizontal: 8,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: '#0A0A0E',
  },
  onlineDot: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.green,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titleWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    flexShrink: 1,
  },
  verified: {
    marginLeft: 5,
  },
  status: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 13,
    marginTop: 2,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -3,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  badgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
  },
});

export default CompanyHeader;
