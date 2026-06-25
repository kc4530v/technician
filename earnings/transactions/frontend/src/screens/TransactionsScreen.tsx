import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';
import { TabKey, tabs, txnsByTab } from '../constants/transactionsData';

const TransactionsScreen = () => {
  const router = useRouter();
  const [active, setActive] = useState<TabKey>('completed');
  const list = txnsByTab[active];

  return (
    <SafeAreaView testID="transactions-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {tabs.map((t) => {
            const on = t.key === active;
            return (
              <TouchableOpacity
                key={t.key}
                testID={`transactions-tab-${t.key}`}
                activeOpacity={0.8}
                onPress={() => setActive(t.key)}
                style={[styles.tab, on && styles.tabOn]}
              >
                <Text style={[styles.tabText, on && styles.tabTextOn]}>{t.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {list.map((t, i) => (
            <View key={`${t.id}-${i}`} style={[styles.row, i < list.length - 1 && styles.divider]}>
              <View style={styles.body}>
                <Text style={styles.id}>{t.id}</Text>
                <Text style={styles.type}>{t.type}</Text>
                <Text style={styles.loc}>{t.location}</Text>
                <Text style={styles.datetime}>{t.datetime}</Text>
              </View>
              <View style={styles.right}>
                <Text style={[styles.amount, t.status === 'Cancelled' && styles.amountMuted]}>{t.amount}</Text>
                <View style={[styles.badge, t.status === 'Completed' ? styles.badgeDone : styles.badgeCancel]}>
                  <Text style={[styles.badgeText, t.status === 'Completed' ? styles.badgeTextDone : styles.badgeTextCancel]}>
                    {t.status}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.loadMore} activeOpacity={0.7}>
            <Text style={styles.loadMoreText}>Load More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  tabs: { flexDirection: 'row', gap: 10, paddingHorizontal: 16, paddingTop: 18, paddingBottom: 8 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white },
  tabOn: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  tabText: { fontSize: 13, fontWeight: '600', color: colors.textSecondary },
  tabTextOn: { color: colors.primary },
  content: { paddingHorizontal: 18, paddingTop: 6, paddingBottom: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  body: { flex: 1 },
  id: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  type: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  loc: { fontSize: 12.5, color: colors.textTertiary, marginTop: 2 },
  datetime: { fontSize: 12, color: colors.textTertiary, marginTop: 4 },
  right: { alignItems: 'flex-end', justifyContent: 'space-between' },
  amount: { fontSize: 16, fontWeight: '800', color: colors.success },
  amountMuted: { color: colors.textTertiary },
  badge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, marginTop: 10 },
  badgeDone: { backgroundColor: colors.successSoft },
  badgeCancel: { backgroundColor: '#FDECEC' },
  badgeText: { fontSize: 12, fontWeight: '700' },
  badgeTextDone: { color: colors.success },
  badgeTextCancel: { color: colors.danger },
  loadMore: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, marginTop: 14, marginBottom: 6, borderWidth: 1.5, borderColor: colors.primary, borderRadius: 12, backgroundColor: colors.white },
  loadMoreText: { fontSize: 15, fontWeight: '700', color: colors.primary },
});

export default TransactionsScreen;
