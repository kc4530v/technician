import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const illustration = require('../../assets/images/otp-illustration.png');

const RequestOtpScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView testID="request-otp-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Image source={illustration} style={styles.illustration} resizeMode="contain" />

          <Text style={styles.title}>Request OTP{'\n'}from customer</Text>
          <Text style={styles.subtitle}>OTP is required to close this ticket.</Text>

          <View style={styles.importantBox}>
            <Ionicons name="shield-checkmark" size={20} color={colors.primary} />
            <View style={styles.importantTextWrap}>
              <Text style={styles.importantTitle}>Important</Text>
              <Text style={styles.importantSub}>Please collect OTP from the customer and proceed.</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="request-otp-button" style={styles.btn} activeOpacity={0.85}>
            <Text style={styles.btnText}>Request OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 26, paddingTop: 24, paddingBottom: 20, alignItems: 'center' },
  illustration: { width: 180, height: 180, marginTop: 10 },
  title: { fontSize: 22, fontWeight: '800', color: colors.textPrimary, textAlign: 'center', marginTop: 18 },
  subtitle: { fontSize: 14, color: colors.textSecondary, textAlign: 'center', marginTop: 10 },
  importantBox: { flexDirection: 'row', alignSelf: 'stretch', backgroundColor: colors.primarySoft, borderRadius: 14, padding: 16, marginTop: 28 },
  importantTextWrap: { flex: 1, marginLeft: 12 },
  importantTitle: { fontSize: 14, fontWeight: '700', color: colors.primary },
  importantSub: { fontSize: 13, color: colors.textSecondary, marginTop: 3, lineHeight: 18 },
  footer: { paddingHorizontal: 22, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.white },
  btn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default RequestOtpScreen;
