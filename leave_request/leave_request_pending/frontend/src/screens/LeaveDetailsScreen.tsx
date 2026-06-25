import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import TitleHeader from '../components/TitleHeader';
import { colors } from '../constants/colors';

const avatar = require('../../assets/images/avatar.png');

const DetailRow = ({ label, value, divider = true }: { label: string; value: string; divider?: boolean }) => (
  <View style={[styles.detailRow, divider && styles.divider]}>
    <View style={styles.bullet} />
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const TimelineStep = ({ state, title, sub, last }: { state: 'done' | 'active' | 'pending'; title: string; sub: string; last?: boolean }) => (
  <View style={styles.tlRow}>
    <View style={styles.tlIconCol}>
      {state === 'done' && <View style={styles.tlDone}><Ionicons name="checkmark" size={13} color={colors.white} /></View>}
      {state === 'active' && <View style={styles.tlActive}><View style={styles.tlActiveDot} /></View>}
      {state === 'pending' && <View style={styles.tlPending} />}
      {!last && <View style={styles.tlLine} />}
    </View>
    <View style={styles.tlBody}>
      <Text style={[styles.tlTitle, state === 'pending' && styles.tlTitleMuted]}>{title}</Text>
      <Text style={styles.tlSub}>{sub}</Text>
    </View>
  </View>
);

const LeaveDetailsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="leave-details-screen" edges={['top']} style={styles.safeArea}>
      <TitleHeader title="Leave Request Details" subtitle="REQ-25874" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Profile card */}
          <View style={styles.profileCard}>
            <Image source={avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Ramesh Kumar</Text>
              <Text style={styles.role}>AC Technician</Text>
            </View>
            <TouchableOpacity style={styles.callBtn}>
              <Ionicons name="call" size={18} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Details */}
          <View style={styles.card}>
            <DetailRow label="Leave Type" value="Casual Leave" />
            <DetailRow label="From Date" value="26 Jun 2026 (Thu)" />
            <DetailRow label="To Date" value="27 Jun 2026 (Fri)" />
            <DetailRow label="Total Days" value="2 Days" />
            <DetailRow label="Reason" value="Personal work at home." />
            <View style={styles.attachWrap}>
              <View style={styles.bullet} />
              <Text style={styles.detailLabel}>Attachment</Text>
            </View>
            <View style={styles.attachCard}>
              <View style={styles.pdfIcon}><Ionicons name="document-text" size={20} color={colors.danger} /></View>
              <View style={styles.attachInfo}>
                <Text style={styles.attachName}>Document.pdf</Text>
                <Text style={styles.attachSize}>245 KB</Text>
              </View>
              <TouchableOpacity style={styles.downloadBtn}>
                <Ionicons name="download-outline" size={18} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Timeline */}
          <View style={styles.card}>
            <Text style={styles.timelineTitle}>Request Timeline</Text>
            <TimelineStep state="done" title="Request Submitted" sub="24 Jun 2026, 09:15 AM" />
            <TimelineStep state="active" title="Under Review" sub="Pending" />
            <TimelineStep state="pending" title="Approved / Rejected" sub="Pending" last />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 14 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.primarySoft },
  profileInfo: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  role: { fontSize: 13, color: colors.textSecondary, marginTop: 1 },
  callBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  card: { backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 16 },
  detailRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 13 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  bullet: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#D97706', marginRight: 10 },
  detailLabel: { flex: 1, fontSize: 13.5, color: colors.textSecondary },
  detailValue: { fontSize: 14, fontWeight: '700', color: colors.textPrimary, maxWidth: '55%', textAlign: 'right' },
  attachWrap: { flexDirection: 'row', alignItems: 'center', paddingTop: 13 },
  attachCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.background, borderRadius: 12, padding: 12, marginTop: 10, marginBottom: 14 },
  pdfIcon: { width: 38, height: 38, borderRadius: 8, backgroundColor: '#FDECEC', alignItems: 'center', justifyContent: 'center' },
  attachInfo: { flex: 1, marginLeft: 10 },
  attachName: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  attachSize: { fontSize: 12, color: colors.textTertiary, marginTop: 1 },
  downloadBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  timelineTitle: { fontSize: 15, fontWeight: '700', color: colors.textPrimary, paddingTop: 16, paddingBottom: 6 },
  tlRow: { flexDirection: 'row' },
  tlIconCol: { width: 26, alignItems: 'center' },
  tlDone: { width: 24, height: 24, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  tlActive: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#D97706', alignItems: 'center', justifyContent: 'center' },
  tlActiveDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: '#D97706' },
  tlPending: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: colors.border, backgroundColor: colors.white },
  tlLine: { flex: 1, width: 2, backgroundColor: colors.border, marginVertical: 2, minHeight: 26 },
  tlBody: { flex: 1, marginLeft: 12, paddingBottom: 18 },
  tlTitle: { fontSize: 14.5, fontWeight: '700', color: colors.textPrimary },
  tlTitleMuted: { color: colors.textSecondary },
  tlSub: { fontSize: 12.5, color: colors.textSecondary, marginTop: 2 },
});

export default LeaveDetailsScreen;
