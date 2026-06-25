import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import StatusBanner from '../components/StatusBanner';
import ChecklistRow from '../components/ChecklistRow';
import { colors } from '../constants/colors';

const checklist = ['Issue Diagnosis', 'Problem Identified', 'Parts/Gas Refilled', 'Testing', 'Customer Verified'];

const WorkCompletedScreen = () => {
  const router = useRouter();
  const [charge, setCharge] = useState('350');

  return (
    <SafeAreaView testID="work-completed-screen" edges={['top']} style={styles.safeArea}>
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
            <StatusBanner label="Work Completed" right="01:15:30" />
          </View>

          <Text style={styles.section}>Work Summary</Text>
          <View style={styles.card}>
            {checklist.map((c) => (
              <ChecklistRow key={c} label={c} state="done" statusText="Completed" />
            ))}
          </View>

          <Text style={styles.section}>Work Notes</Text>
          <View style={styles.cardPad}>
            {['Low gas refilled (R32).', 'Filter cleaned.', 'Performance tested.', 'AC is working fine now.'].map((line) => (
              <Text key={line} style={styles.noteLine}>{line}</Text>
            ))}
          </View>

          <Text style={styles.section}>Service Charge</Text>
          <View style={styles.chargeBox}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              testID="work-completed-charge"
              style={styles.chargeInput}
              value={charge}
              onChangeText={setCharge}
              keyboardType="number-pad"
            />
          </View>
          <Text style={styles.hint}>Enter the final service charge amount</Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="work-completed-request-otp" style={styles.btn} activeOpacity={0.85}>
            <Text style={styles.btnText}>Request OTP</Text>
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
  noteLine: { fontSize: 14, color: colors.textPrimary, lineHeight: 22, marginBottom: 6 },
  chargeBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, borderRadius: 12, borderWidth: 1, borderColor: colors.primary, paddingHorizontal: 16, height: 54 },
  rupee: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginRight: 6 },
  chargeInput: { flex: 1, fontSize: 16, fontWeight: '600', color: colors.textPrimary, paddingVertical: 0 },
  hint: { fontSize: 12.5, color: colors.textTertiary, marginTop: 8 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  btn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default WorkCompletedScreen;
