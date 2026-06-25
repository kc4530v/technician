import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import InfoRow from '../components/InfoRow';
import { colors } from '../constants/colors';

const photos = [
  require('../../assets/images/photo1.png'),
  require('../../assets/images/photo2.png'),
  require('../../assets/images/photo3.png'),
  require('../../assets/images/photo4.png'),
];

const RoundIcon = ({ name }: { name: string }) => (
  <View style={styles.roundIcon}>
    <Ionicons name={name as any} size={18} color={colors.primary} />
  </View>
);

const JobDetailsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="job-details-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified
        online
        onBack={() => router.canGoBack() && router.back()}
      />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Job Details</Text>
          <View style={styles.idRow}>
            <Text style={styles.id}>AC-25874</Text>
            <View style={styles.priorityBadge}>
              <Text style={styles.priorityText}>High Priority</Text>
            </View>
          </View>

          <InfoRow icon="alert-circle-outline" label="Issue" value="AC Not Cooling" />
          <InfoRow icon="person-outline" label="Customer" value="Suresh Yadav" />
          <InfoRow
            icon="call-outline"
            label="Mobile"
            value="+91 91234 56789"
            trailing={<RoundIcon name="call" />}
          />
          <InfoRow
            icon="location-outline"
            label="Location"
            value="Miyapur, Hyderabad"
            sub="2.4 km away"
            trailing={<RoundIcon name="navigate" />}
          />
          <InfoRow
            icon="home-outline"
            label="Address"
            value="Plot No 123, Street No 4, Miyapur, Hyderabad - 500049"
          />
          <InfoRow icon="construct-outline" label="Service Type" value="AC Repair" />
          <InfoRow icon="pricetag-outline" label="Brand" value="LG Split AC" />
          <InfoRow icon="calendar-outline" label="Created At" value="May 24, 2025 - 10:33 AM" />
          <InfoRow
            icon="document-text-outline"
            label="Description"
            value="AC is not cooling. Making strange noise since yesterday."
          />

          {/* Photos */}
          <View style={styles.photoBlock}>
            <View style={styles.photoLabelRow}>
              <Ionicons name="image-outline" size={18} color={colors.primary} style={styles.photoIcon} />
              <Text style={styles.photoLabel}>Photos</Text>
            </View>
            <View style={styles.photoRow}>
              {photos.map((p, i) => (
                <Image key={i} source={p} style={styles.photo} resizeMode="cover" />
              ))}
            </View>
          </View>

          <InfoRow
            icon="chatbox-ellipses-outline"
            label="Customer Note"
            value="Please fix it as soon as possible."
            divider={false}
          />
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.btn, styles.declineBtn]} activeOpacity={0.85}>
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="job-details-accept" style={[styles.btn, styles.acceptBtn]} activeOpacity={0.85}>
            <Text style={styles.acceptText}>Accept Job</Text>
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
  heading: { fontSize: 20, fontWeight: '700', color: colors.textPrimary },
  idRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6, marginBottom: 6 },
  id: { fontSize: 26, fontWeight: '800', color: colors.textPrimary },
  priorityBadge: { backgroundColor: '#FDECEC', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 },
  priorityText: { fontSize: 12.5, fontWeight: '700', color: colors.danger },
  roundIcon: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  photoBlock: { paddingVertical: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.divider },
  photoLabelRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  photoIcon: { marginRight: 12 },
  photoLabel: { fontSize: 12.5, color: colors.textSecondary },
  photoRow: { flexDirection: 'row', gap: 8 },
  photo: { flex: 1, height: 64, borderRadius: 8, backgroundColor: colors.divider },
  footer: { flexDirection: 'row', gap: 12, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  btn: { flex: 1, height: 52, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  declineBtn: { backgroundColor: '#E5E7EB' },
  declineText: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  acceptBtn: { backgroundColor: colors.primary },
  acceptText: { fontSize: 16, fontWeight: '700', color: colors.white },
});

export default JobDetailsScreen;
