import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const recent = [
  { id: 'AC-25874', datetime: 'May 24, 2025 - 10:50 AM', amount: '+ ₹350' },
  { id: 'AC-25741', datetime: 'May 24, 2025 - 09:15 AM', amount: '+ ₹350' },
  { id: 'AC-25688', datetime: 'May 23, 2025 - 02:30 PM', amount: '+ ₹300' },
  { id: 'AC-25610', datetime: 'May 23, 2025 - 11:30 AM', amount: '+ ₹280' },
];

const WithdrawScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="withdraw-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Today's earnings */}
          <View style={styles.todayCard}>
            <View style={styles.todayLeft}>
              <Text style={styles.todayLabel}>Today&apos;s Earnings</Text>
              <Text style={styles.todayValue}>₹700</Text>
            </View>
            <View style={styles.walletCircle}>
              <Ionicons name="wallet-outline" size={24} color={colors.white} />
            </View>
          </View>

          {/* Week / Month */}
          <View style={styles.card}>
            <TouchableOpacity style={[styles.kpiRow, styles.divider]} activeOpacity={0.7}>
              <Text style={styles.kpiLabel}>This Week</Text>
              <View style={styles.kpiRight}>
                <Text style={styles.kpiValue}>₹4,200</Text>
                <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kpiRow} activeOpacity={0.7}>
              <Text style={styles.kpiLabel}>This Month</Text>
              <View style={styles.kpiRight}>
                <Text style={styles.kpiValue}>₹18,600</Text>
                <Ionicons name="chevron-forward" size={18} color={colors.textTertiary} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Recent transactions */}
          <View style={styles.headRow}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
          </View>

          <View style={styles.card}>
            {recent.map((r, i) => (
              <View key={r.id} style={[styles.txnRow, i < recent.length - 1 && styles.divider]}>
                <View style={styles.txnBody}>
                  <Text style={styles.txnId}>{r.id}</Text>
                  <Text style={styles.txnType}>Service Charge</Text>
                  <Text style={styles.txnDate}>{r.datetime}</Text>
                </View>
                <Text style={styles.txnAmount}>{r.amount}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="withdraw-button" style={styles.withdrawBtn} activeOpacity={0.85}>
            <Text style={styles.withdrawText}>Withdraw Earnings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 20 },
  todayCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.primary, borderRadius: 18, padding: 20 },
  todayLeft: { flex: 1 },
  todayLabel: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '600' },
  todayValue: { color: colors.white, fontSize: 34, fontWeight: '800', marginTop: 8 },
  walletCircle: { width: 52, height: 52, borderRadius: 26, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 16 },
  kpiRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16 },
  kpiLabel: { fontSize: 15, color: colors.textPrimary, fontWeight: '500' },
  kpiRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  kpiValue: { fontSize: 15, fontWeight: '800', color: colors.textPrimary },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  headRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, marginBottom: 6 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  viewAll: { fontSize: 13, fontWeight: '600', color: colors.primary },
  txnRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  txnBody: { flex: 1 },
  txnId: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  txnType: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  txnDate: { fontSize: 12, color: colors.textTertiary, marginTop: 3 },
  txnAmount: { fontSize: 15, fontWeight: '800', color: colors.success },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  withdrawBtn: { height: 54, borderRadius: 12, backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  withdrawText: { color: colors.primary, fontSize: 16, fontWeight: '700' },
});

export default WithdrawScreen;
