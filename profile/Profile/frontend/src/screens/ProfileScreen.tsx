import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import ProfileHeaderCard from '../components/ProfileHeaderCard';
import ProfileMenuRow from '../components/ProfileMenuRow';
import LogoutDialog from '../components/LogoutDialog';
import { LOGOUT, PROFILE } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { profileMenu, technicianProfile } from '../constants/profileData';

// Profile & Stats screen: profile card + settings menu. Tapping the red
// "Logout" row opens the confirmation dialog.
const ProfileScreen = () => {
  const router = useRouter();
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleConfirm = () => {
    setConfirmVisible(false);
    // Wire real sign-out here, e.g. router.replace('/login').
  };

  return (
    <SafeAreaView testID={PROFILE.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Profile & Stats"
        backTestID={PROFILE.backButton}
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeaderCard
          name={technicianProfile.name}
          role={technicianProfile.role}
          rating={technicianProfile.rating}
          reviews={technicianProfile.reviews}
          online={technicianProfile.online}
          avatar={technicianProfile.avatar}
        />

        <View style={styles.menu}>
          {profileMenu.map((item) => (
            <ProfileMenuRow
              key={item.key}
              icon={item.icon}
              label={item.label}
              value={item.value}
              valueAccent={item.valueAccent}
            />
          ))}

          <ProfileMenuRow
            testID={LOGOUT.row}
            icon="log-out-outline"
            label="Logout"
            danger
            showChevron={false}
            onPress={() => setConfirmVisible(true)}
          />
        </View>
      </ScrollView>

      <LogoutDialog
        visible={confirmVisible}
        onConfirm={handleConfirm}
        onCancel={() => setConfirmVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 28,
  },
  menu: {
    marginTop: 14,
    backgroundColor: colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
});

export default ProfileScreen;
