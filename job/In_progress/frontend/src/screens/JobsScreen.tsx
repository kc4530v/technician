import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import PriorityBadge from '../components/PriorityBadge';
import { colors } from '../constants/colors';
import { JobItem, TabKey, jobsByTab, tabs } from '../constants/jobsData';

type Props = {
  initialTab?: TabKey;
};

const JobCard = ({ job }: { job: JobItem }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.card}>
    <Image source={job.icon} style={styles.icon} resizeMode="contain" />
    <View style={styles.body}>
      <Text style={styles.id}>{job.id}</Text>
      <Text style={styles.type}>{job.type}</Text>
      <Text style={styles.customer}>{job.customer}</Text>
      <Text style={styles.loc}>{job.location}</Text>
      {!!job.statusLine && <Text style={styles.statusLine}>{job.statusLine}</Text>}
    </View>
    <View style={styles.right}>
      {job.completed ? (
        <View style={styles.doneBadge}>
          <Text style={styles.doneText}>Completed</Text>
        </View>
      ) : (
        job.priority && <PriorityBadge label={job.priority} />
      )}
      <Text style={styles.time}>{job.time}</Text>
    </View>
    <Ionicons name="chevron-forward" size={16} color={colors.textTertiary} style={styles.chev} />
  </TouchableOpacity>
);

// Jobs list with Assigned / In Progress / Completed tabs.
const JobsScreen = ({ initialTab = 'assigned' }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState<TabKey>(initialTab);
  const list = jobsByTab[active];

  return (
    <SafeAreaView testID="jobs-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified
        online
        showBell
        badgeCount={1}
        onBack={() => router.canGoBack() && router.back()}
      />

      <View style={styles.flex}>
        <View style={styles.tabs}>
          {tabs.map((t) => {
            const on = t.key === active;
            return (
              <TouchableOpacity
                key={t.key}
                testID={`jobs-tab-${t.key}`}
                activeOpacity={0.8}
                onPress={() => setActive(t.key)}
                style={[styles.tab, on && styles.tabOn]}
              >
                <Text style={[styles.tabText, on && styles.tabTextOn]}>
                  {t.label} ({jobsByTab[t.key].length})
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {list.map((job, i) => (
            <JobCard key={`${job.id}-${i}`} job={job} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  tabs: { flexDirection: 'row', paddingHorizontal: 14, paddingTop: 16, paddingBottom: 6, gap: 8 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: 'center', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border },
  tabOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { fontSize: 12.5, fontWeight: '600', color: colors.textSecondary },
  tabTextOn: { color: colors.white },
  content: { paddingHorizontal: 14, paddingTop: 8, paddingBottom: 24 },
  card: { flexDirection: 'row', backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 14, marginBottom: 12 },
  icon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, marginLeft: 12 },
  id: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  type: { fontSize: 13, color: colors.textSecondary, marginTop: 1 },
  customer: { fontSize: 13.5, fontWeight: '600', color: colors.textPrimary, marginTop: 4 },
  loc: { fontSize: 12, color: colors.textTertiary, marginTop: 1 },
  statusLine: { fontSize: 12.5, fontWeight: '600', color: colors.primary, marginTop: 4 },
  right: { alignItems: 'flex-end', justifyContent: 'space-between', marginLeft: 8 },
  doneBadge: { backgroundColor: colors.successSoft, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  doneText: { fontSize: 12, fontWeight: '700', color: colors.success },
  time: { fontSize: 12, color: colors.textSecondary },
  chev: { alignSelf: 'center', marginLeft: 8 },
});

export default JobsScreen;
