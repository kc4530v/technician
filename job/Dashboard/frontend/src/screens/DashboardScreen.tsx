import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import PriorityBadge from '../components/PriorityBadge';
import { colors } from '../constants/colors';
import { earnings, summary, technician, todaysJobs } from '../constants/dashboardData';

const DashboardScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="dashboard-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified
        online
        showBell
        badgeCount={1}
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView style={styles.flex} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile card */}
        <View style={styles.profileCard}>
          <Image source={technician.avatar} style={styles.avatar} resizeMode="cover" />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{technician.name}</Text>
            <Text style={styles.role}>{technician.role}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={15} color={colors.star} />
              <Text style={styles.rating}>{technician.rating.toFixed(1)}</Text>
              <Text style={styles.reviews}> ({technician.reviews} Reviews)</Text>
            </View>
          </View>
          <View style={styles.onlinePill}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        {/* Today's Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Today&apos;s Summary</Text>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNum}>{summary.assigned}</Text>
              <Text style={styles.summaryLabel}>Assigned</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNum}>{summary.inProgress}</Text>
              <Text style={styles.summaryLabel}>In Progress</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryNum}>{summary.completed}</Text>
              <Text style={styles.summaryLabel}>Completed</Text>
            </View>
          </View>
        </View>

        {/* Today's Jobs */}
        <View style={styles.sectionHead}>
          <Text style={styles.sectionTitle}>Today&apos;s Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All ›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.jobsCard}>
          {todaysJobs.map((j, i) => (
            <View key={j.id} style={[styles.jobRow, i < todaysJobs.length - 1 && styles.jobDivider]}>
              <Image source={j.icon} style={styles.jobIcon} resizeMode="contain" />
              <View style={styles.jobBody}>
                <Text style={styles.jobId}>{j.id}</Text>
                <Text style={styles.jobType}>{j.type}</Text>
                <Text style={styles.jobLoc}>{j.location}</Text>
              </View>
              <View style={styles.jobRight}>
                <PriorityBadge label={j.priority} />
                <Text style={styles.jobTime}>{j.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Earnings */}
        <View style={styles.earnCard}>
          <View style={styles.earnRow}>
            <Text style={styles.earnLabel}>Earnings This Week</Text>
            <Text style={styles.earnValue}>{earnings.week}</Text>
          </View>
          <View style={[styles.earnRow, styles.earnDivider]}>
            <Text style={styles.earnLabel}>This Month</Text>
            <Text style={styles.earnValueDark}>{earnings.month}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AV = 56;
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 28 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 16, padding: 14, borderWidth: 1, borderColor: colors.border },
  avatar: { width: AV, height: AV, borderRadius: AV / 2, backgroundColor: colors.primarySoft },
  profileInfo: { flex: 1, marginLeft: 12 },
  name: { fontSize: 17, fontWeight: '700', color: colors.textPrimary },
  role: { fontSize: 13, color: colors.textSecondary, marginTop: 1 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  rating: { fontSize: 13, fontWeight: '700', color: colors.textPrimary, marginLeft: 4 },
  reviews: { fontSize: 12.5, color: colors.textSecondary },
  onlinePill: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.successSoft, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 },
  onlineDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.success, marginRight: 5 },
  onlineText: { fontSize: 12, fontWeight: '600', color: colors.success },
  summaryCard: { backgroundColor: colors.primary, borderRadius: 16, padding: 18, marginTop: 16 },
  summaryTitle: { color: colors.white, fontSize: 15, fontWeight: '700', marginBottom: 14 },
  summaryRow: { flexDirection: 'row', alignItems: 'center' },
  summaryItem: { flex: 1, alignItems: 'center' },
  summaryNum: { color: colors.white, fontSize: 24, fontWeight: '800' },
  summaryLabel: { color: 'rgba(255,255,255,0.85)', fontSize: 12.5, marginTop: 4 },
  summaryDivider: { width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.25)' },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  viewAll: { fontSize: 13, fontWeight: '600', color: colors.primary },
  jobsCard: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 14 },
  jobRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  jobDivider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  jobIcon: { width: 42, height: 42, borderRadius: 21 },
  jobBody: { flex: 1, marginLeft: 12 },
  jobId: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  jobType: { fontSize: 13, color: colors.textSecondary, marginTop: 1 },
  jobLoc: { fontSize: 12, color: colors.textTertiary, marginTop: 1 },
  jobRight: { alignItems: 'flex-end' },
  jobTime: { fontSize: 12, color: colors.textSecondary, marginTop: 8 },
  earnCard: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 16 },
  earnRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16 },
  earnDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.divider },
  earnLabel: { fontSize: 14, color: colors.textPrimary, fontWeight: '500' },
  earnValue: { fontSize: 15, fontWeight: '700', color: colors.success },
  earnValueDark: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
});

export default DashboardScreen;
