import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';
import { Notif, tabs, today, yesterday } from '../constants/notificationsData';

const NotifCard = ({ items }: { items: Notif[] }) => (
  <View style={styles.card}>
    {items.map((n, i) => (
      <View key={n.id} style={[styles.row, i < items.length - 1 && styles.divider]}>
        <Image source={n.icon} style={styles.iconImg} resizeMode="contain" />
        <View style={styles.body}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{n.title}</Text>
            {!!n.time && <Text style={styles.time}>{n.time}</Text>}
          </View>
          <Text style={styles.desc}>{n.desc}</Text>
        </View>
        {n.unread && <View style={styles.unreadDot} />}
      </View>
    ))}
  </View>
);

const NotificationsScreen = () => {
  const router = useRouter();
  const [active, setActive] = useState('All');

  return (
    <SafeAreaView testID="notifications-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.headRow}>
            <Text style={styles.heading}>Notifications</Text>
            <TouchableOpacity><Text style={styles.markRead}>Mark all as read</Text></TouchableOpacity>
          </View>

          <View style={styles.tabs}>
            {tabs.map((t) => {
              const on = t === active;
              return (
                <TouchableOpacity key={t} testID={`notif-tab-${t.toLowerCase()}`} activeOpacity={0.8} onPress={() => setActive(t)} style={[styles.tab, on && styles.tabOn]}>
                  <Text style={[styles.tabText, on && styles.tabTextOn]}>{t}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.section}>Today</Text>
          <NotifCard items={today} />

          <Text style={styles.section}>Yesterday</Text>
          <NotifCard items={yesterday} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 },
  headRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  heading: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  markRead: { fontSize: 13, fontWeight: '600', color: colors.primary },
  tabs: { flexDirection: 'row', gap: 10, marginTop: 14 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white },
  tabOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontSize: 13, fontWeight: '600', color: colors.textSecondary },
  tabTextOn: { color: colors.white },
  section: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 14 },
  row: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 14 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  iconImg: { width: 38, height: 38, marginTop: 2 },
  body: { flex: 1, marginLeft: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { flex: 1, fontSize: 14.5, fontWeight: '700', color: colors.textPrimary },
  time: { fontSize: 12, color: colors.textTertiary, marginLeft: 8 },
  desc: { fontSize: 13, color: colors.textSecondary, marginTop: 3, lineHeight: 18 },
  unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.primary, marginLeft: 8, marginTop: 6 },
});

export default NotificationsScreen;
