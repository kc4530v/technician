import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const Row = ({ icon, label, value, accent, divider = true }: { icon: string; label: string; value: string; accent?: boolean; divider?: boolean }) => (
  <View style={[styles.row, divider && styles.divider]}>
    <Ionicons name={icon as any} size={18} color={colors.primary} />
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={[styles.rowValue, accent && { color: colors.success }]}>{value}</Text>
  </View>
);

const TicketClosedScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="ticket-closed-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={44} color={colors.white} />
          </View>
          <Text style={styles.title}>Ticket Closed{'\n'}Successfully!</Text>
          <Text style={styles.id}>AC-25874</Text>

          <View style={styles.stars}>
            {[0, 1, 2, 3, 4].map((i) => (
              <Ionicons key={i} name="star" size={26} color={colors.star} style={styles.star} />
            ))}
          </View>

          <Text style={styles.thanks}>Thank you! The ticket has been{'\n'}closed successfully.</Text>

          <View style={styles.card}>
            <Row icon="time-outline" label="Total Time" value="01:15:30" />
            <Row icon="card-outline" label="Service Charge" value="₹350" />
            <Row icon="checkmark-circle-outline" label="Payment" value="Paid" accent />
            <Row icon="calendar-outline" label="Closed At" value="May 24, 2025 - 12:05 PM" divider={false} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="ticket-closed-details" style={styles.btn} activeOpacity={0.85}>
            <Text style={styles.btnText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 20, alignItems: 'center' },
  checkCircle: { width: 78, height: 78, borderRadius: 39, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center', marginTop: 6 },
  title: { fontSize: 22, fontWeight: '800', color: colors.success, textAlign: 'center', marginTop: 18 },
  id: { fontSize: 18, fontWeight: '800', color: colors.primary, marginTop: 14 },
  stars: { flexDirection: 'row', marginTop: 14 },
  star: { marginHorizontal: 3 },
  thanks: { fontSize: 14, color: colors.textSecondary, textAlign: 'center', marginTop: 14, lineHeight: 20 },
  card: { alignSelf: 'stretch', backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 22 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
  divider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  rowLabel: { flex: 1, fontSize: 14.5, color: colors.textSecondary, marginLeft: 12 },
  rowValue: { fontSize: 14.5, fontWeight: '700', color: colors.textPrimary },
  footer: { paddingHorizontal: 22, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  btn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default TicketClosedScreen;
