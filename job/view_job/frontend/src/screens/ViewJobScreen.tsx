import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

type Notif = {
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
  time: string;
  subAccent?: boolean;
};

const earlier: Notif[] = [
  { icon: 'checkmark', iconBg: colors.success, title: 'Job Completed', sub: 'AC-25741', time: '1 hour ago' },
  { icon: 'cash-outline', iconBg: colors.success, title: 'Payment Received', sub: '₹350', time: '2 hours ago' },
  { icon: 'star', iconBg: colors.primary, title: 'New Review Received', sub: '4.8 ★', time: 'Yesterday', subAccent: true },
  { icon: 'calendar', iconBg: colors.primary, title: 'Schedule Updated', sub: "Today's jobs updated", time: 'Yesterday' },
];

const ViewJobScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="view-job-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified
        online
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView style={styles.flex} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headRow}>
          <Text style={styles.heading}>Notifications</Text>
          <TouchableOpacity>
            <Text style={styles.markRead}>Mark all as read</Text>
          </TouchableOpacity>
        </View>

        {/* New job card */}
        <View style={styles.newCard}>
          <View style={styles.newTop}>
            <Text style={styles.newTitle}>New Job Assigned</Text>
            <Text style={styles.newTime}>Now</Text>
          </View>
          <View style={styles.newBody}>
            <View style={styles.newJobRow}>
              <View style={styles.jobIcon}>
                <Ionicons name="snow-outline" size={22} color={colors.white} />
              </View>
              <View style={styles.newJobBody}>
                <Text style={styles.jobId}>AC-25874</Text>
                <Text style={styles.jobType}>AC Not Cooling</Text>
                <Text style={styles.jobLoc}>Miyapur, Hyderabad</Text>
              </View>
              <View style={styles.priorityBadge}>
                <Text style={styles.priorityText}>High Priority</Text>
              </View>
            </View>
            <TouchableOpacity testID="view-job-button" style={styles.viewBtn} activeOpacity={0.85}>
              <Text style={styles.viewBtnText}>View Job</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.earlierTitle}>Earlier</Text>
        <View style={styles.earlierCard}>
          {earlier.map((n, i) => (
            <View key={i} style={[styles.notifRow, i < earlier.length - 1 && styles.divider]}>
              <View style={[styles.notifIcon, { backgroundColor: n.iconBg }]}>
                <Ionicons name={n.icon as any} size={18} color={colors.white} />
              </View>
              <View style={styles.notifBody}>
                <Text style={styles.notifTitle}>{n.title}</Text>
                <Text style={[styles.notifSub, n.subAccent && styles.notifSubAccent]}>{n.sub}</Text>
              </View>
              <Text style={styles.notifTime}>{n.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 28 },
  headRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  heading: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  markRead: { fontSize: 13, fontWeight: '600', color: colors.primary },
  newCard: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  newTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.background, paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  newTitle: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  newTime: { fontSize: 12.5, color: colors.textTertiary },
  newBody: { padding: 16 },
  newJobRow: { flexDirection: 'row', alignItems: 'center' },
  jobIcon: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#1E293B', alignItems: 'center', justifyContent: 'center' },
  newJobBody: { flex: 1, marginLeft: 12 },
  jobId: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  jobType: { fontSize: 13, color: colors.textSecondary, marginTop: 1 },
  jobLoc: { fontSize: 12, color: colors.textTertiary, marginTop: 1 },
  priorityBadge: { backgroundColor: '#FDECEC', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' },
  priorityText: { fontSize: 11.5, fontWeight: '700', color: colors.danger },
  viewBtn: { backgroundColor: colors.primary, borderRadius: 12, height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 16 },
  viewBtnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
  earlierTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 22, marginBottom: 10 },
  earlierCard: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 14 },
  notifRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  notifIcon: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  notifBody: { flex: 1, marginLeft: 12 },
  notifTitle: { fontSize: 14.5, fontWeight: '600', color: colors.textPrimary },
  notifSub: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  notifSubAccent: { color: colors.warning, fontWeight: '600' },
  notifTime: { fontSize: 12, color: colors.textTertiary },
});

export default ViewJobScreen;
