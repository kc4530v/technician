import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import TitleHeader from '../components/TitleHeader';
import { colors } from '../constants/colors';

const avatar = require('../../assets/images/avatar.png');

const dots = [
  { c: colors.primary, t: 10, l: 44 }, { c: '#F97316', t: 44, l: 8 }, { c: colors.success, t: 116, l: 30 },
  { c: colors.primary, t: 16, r: 42 }, { c: '#22C55E', t: 66, r: 6 }, { c: '#F59E0B', t: 118, r: 36 },
];

const Row = ({ label, value, divider = true }: { label: string; value: string; divider?: boolean }) => (
  <View style={[styles.row, divider && styles.divider]}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const LeaveRejectedScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="leave-rejected-screen" edges={['top']} style={styles.safeArea}>
      <TitleHeader title="Leave Request Rejected" subtitle="REQ-25874" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.confettiWrap}>
            {dots.map((d, i) => (
              <View key={i} style={[styles.dot, { backgroundColor: d.c, top: d.t, left: d.l as any, right: d.r as any }]} />
            ))}
            <View style={[styles.halo, { backgroundColor: '#FCEBEB' }]}>
              <View style={styles.circle}><Ionicons name="close" size={40} color={colors.white} /></View>
            </View>
          </View>
          <Text style={styles.title}>Leave Request{'\n'}Rejected!</Text>

          <View style={styles.card}>
            <Row label="Leave Type" value="Casual Leave" />
            <Row label="Leave Dates" value="26 Jun 2026 - 27 Jun 2026" />
            <Row label="Total Days" value="2 Days" />
            <View style={styles.reasonWrap}>
              <Text style={styles.rowLabel}>Reason for Rejection</Text>
              <Text style={styles.reasonText}>High workload on selected dates.</Text>
            </View>
            <View style={styles.approver}>
              <Image source={avatar} style={styles.approverAvatar} />
              <View>
                <Text style={styles.approverName}>Rajesh Kumar</Text>
                <Text style={styles.approverRole}>Branch Manager</Text>
              </View>
            </View>
            <Row label="Rejected On" value="25 Jun 2026, 10:30 AM" divider={false} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="submit-new-request" style={styles.primaryBtn} activeOpacity={0.85}>
            <Text style={styles.primaryText}>Submit New Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.outlineBtn} activeOpacity={0.85}>
            <Text style={styles.outlineText}>Back to My Requests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 20, alignItems: 'center' },
  confettiWrap: { width: 180, height: 140, alignItems: 'center', justifyContent: 'center' },
  dot: { position: 'absolute', width: 8, height: 8, borderRadius: 4 },
  halo: { width: 110, height: 110, borderRadius: 55, alignItems: 'center', justifyContent: 'center' },
  circle: { width: 74, height: 74, borderRadius: 37, backgroundColor: colors.danger, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: colors.danger, textAlign: 'center', marginTop: 8 },
  card: { alignSelf: 'stretch', backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 22 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  rowLabel: { fontSize: 14, color: colors.textSecondary },
  rowValue: { fontSize: 14, fontWeight: '700', color: colors.textPrimary },
  reasonWrap: { paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  reasonText: { fontSize: 14, color: colors.textPrimary, marginTop: 4 },
  approver: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  approverAvatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.primarySoft, marginRight: 10 },
  approverName: { fontSize: 14.5, fontWeight: '700', color: colors.textPrimary },
  approverRole: { fontSize: 12.5, color: colors.textSecondary, marginTop: 1 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background, gap: 12 },
  primaryBtn: { height: 52, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  primaryText: { color: colors.white, fontSize: 16, fontWeight: '700' },
  outlineBtn: { height: 52, borderRadius: 12, backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  outlineText: { color: colors.primary, fontSize: 16, fontWeight: '700' },
});

export default LeaveRejectedScreen;
