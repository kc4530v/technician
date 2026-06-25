import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PhoneStatusBar from './PhoneStatusBar';
import { colors } from '../constants/colors';

type Props = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  showBell?: boolean;
  badgeCount?: number;
  showMenu?: boolean;
};

// Purple header with back chevron, a title + optional subtitle, and an optional
// notification bell (with badge) and overflow menu on the right.
const TitleHeader = ({ title, subtitle, onBack, showBell = true, badgeCount = 1, showMenu = true }: Props) => (
  <View testID="title-header" style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <PhoneStatusBar />
    <View style={styles.row}>
      <TouchableOpacity testID="header-back" onPress={onBack} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>
      <View style={styles.titleWrap}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>}
      </View>
      {showBell && (
        <TouchableOpacity style={styles.iconBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="notifications-outline" size={22} color={colors.white} />
          {badgeCount > 0 && (
            <View style={styles.badge}><Text style={styles.badgeText}>{badgeCount}</Text></View>
          )}
        </TouchableOpacity>
      )}
      {showMenu && (
        <TouchableOpacity style={styles.iconBtn} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Ionicons name="ellipsis-vertical" size={22} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingBottom: 18,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 2 }, shadowRadius: 6 },
      android: { elevation: 4 },
    }),
  },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  backBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center', marginRight: 6 },
  titleWrap: { flex: 1 },
  title: { color: colors.white, fontSize: 19, fontWeight: '700' },
  subtitle: { color: 'rgba(255,255,255,0.8)', fontSize: 12.5, marginTop: 2 },
  iconBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  badge: { position: 'absolute', top: -2, right: -3, minWidth: 15, height: 15, borderRadius: 8, backgroundColor: colors.danger, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 3, borderWidth: 1.5, borderColor: colors.primary },
  badgeText: { color: colors.white, fontSize: 8.5, fontWeight: '700' },
});

export default TitleHeader;
