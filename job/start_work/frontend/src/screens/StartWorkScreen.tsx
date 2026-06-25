import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const SummaryRow = ({ icon, label, value, divider = true }: { icon: string; label: string; value: string; divider?: boolean }) => (
  <View style={[styles.sumRow, divider && styles.divider]}>
    <Ionicons name={icon as any} size={20} color={colors.primary} style={styles.sumIcon} />
    <View style={styles.sumBody}>
      <Text style={styles.sumLabel}>{label}</Text>
      <Text style={styles.sumValue}>{value}</Text>
    </View>
  </View>
);

const checklist = ['Issue Diagnosis', 'Problem Identified', 'Parts(Gas Refilled)', 'Testing', 'Customer Verified'];

const StartWorkScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="start-work-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Job title */}
          <View style={styles.titleRow}>
            <Text style={styles.id}>AC-25874</Text>
            <View style={styles.priorityBadge}><Text style={styles.priorityText}>High Priority</Text></View>
          </View>
          <Text style={styles.type}>AC Not Cooling</Text>
          <View style={styles.locRow}>
            <Ionicons name="location-outline" size={14} color={colors.primary} />
            <Text style={styles.loc}>Miyapur, Hyderabad</Text>
          </View>

          {/* Job Summary */}
          <Text style={styles.section}>Job Summary</Text>
          <View style={styles.card}>
            <SummaryRow icon="people-outline" label="Customer" value="Suresh Yadav" />
            <SummaryRow icon="pricetag-outline" label="Brand" value="LG Split AC" />
            <SummaryRow icon="time-outline" label="Estimated Time" value="90 mins" />
            <SummaryRow icon="card-outline" label="Service Charge" value="₹350" divider={false} />
          </View>

          {/* Service Checklist */}
          <Text style={styles.section}>Service Checklist</Text>
          <View style={styles.card}>
            {checklist.map((c) => (
              <View key={c} style={styles.checkRow}>
                <Ionicons name="checkmark-circle-outline" size={22} color={colors.primary} />
                <Text style={styles.checkLabel}>{c}</Text>
              </View>
            ))}
          </View>

          {/* Work Notes */}
          <View style={[styles.card, styles.notesCard]}>
            <Text style={styles.cardHeading}>Work Notes</Text>
            <Text style={styles.noteIntro}>Please check the AC thoroughly and perform all tests.</Text>
            <Text style={styles.noteLabel}>Customer Note</Text>
            <Text style={styles.noteText}>AC is not cooling. Making strange noise since yesterday.</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="start-work-button" style={styles.startBtn} activeOpacity={0.85}>
            <Text style={styles.startText}>Start Work</Text>
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
  section: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, paddingVertical: 6 },
  sumRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  sumIcon: { marginRight: 12 },
  sumBody: { flex: 1 },
  sumLabel: { fontSize: 12.5, color: colors.textSecondary, marginBottom: 3 },
  sumValue: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  checkRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 9 },
  checkLabel: { fontSize: 14.5, color: colors.textPrimary, fontWeight: '500', marginLeft: 10 },
  notesCard: { marginTop: 20 },
  cardHeading: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, paddingTop: 14 },
  noteIntro: { fontSize: 14, color: colors.textPrimary, marginTop: 10, lineHeight: 20 },
  noteLabel: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 14 },
  noteText: { fontSize: 14, color: colors.textPrimary, marginTop: 4, paddingBottom: 14, lineHeight: 20 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  startBtn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  startText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default StartWorkScreen;
