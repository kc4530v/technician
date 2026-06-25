import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import StatusBanner from '../components/StatusBanner';
import ChecklistRow from '../components/ChecklistRow';
import { colors } from '../constants/colors';

const photos = [
  require('../../assets/images/wp1.png'),
  require('../../assets/images/wp2.png'),
  require('../../assets/images/wp3.png'),
];

const checklist = [
  { label: 'Issue Diagnosis', state: 'done' as const, status: 'Completed' },
  { label: 'Problem Identified', state: 'done' as const, status: 'Completed' },
  { label: 'Parts/Gas Refilled', state: 'active' as const, status: 'In Progress' },
  { label: 'Testing', state: 'pending' as const, status: 'Pending' },
  { label: 'Customer Verified', state: 'pending' as const, status: 'Pending' },
];

const WorkProgressScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="work-progress-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.titleRow}>
            <Text style={styles.id}>AC-25874</Text>
            <View style={styles.priorityBadge}><Text style={styles.priorityText}>High Priority</Text></View>
          </View>
          <Text style={styles.type}>AC Not Cooling</Text>
          <View style={styles.locRow}>
            <Ionicons name="location-outline" size={14} color={colors.primary} />
            <Text style={styles.loc}>Miyapur, Hyderabad</Text>
          </View>

          <View style={styles.banner}>
            <StatusBanner label="In Progress" icon="time" right="00:45:20" />
          </View>

          <Text style={styles.section}>Work Progress</Text>
          <View style={styles.card}>
            {checklist.map((c) => (
              <ChecklistRow key={c.label} label={c.label} state={c.state} statusText={c.status} />
            ))}
          </View>

          <Text style={styles.section}>Work Notes</Text>
          <View style={styles.cardPad}>
            <Text style={styles.noteText}>Found low gas level. Refilling gas and cleaning the filter.</Text>
          </View>

          <Text style={styles.section}>Photos</Text>
          <View style={styles.photoRow}>
            {photos.map((p, i) => (
              <Image key={i} source={p} style={styles.photo} resizeMode="cover" />
            ))}
            <View style={styles.addPhoto}>
              <Ionicons name="add" size={22} color={colors.primary} />
              <Text style={styles.addText}>Add Photo</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.btn, styles.pauseBtn]} activeOpacity={0.85}>
            <Text style={styles.pauseText}>Pause Timer</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="work-progress-end" style={[styles.btn, styles.endBtn]} activeOpacity={0.85}>
            <Text style={styles.endText}>End Work</Text>
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
  titleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  id: { fontSize: 24, fontWeight: '800', color: colors.textPrimary },
  priorityBadge: { backgroundColor: '#FDECEC', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  priorityText: { fontSize: 12, fontWeight: '700', color: colors.danger },
  type: { fontSize: 14, color: colors.textSecondary, marginTop: 4 },
  locRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  loc: { fontSize: 13, color: colors.textSecondary, marginLeft: 4 },
  banner: { marginTop: 16 },
  section: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, paddingVertical: 6 },
  cardPad: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 16 },
  noteText: { fontSize: 14, color: colors.textPrimary, lineHeight: 20 },
  photoRow: { flexDirection: 'row', gap: 10 },
  photo: { width: 74, height: 74, borderRadius: 10, backgroundColor: colors.divider },
  addPhoto: { width: 74, height: 74, borderRadius: 10, borderWidth: 1.5, borderStyle: 'dashed', borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  addText: { fontSize: 10, color: colors.primary, marginTop: 2 },
  footer: { flexDirection: 'row', gap: 12, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  btn: { flex: 1, height: 52, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5 },
  pauseBtn: { borderColor: colors.primary, backgroundColor: colors.white },
  pauseText: { fontSize: 15, fontWeight: '700', color: colors.primary },
  endBtn: { borderColor: colors.danger, backgroundColor: colors.white },
  endText: { fontSize: 15, fontWeight: '700', color: colors.danger },
});

export default WorkProgressScreen;
