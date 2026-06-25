import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const Stars = ({ size = 28 }: { size?: number }) => (
  <View style={styles.starsRow}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Ionicons key={i} name="star" size={size} color={colors.star} style={styles.star} />
    ))}
  </View>
);

const MyReviewScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="my-review-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.bigScore}>4.8</Text>
          <Stars />
          <Text style={styles.excellent}>Excellent</Text>
          <Text style={styles.newReview}>You got a new 5 star review</Text>

          <View style={styles.card}>
            <View style={styles.reviewer}>
              <View style={styles.avatar}><Text style={styles.avatarText}>SY</Text></View>
              <View style={styles.reviewerInfo}>
                <Text style={styles.name}>Suresh Yadav</Text>
                <Text style={styles.job}>AC-25874 - AC Not Cooling</Text>
                <Text style={styles.date}>May 24, 2025</Text>
              </View>
            </View>
            <Stars size={22} />
            <Text style={styles.reviewText}>
              Excellent service! Technician was very professional and fixed the issue quickly.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="view-all-reviews" style={styles.outlineBtn} activeOpacity={0.85}>
            <Text style={styles.outlineText}>View All Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 20, alignItems: 'center' },
  bigScore: { fontSize: 52, fontWeight: '800', color: colors.textPrimary },
  starsRow: { flexDirection: 'row', marginTop: 10 },
  star: { marginHorizontal: 3 },
  excellent: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginTop: 16 },
  newReview: { fontSize: 14, color: colors.textSecondary, marginTop: 10 },
  card: { alignSelf: 'stretch', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 18, marginTop: 26 },
  reviewer: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '800', color: colors.primary },
  reviewerInfo: { marginLeft: 14 },
  name: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  job: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  date: { fontSize: 12.5, color: colors.textTertiary, marginTop: 2 },
  reviewText: { fontSize: 14.5, color: colors.textPrimary, lineHeight: 21, marginTop: 14 },
  footer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  outlineBtn: { height: 54, borderRadius: 12, backgroundColor: colors.white, borderWidth: 1.5, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  outlineText: { color: colors.primary, fontSize: 16, fontWeight: '700' },
});

export default MyReviewScreen;
