import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import TitleHeader from '../components/TitleHeader';
import { colors } from '../constants/colors';

type Status = 'Pending' | 'Approved' | 'Rejected';
type Req = { id: string; type: string; typeColor: string; dates: string; days: string; status: Status };

const requests: Req[] = [
  { id: 'REQ-25874', type: 'Casual Leave', typeColor: '#D97706', dates: '26 Jun 2026 - 27 Jun 2026', days: '2 Days', status: 'Pending' },
  { id: 'REQ-25860', type: 'Sick Leave', typeColor: colors.success, dates: '21 May 2026', days: '1 Day', status: 'Approved' },
  { id: 'REQ-25841', type: 'Emergency Leave', typeColor: colors.danger, dates: '10 May 2026', days: '1 Day', status: 'Rejected' },
  { id: 'REQ-25810', type: 'Casual Leave', typeColor: '#D97706', dates: '5 May 2026 - 6 May 2026', days: '2 Days', status: 'Approved' },
];

const statusStyle: Record<Status, { bg: string; fg: string }> = {
  Pending: { bg: colors.warningSoft, fg: '#B45309' },
  Approved: { bg: colors.successSoft, fg: colors.success },
  Rejected: { bg: '#FDECEC', fg: colors.danger },
};

const tabs = ['All', 'Pending', 'Approved', 'Rejected'] as const;

const MyLeaveRequestsScreen = () => {
  const router = useRouter();
  const [active, setActive] = useState<(typeof tabs)[number]>('All');

  const list = active === 'All' ? requests : requests.filter((r) => r.status === active);
  const count = (t: (typeof tabs)[number]) => (t === 'All' ? requests.length : requests.filter((r) => r.status === t).length);

  return (
    <SafeAreaView testID="my-leave-requests-screen" edges={['top']} style={styles.safeArea}>
      <TitleHeader title="My Leave Requests" subtitle="Track all your leave requests" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.tabs}>
            {tabs.map((t) => {
              const on = t === active;
              return (
                <TouchableOpacity key={t} testID={`leave-tab-${t.toLowerCase()}`} activeOpacity={0.8} onPress={() => setActive(t)} style={[styles.tab, on && styles.tabOn]}>
                  <Text style={[styles.tabText, on && styles.tabTextOn]}>{t} ({count(t)})</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {list.map((r) => {
            const ss = statusStyle[r.status];
            return (
              <TouchableOpacity key={r.id} activeOpacity={0.7} style={styles.card}>
                <View style={styles.cardTop}>
                  <Text style={styles.id}>{r.id}</Text>
                  <View style={[styles.badge, { backgroundColor: ss.bg }]}>
                    <Text style={[styles.badgeText, { color: ss.fg }]}>{r.status}</Text>
                  </View>
                </View>
                <Text style={[styles.type, { color: r.typeColor }]}>{r.type}</Text>
                <View style={styles.metaRow}>
                  <Ionicons name="calendar-outline" size={15} color={colors.textTertiary} />
                  <Text style={styles.meta}>{r.dates}</Text>
                  <Ionicons name="time-outline" size={15} color={colors.textTertiary} style={styles.metaIcon2} />
                  <Text style={styles.meta}>{r.days}</Text>
                  <View style={styles.flexSpacer} />
                  <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="request-leave-button" style={styles.requestBtn} activeOpacity={0.85}>
            <Ionicons name="calendar-outline" size={18} color={colors.white} />
            <Text style={styles.requestText}>Request Leave</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 },
  tabs: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border },
  tabOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontSize: 11.5, fontWeight: '600', color: colors.textSecondary },
  tabTextOn: { color: colors.white },
  card: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 16, marginBottom: 12 },
  cardTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  id: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  badge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 12, fontWeight: '700' },
  type: { fontSize: 14, fontWeight: '600', marginTop: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  meta: { fontSize: 12.5, color: colors.textSecondary, marginLeft: 5 },
  metaIcon2: { marginLeft: 16 },
  flexSpacer: { flex: 1 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  requestBtn: { flexDirection: 'row', height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  requestText: { color: colors.white, fontSize: 16, fontWeight: '700', marginLeft: 8 },
});

export default MyLeaveRequestsScreen;
