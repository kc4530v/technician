import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';

const illustration = require('../../assets/images/accept-illustration.png');

const Row = ({ icon, label, value, divider = true }: { icon: string; label: string; value: string; divider?: boolean }) => (
  <View style={[styles.row, divider && styles.divider]}>
    <Ionicons name={icon as any} size={20} color={colors.primary} />
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

const AcceptJobScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="accept-job-screen" edges={['top']} style={styles.safeArea}>
      <ScreenHeader title="Accept Job" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Image source={illustration} style={styles.illustration} resizeMode="contain" />

          <Text style={styles.title}>Accept this job?</Text>
          <Text style={styles.id}>AC-25874</Text>
          <Text style={styles.type}>AC Not Cooling</Text>
          <Text style={styles.loc}>Miyapur, Hyderabad</Text>

          <View style={styles.rows}>
            <Row icon="location-outline" label="Distance" value="2.4 km" />
            <Row icon="card-outline" label="Service Charge" value="₹350" />
            <Row icon="chatbox-outline" label="Priority" value="High" />
            <Row icon="time-outline" label="Estimated Time" value="90 mins" divider={false} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="accept-job-confirm" style={styles.confirmBtn} activeOpacity={0.85}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 26, paddingTop: 18, paddingBottom: 20, alignItems: 'center' },
  illustration: { width: 200, height: 200, marginTop: 6 },
  title: { fontSize: 22, fontWeight: '800', color: colors.textPrimary, marginTop: 6 },
  id: { fontSize: 20, fontWeight: '800', color: colors.textPrimary, marginTop: 16 },
  type: { fontSize: 15, color: colors.textPrimary, marginTop: 6 },
  loc: { fontSize: 15, color: colors.textPrimary, marginTop: 2 },
  rows: { alignSelf: 'stretch', marginTop: 22 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  rowLabel: { flex: 1, fontSize: 15, color: colors.textSecondary, marginLeft: 12 },
  rowValue: { fontSize: 15, fontWeight: '800', color: colors.textPrimary },
  footer: { paddingHorizontal: 22, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  confirmBtn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  confirmText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default AcceptJobScreen;
