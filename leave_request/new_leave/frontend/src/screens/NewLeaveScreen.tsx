import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import TitleHeader from '../components/TitleHeader';
import { colors } from '../constants/colors';

// Original leave-type icons extracted from the PDF (coloured circle + glyph).
const types = [
  { key: 'casual', label: 'Casual Leave', icon: require('../../assets/images/icons/lt-casual.png') },
  { key: 'sick', label: 'Sick Leave', icon: require('../../assets/images/icons/lt-sick.png') },
  { key: 'emergency', label: 'Emergency Leave', icon: require('../../assets/images/icons/lt-emergency.png') },
  { key: 'earned', label: 'Earned Leave', icon: require('../../assets/images/icons/lt-earned.png') },
];

const NewLeaveScreen = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('casual');
  const [halfDay, setHalfDay] = useState(false);
  const [reason, setReason] = useState('Personal work at home.');

  return (
    <SafeAreaView testID="new-leave-screen" edges={['top']} style={styles.safeArea}>
      <TitleHeader title="New Leave Request" subtitle="Fill leave details" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <Text style={styles.label}>Leave Type</Text>
          <View style={styles.grid}>
            {types.map((t) => {
              const on = t.key === selected;
              return (
                <TouchableOpacity key={t.key} activeOpacity={0.8} onPress={() => setSelected(t.key)} style={[styles.typeCard, on && styles.typeCardOn]}>
                  <Image source={t.icon} style={styles.typeIcon} resizeMode="contain" />
                  <Text style={styles.typeLabel}>{t.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.dateRow}>
            <View style={styles.dateCol}>
              <Text style={styles.label}>From Date</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>26 Jun 2026 (Thu)</Text>
                <Ionicons name="calendar-outline" size={18} color={colors.primary} />
              </View>
            </View>
            <View style={styles.dateCol}>
              <Text style={styles.label}>To Date</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>27 Jun 2026 (Fri)</Text>
                <Ionicons name="calendar-outline" size={18} color={colors.primary} />
              </View>
            </View>
          </View>

          <View style={styles.halfRow}>
            <View style={styles.flexSpacerCol}>
              <Text style={styles.halfTitle}>Half Day</Text>
              <Text style={styles.halfSub}>Apply for half day leave</Text>
            </View>
            <TouchableOpacity testID="half-day-toggle" activeOpacity={0.85} onPress={() => setHalfDay((v) => !v)} style={[styles.track, halfDay ? styles.trackOn : styles.trackOff]}>
              <View style={styles.knob} />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Reason for Leave</Text>
          <View style={styles.textareaWrap}>
            <TextInput
              testID="reason-input"
              style={styles.textarea}
              value={reason}
              onChangeText={(t) => t.length <= 200 && setReason(t)}
              multiline
              placeholder="Enter reason"
              placeholderTextColor={colors.textTertiary}
            />
            <Text style={styles.counter}>{reason.length}/200</Text>
          </View>

          <Text style={styles.attachTitle}>Attachment <Text style={styles.attachOpt}>(Optional)</Text></Text>
          <Text style={styles.attachSub}>Upload Medical Certificate or any document</Text>
          <TouchableOpacity style={styles.uploadBtn} activeOpacity={0.7}>
            <Ionicons name="cloud-upload-outline" size={18} color={colors.primary} />
            <Text style={styles.uploadText}>Upload File</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="submit-request-button" style={styles.submitBtn} activeOpacity={0.85}>
            <Text style={styles.submitText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  label: { fontSize: 14, fontWeight: '700', color: colors.textPrimary, marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  typeCard: { width: '47%', flexGrow: 1, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14 },
  typeCardOn: { borderColor: colors.primary, backgroundColor: '#FAF8FE' },
  typeIcon: { width: 36, height: 36, marginRight: 10 },
  typeLabel: { fontSize: 13, fontWeight: '700', color: colors.textPrimary, flexShrink: 1 },
  dateRow: { flexDirection: 'row', gap: 12, marginTop: 20 },
  dateCol: { flex: 1 },
  dateBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 12, height: 48 },
  dateText: { fontSize: 13, color: colors.textPrimary, fontWeight: '500' },
  halfRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingVertical: 12, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: colors.divider },
  flexSpacerCol: { flex: 1 },
  halfTitle: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  halfSub: { fontSize: 12.5, color: colors.textSecondary, marginTop: 2 },
  track: { width: 50, height: 28, borderRadius: 14, padding: 3, justifyContent: 'center' },
  trackOn: { backgroundColor: colors.primary, alignItems: 'flex-end' },
  trackOff: { backgroundColor: '#D1D5DB', alignItems: 'flex-start' },
  knob: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.white },
  textareaWrap: { borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12, marginTop: 4 },
  textarea: { fontSize: 14, color: colors.textPrimary, minHeight: 70, textAlignVertical: 'top' },
  counter: { alignSelf: 'flex-end', fontSize: 12, color: colors.textTertiary },
  attachTitle: { fontSize: 14, fontWeight: '700', color: colors.textPrimary, marginTop: 20 },
  attachOpt: { color: colors.textSecondary, fontWeight: '400' },
  attachSub: { fontSize: 12.5, color: colors.textSecondary, marginTop: 4 },
  uploadBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.primary, borderRadius: 10, paddingVertical: 12, marginTop: 12, alignSelf: 'flex-start', paddingHorizontal: 16 },
  uploadText: { fontSize: 14, fontWeight: '700', color: colors.primary, marginLeft: 8 },
  footer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  submitBtn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  submitText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default NewLeaveScreen;
