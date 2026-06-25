import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import InfoRow from '../components/InfoRow';
import { colors } from '../constants/colors';

// Original icons extracted from the PDF.
const ICONS = {
  call: require('../../assets/images/icons/act-call.png'),
  chat: require('../../assets/images/icons/act-chat.png'),
  location: require('../../assets/images/icons/act-location.png'),
  address: require('../../assets/images/icons/info-address.png'),
  issue: require('../../assets/images/icons/info-issue.png'),
  brand: require('../../assets/images/icons/info-brand.png'),
  note: require('../../assets/images/icons/info-note.png'),
};

const Action = ({ icon, label }: { icon: any; label: string }) => (
  <TouchableOpacity style={styles.action} activeOpacity={0.7}>
    <Image source={icon} style={styles.actionIcon} resizeMode="contain" />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const ReachedCustomerScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="reached-customer-screen" edges={['top']} style={styles.safeArea}>
      <ScreenHeader title="Customer Details" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.banner}>
            <Ionicons name="checkmark-circle" size={18} color={colors.success} />
            <Text style={styles.bannerText}>Reached Customer</Text>
          </View>

          {/* Customer card */}
          <View style={styles.card}>
            <View style={styles.custRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>SY</Text>
              </View>
              <View style={styles.custInfo}>
                <Text style={styles.custName}>Suresh Yadav</Text>
                <Text style={styles.custPhone}>+91 91234 56789</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <Action icon={ICONS.call} label="Call" />
              <Action icon={ICONS.chat} label="Chat" />
              <Action icon={ICONS.location} label="Location" />
            </View>
          </View>

          {/* Details */}
          <View style={styles.detailCard}>
            <InfoRow iconImage={ICONS.address} label="Address" value="Plot No 123, Street No 4, Miyapur, Hyderabad - 500049" />
            <InfoRow iconImage={ICONS.issue} label="Issue" value="AC Not Cooling" />
            <InfoRow iconImage={ICONS.brand} label="Brand" value="LG Split AC" />
            <InfoRow iconImage={ICONS.note} label="Customer Note" value="Please fix it as soon as possible." divider={false} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.btn, styles.cancelBtn]} activeOpacity={0.85}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="reached-customer-approve" style={[styles.btn, styles.approveBtn]} activeOpacity={0.85}>
            <Text style={styles.approveText}>Approve</Text>
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
  banner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.successSoft, borderRadius: 12, paddingVertical: 14 },
  bannerText: { fontSize: 15, fontWeight: '700', color: colors.success, marginLeft: 8 },
  card: { backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 16, marginTop: 16 },
  custRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 18, fontWeight: '800', color: colors.primary },
  custInfo: { marginLeft: 14 },
  custName: { fontSize: 17, fontWeight: '700', color: colors.textPrimary },
  custPhone: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
  actions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 18 },
  action: { alignItems: 'center' },
  actionIcon: { width: 48, height: 48 },
  actionLabel: { fontSize: 12.5, color: colors.textSecondary, marginTop: 6 },
  detailCard: { backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, marginTop: 16 },
  footer: { flexDirection: 'row', gap: 12, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  btn: { flex: 1, height: 52, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  cancelBtn: { backgroundColor: '#E5E7EB' },
  cancelText: { fontSize: 16, fontWeight: '700', color: colors.textPrimary },
  approveBtn: { backgroundColor: colors.primary },
  approveText: { fontSize: 16, fontWeight: '700', color: colors.white },
});

export default ReachedCustomerScreen;
