import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { colors } from '../constants/colors';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'back'];

const EnterOtpScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('7249');

  const press = (k: string) => {
    if (k === 'back') setOtp((p) => p.slice(0, -1));
    else if (k && otp.length < 4) setOtp((p) => p + k);
  };

  const digits = [0, 1, 2, 3].map((i) => otp[i] ?? '');

  return (
    <SafeAreaView testID="enter-otp-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader name="Cool Breeze AC Services" status="Online" verified online onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <Text style={styles.title}>Enter OTP received{'\n'}from customer</Text>

        <View style={styles.boxes}>
          {digits.map((d, i) => (
            <View key={i} style={styles.box}>
              <Text style={styles.boxText}>{d}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.validLabel}>This OTP is valid for</Text>
        <Text style={styles.validTime}>09:58</Text>
        <TouchableOpacity>
          <Text style={styles.resend}>Didn&apos;t receive OTP?</Text>
        </TouchableOpacity>

        <View style={styles.keypad}>
          {keys.map((k, i) => (
            <TouchableOpacity
              key={i}
              testID={k ? `enter-otp-key-${k}` : undefined}
              activeOpacity={k ? 0.6 : 1}
              disabled={!k}
              onPress={() => press(k)}
              style={styles.key}
            >
              {k === 'back' ? (
                <Ionicons name="backspace-outline" size={26} color={colors.textPrimary} />
              ) : (
                <Text style={styles.keyText}>{k}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 24, paddingTop: 28, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '800', color: colors.textPrimary, textAlign: 'center' },
  boxes: { flexDirection: 'row', gap: 16, marginTop: 36 },
  box: { width: 64, height: 64, borderRadius: 14, borderWidth: 1.5, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  boxText: { fontSize: 28, fontWeight: '700', color: colors.textPrimary },
  validLabel: { fontSize: 14, color: colors.textSecondary, marginTop: 34 },
  validTime: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginTop: 6 },
  resend: { fontSize: 14, fontWeight: '600', color: colors.primary, marginTop: 16 },
  keypad: { flexDirection: 'row', flexWrap: 'wrap', backgroundColor: colors.background, borderRadius: 16, marginTop: 26, paddingVertical: 10, alignSelf: 'stretch' },
  key: { width: '33.33%', height: 64, alignItems: 'center', justifyContent: 'center' },
  keyText: { fontSize: 24, fontWeight: '600', color: colors.textPrimary },
});

export default EnterOtpScreen;
