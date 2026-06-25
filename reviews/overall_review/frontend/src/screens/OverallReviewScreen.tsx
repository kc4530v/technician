import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const Stars = ({ size = 20, count = 5 }: { size?: number; count?: number }) => (
  <View style={styles.starsRow}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Ionicons key={i} name={i < count ? 'star' : 'star-outline'} size={size} color={colors.star} style={styles.star} />
    ))}
  </View>
);

const breakdown = [
  { label: 'Punctuality', stars: 5 },
  { label: 'Quality of Work', stars: 5 },
  { label: 'Professionalism', stars: 5 },
  { label: 'Behaviour', stars: 5 },
  { label: 'Cleanliness', stars: 5 },
];

const OverallReviewScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="overall-review-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Reviewer */}
          <View style={styles.reviewer}>
            <View style={styles.avatar}><Text style={styles.avatarText}>SY</Text></View>
            <View style={styles.reviewerInfo}>
              <Text style={styles.name}>Suresh Yadav</Text>
              <Text style={styles.job}>AC-25874 - AC Not Cooling</Text>
              <Text style={styles.date}>May 24, 2025 - 10:08 AM</Text>
            </View>
          </View>

          <View style={styles.bigStars}><Stars size={30} /></View>
          <Text style={styles.excellent}>Excellent</Text>
          <Text style={styles.reviewText}>
            Excellent service! Technician was very professional and fixed the issue quickly.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.breakdownTitle}>Rating Breakdown</Text>
          {breakdown.map((b) => (
            <View key={b.label} style={styles.bRow}>
              <Text style={styles.bLabel}>{b.label}</Text>
              <Stars size={18} count={b.stars} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="thank-you-button" style={styles.btn} activeOpacity={0.85}>
            <Text style={styles.btnText}>Thank You</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20 },
  reviewer: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '800', color: colors.primary },
  reviewerInfo: { marginLeft: 14 },
  name: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  job: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  date: { fontSize: 12.5, color: colors.textTertiary, marginTop: 2 },
  starsRow: { flexDirection: 'row' },
  star: { marginRight: 3 },
  bigStars: { marginTop: 18 },
  excellent: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginTop: 16 },
  reviewText: { fontSize: 14.5, color: colors.textSecondary, lineHeight: 21, marginTop: 10 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: colors.divider, marginVertical: 22 },
  breakdownTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginBottom: 14 },
  bRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 11 },
  bLabel: { fontSize: 14.5, color: colors.textPrimary },
  footer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  btn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default OverallReviewScreen;
