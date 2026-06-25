import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import CompanyHeader from '../components/CompanyHeader';
import { LOGIN } from '../../constants/testIds';
import { colors } from '../constants/colors';

const technician = require('../../assets/images/technician.png');

const LoginScreen = () => {
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState('CBAC1256');

  const canSubmit = employeeId.trim().length > 0;

  return (
    <SafeAreaView testID="login-screen" edges={['top']} style={styles.safeArea}>
      <CompanyHeader
        name="Cool Breeze AC Services"
        status="Online"
        verified
        online
        onBack={() => router.canGoBack() && router.back()}
        onMenu={() => {}}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <View style={styles.card}>
          {/* Technician illustration */}
          <View style={styles.avatarWrap}>
            <Image source={technician} style={styles.avatar} resizeMode="cover" />
          </View>

          <Text style={styles.heading}>Enter your Employee ID</Text>
          <Text style={styles.subheading}>Use the ID provided by your owner</Text>

          {/* Employee ID field */}
          <View style={styles.field}>
            <Text style={styles.label}>Employee ID</Text>
            <View style={styles.inputRow}>
              <TextInput
                testID={LOGIN.employeeIdInput}
                value={employeeId}
                onChangeText={setEmployeeId}
                placeholder="Enter Employee ID"
                placeholderTextColor={colors.textTertiary}
                autoCapitalize="characters"
                autoCorrect={false}
                style={styles.input}
              />
              {employeeId.length > 0 && (
                <TouchableOpacity
                  testID={LOGIN.clearButton}
                  onPress={() => setEmployeeId('')}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons name="close-circle" size={20} color={colors.textTertiary} />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Login button */}
          <TouchableOpacity
            testID={LOGIN.submitButton}
            activeOpacity={0.85}
            disabled={!canSubmit}
            style={[styles.loginButton, !canSubmit && styles.loginButtonDisabled]}
            onPress={() => {}}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.flex} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Need help? </Text>
            <TouchableOpacity testID={LOGIN.contactSupportLink} onPress={() => {}}>
              <Text style={styles.footerLink}>Contact Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const AVATAR = 124;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  flex: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 0,
    paddingHorizontal: 28,
    paddingTop: 26,
    paddingBottom: 28,
    alignItems: 'center',
  },
  avatarWrap: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 8,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
  },
  heading: {
    marginTop: 22,
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subheading: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  field: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  label: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    paddingVertical: 0,
  },
  loginButton: {
    alignSelf: 'stretch',
    marginTop: 22,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonDisabled: {
    opacity: 0.5,
  },
  loginButtonText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
});

export default LoginScreen;
