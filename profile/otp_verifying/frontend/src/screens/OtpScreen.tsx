import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import CircularProgress from '../components/CircularProgress';
import OtpStepper from '../components/OtpStepper';
import { OTP } from '../../constants/testIds';
import { colors } from '../constants/colors';

const technician = require('../../assets/images/technician.png');

const steps = [
  { label: 'OTP Sent', state: 'done' as const },
  { label: 'Reading OTP', state: 'active' as const },
  { label: 'Logged In', state: 'pending' as const },
];

// Verifying OTP screen: auto-reading state with progress ring and stepper.
const OtpScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID={OTP.screen} edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified={false}
        online
        showBell
        badgeCount={2}
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar with decorative sparkles */}
        <View style={styles.avatarBlock}>
          <Ionicons name="sparkles" size={16} color={colors.primaryLight} style={styles.sparkle1} />
          <Ionicons name="sparkles" size={12} color={colors.primary} style={styles.sparkle2} />
          <Ionicons name="sparkles" size={14} color={colors.primaryLight} style={styles.sparkle3} />
          <Ionicons name="star" size={10} color={colors.primary} style={styles.sparkle4} />
          <View style={styles.avatarWrap}>
            <Image source={technician} style={styles.avatar} resizeMode="cover" />
          </View>
        </View>

        <Text style={styles.title}>Verifying OTP</Text>
        <Text style={styles.subtitle}>
          Please wait while we automatically{'\n'}read the OTP sent to
        </Text>

        {/* Phone chip */}
        <View style={styles.phoneChip}>
          <Ionicons name="call" size={16} color={colors.primary} />
          <Text style={styles.phoneText}>+91 98765 43210</Text>
          <TouchableOpacity testID={OTP.editButton} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Progress ring */}
        <View style={styles.ring}>
          <CircularProgress progress={0.7} />
        </View>

        <Text style={styles.status}>Auto reading OTP...</Text>
        <Text style={styles.statusSub}>This will only take a few seconds</Text>

        {/* Stepper */}
        <View style={styles.stepper}>
          <OtpStepper steps={steps} />
        </View>

        {/* Secure & Safe */}
        <View style={styles.secureBox}>
          <Ionicons name="shield-checkmark" size={20} color={colors.primary} />
          <View style={styles.secureTextWrap}>
            <Text style={styles.secureTitle}>Secure &amp; Safe</Text>
            <Text style={styles.secureSub}>
              Your OTP is secure and will never be shared with anyone.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const AVATAR = 116;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  flex: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    paddingHorizontal: 26,
    paddingTop: 18,
    paddingBottom: 28,
    alignItems: 'center',
  },
  avatarBlock: {
    width: AVATAR + 70,
    height: AVATAR + 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: colors.primarySoft,
    overflow: 'hidden',
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
  },
  sparkle1: { position: 'absolute', top: 6, right: 26 },
  sparkle2: { position: 'absolute', top: 30, left: 24 },
  sparkle3: { position: 'absolute', bottom: 18, right: 18 },
  sparkle4: { position: 'absolute', top: 2, left: 60 },
  title: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  phoneChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 18,
  },
  phoneText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    marginLeft: 8,
  },
  editText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
    marginLeft: 14,
  },
  ring: {
    marginTop: 28,
  },
  status: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 24,
  },
  statusSub: {
    fontSize: 13.5,
    color: colors.textSecondary,
    marginTop: 6,
  },
  stepper: {
    alignSelf: 'stretch',
    marginTop: 26,
    paddingHorizontal: 8,
  },
  secureBox: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: colors.primarySoft,
    borderRadius: 14,
    padding: 16,
    marginTop: 28,
  },
  secureTextWrap: {
    flex: 1,
    marginLeft: 12,
  },
  secureTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  secureSub: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginTop: 3,
    lineHeight: 18,
  },
});

export default OtpScreen;
