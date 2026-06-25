import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import SettingsRow from '../components/SettingsRow';
import { SETTINGS } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { initialSettings, SettingItem } from '../constants/settingsData';

// App Settings screen: a card of toggle/select rows plus a Save button.
const SettingsScreen = () => {
  const router = useRouter();
  const [settings, setSettings] = useState<SettingItem[]>(initialSettings);

  const toggle = (key: string) =>
    setSettings((prev) =>
      prev.map((s) =>
        s.key === key && s.type === 'toggle' ? { ...s, value: !(s.value as boolean) } : s,
      ),
    );

  return (
    <SafeAreaView testID={SETTINGS.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader title="Settings" backTestID={SETTINGS.backButton} onBack={() => router.canGoBack() && router.back()} />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>App Settings</Text>

        <View style={styles.card}>
          {settings.map((s) => {
            const isToggle = s.type === 'toggle';
            const display = isToggle ? ((s.value as boolean) ? 'On' : 'Off') : (s.value as string);
            const tone = isToggle ? ((s.value as boolean) ? 'on' : 'off') : 'neutral';
            return (
              <SettingsRow
                key={s.key}
                testID={`${SETTINGS.rowPrefix}-${s.key}`}
                icon={s.icon}
                label={s.label}
                value={display}
                valueTone={tone}
                onPress={isToggle ? () => toggle(s.key) : undefined}
              />
            );
          })}
        </View>

        <TouchableOpacity
          testID={SETTINGS.saveButton}
          activeOpacity={0.85}
          style={styles.saveButton}
          onPress={() => {}}
        >
          <Text style={styles.saveText}>Save Settings</Text>
        </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 0,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.white,
  },
  saveButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  saveText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default SettingsScreen;
