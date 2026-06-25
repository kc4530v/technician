import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import TitleHeader from '../components/TitleHeader';
import { colors } from '../constants/colors';

const dots = [
  { c: colors.primary, t: 10, l: 44 }, { c: '#F97316', t: 44, l: 8 }, { c: colors.danger, t: 116, l: 30 },
  { c: colors.primary, t: 16, r: 42 }, { c: '#22C55E', t: 66, r: 6 }, { c: '#F59E0B', t: 118, r: 36 },
];

const Row = ({ label, value, accent, badge, divider = true }: { label: string; value: string; accent?: boolean; badge?: boolean; divider?: boolean }) => (
  <View style={[styles.row, divider && styles.divider]}>
    <Text style={styles.rowLabel}>{label}</Text>
    {badge ? (
      <View style={styles.statusBadge}><Text style={styles.statusText}>{value}</Text></View>
    ) : (
      <Text style={[styles.rowValue, accent && { color: colors.primary }]}>{value}</Text>
    )}
  </View>
);

const RequestSubmittedScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="request-submitted-screen" edges={['top']} style={styles.safeArea}>
      <TitleHeader title="Request Submitted" subtitle="Your request is submitted" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.confettiWrap}>
            {dots.map((d, i) => (
              <View key={i} style={[styles.dot, { backgroundColor: d.c, top: d.t, left: d.l as any, right: d.r as any }]} />
            ))}
            <View style={styles.halo}>
              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={42} color={colors.white} />
              </View>
            </View>
          </View>
          <Text style={styles.title}>Request Submitted{'\n'}Successfully!</Text>

          <View style={styles.card}>
            <Row label="Request ID" value="REQ-25874" accent />
            <Row label="Leave Type" value="Casual Leave" />
            <Row label="From Date" value="26 Jun 2026 (Thu)" />
            <Row label="To Date" value="27 Jun 2026 (Fri)" />
            <Row label="Total Days" value="2 Days" />
            <Row label="Status" value="Pending Approval" badge divider={false} />
          </View>

          <View style={styles.nextBox}>
            <Ionicons name="document-text-outline" size={20} color={colors.primary} />
            <View style={styles.nextTextWrap}>
              <Text style={styles.nextTitle}>What&apos;s Next?</Text>
              <Text style={styles.nextSub}>Your request has been submitted and is pending approval from your manager.</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
            <Text style={styles.primaryText}>View Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineBtn} activeOpacity={0.85}>
            <Text style={styles.outlineText}>Back to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 18, paddingBottom: 20, alignItems: 'center' },
  confettiWrap: { width: 180, height: 140, alignItems: 'center', justifyContent: 'center' },
  dot: { position: 'absolute', width: 8, height: 8, borderRadius: 4 },
  halo: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#E7F6EC', alignItems: 'center', justifyContent: 'center' },
  checkCircle: { width: 78, height: 78, borderRadius: 39, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: colors.success, textAlign: 'center', marginTop: 12 },
  card: { alignSelf: 'stretch', backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 24 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  rowLabel: { fontSize: 14, color: colors.textSecondary },
  rowValue: { fontSize: 14.5, fontWeight: '700', color: colors.textPrimary },
  statusBadge: { backgroundColor: colors.warningSoft, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  statusText: { fontSize: 12.5, fontWeight: '700', color: '#B45309' },
  nextBox: { flexDirection: 'row', alignSelf: 'stretch', backgroundColor: colors.primarySoft, borderRadius: 14, padding: 16, marginTop: 16 },
  nextTextWrap: { flex: 1, marginLeft: 12 },
  nextTitle: { fontSize: 14, fontWeight: '700', color: colors.primary },
  nextSub: { fontSize: 13, color: colors.textSecondary, marginTop: 3, lineHeight: 18 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background, gap: 12 },
  primaryBtn: { height: 52, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  primaryText: { color: colors.white, fontSize: 16, fontWeight: '700' },
  outlineBtn: { height: 52, borderRadius: 12, backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  outlineText: { color: colors.primary, fontSize: 16, fontWeight: '700' },
});

export default RequestSubmittedScreen;
