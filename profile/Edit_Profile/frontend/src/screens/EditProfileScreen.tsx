import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import AvatarPicker from '../components/AvatarPicker';
import EditField from '../components/EditField';
import LanguageChips from '../components/LanguageChips';
import { EDIT_PROFILE } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { editProfileInitial } from '../constants/editProfileData';

// Edit Profile form: avatar with camera badge, labelled fields and a Save button.
const EditProfileScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState(editProfileInitial.fullName);
  const [mobile, setMobile] = useState(editProfileInitial.mobile);
  const [email, setEmail] = useState(editProfileInitial.email);
  const [address, setAddress] = useState(editProfileInitial.address);
  const [languages, setLanguages] = useState(editProfileInitial.languages);

  const removeLanguage = (lang: string) =>
    setLanguages((prev) => prev.filter((l) => l !== lang));

  return (
    <SafeAreaView testID={EDIT_PROFILE.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Edit Profile"
        backTestID={EDIT_PROFILE.backButton}
        onBack={() => router.canGoBack() && router.back()}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.sheet}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <AvatarPicker source={editProfileInitial.avatar} />

          <EditField
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            testID={EDIT_PROFILE.fullNameInput}
          />
          <EditField
            label="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            testID={EDIT_PROFILE.mobileInput}
          />
          <EditField
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            testID={EDIT_PROFILE.emailInput}
          />
          <EditField
            label="Date of Birth"
            value={editProfileInitial.dob}
            editable={false}
            icon="calendar-outline"
            testID={EDIT_PROFILE.dobField}
          />
          <EditField
            label="Gender"
            value={editProfileInitial.gender}
            editable={false}
            icon="chevron-down"
            testID={EDIT_PROFILE.genderField}
          />
          <EditField label="Languages Known" icon="chevron-down">
            <LanguageChips languages={languages} onRemove={removeLanguage} />
          </EditField>
          <EditField
            label="Address"
            value={address}
            onChangeText={setAddress}
            icon="location-outline"
            testID={EDIT_PROFILE.addressInput}
          />

          <TouchableOpacity
            testID={EDIT_PROFILE.saveButton}
            activeOpacity={0.85}
            style={styles.saveButton}
            onPress={() => {}}
          >
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  sheet: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 0,
  },
  flex: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 28,
  },
  saveButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  saveText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default EditProfileScreen;
