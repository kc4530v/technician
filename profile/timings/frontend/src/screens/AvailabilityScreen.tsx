import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import SectionHeader from '../components/SectionHeader';
import Toggle from '../components/Toggle';
import { AVAILABILITY } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { breakTime, workSchedule } from '../constants/availabilityData';

const TimeChip = ({ value }: { value: string }) => (
  <View style={styles.timeChip}>
    <Text style={styles.timeText}>{value}</Text>
  </View>
);

// Availability screen: online status, work schedule, break time, vacation mode.
const AvailabilityScreen = () => {
  const router = useRouter();
  const [online, setOnline] = useState(true);
  const [vacation, setVacation] = useState(false);

  return (
    <SafeAreaView testID={AVAILABILITY.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Availability"
        backTestID={AVAILABILITY.backButton}
        onBack={() => router.canGoBack() && router.back()}
      />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Current Status */}
          <SectionHeader title="Current Status" />
          <View style={styles.card}>
            <View style={styles.statusRow}>
              <Text style={styles.statusText}>{online ? 'Online' : 'Offline'}</Text>
              <Toggle testID={AVAILABILITY.statusToggle} value={online} onValueChange={setOnline} />
            </View>
          </View>

          {/* Work Schedule */}
          <SectionHeader
            title="Work Schedule"
            actionLabel="Edit Schedule"
            actionTestID={AVAILABILITY.editSchedule}
          />
          <View style={styles.card}>
            {workSchedule.map((row, i) => (
              <View key={row.key} style={[styles.scheduleRow, i > 0 && styles.divider]}>
                <Text style={styles.day}>{row.day}</Text>
                <View style={styles.timeGroup}>
                  <TimeChip value={row.start} />
                  <Text style={styles.dash}>–</Text>
                  <TimeChip value={row.end} />
                </View>
                <Ionicons name="time-outline" size={20} color={colors.primary} />
              </View>
            ))}
          </View>

          {/* Break Time */}
          <SectionHeader
            title="Break Time"
            actionLabel="Edit Break Time"
            actionTestID={AVAILABILITY.editBreak}
          />
          <View style={styles.card}>
            <View style={styles.breakRow}>
              <View style={styles.timeGroup}>
                <TimeChip value={breakTime.start} />
                <Text style={styles.dash}>–</Text>
                <TimeChip value={breakTime.end} />
              </View>
              <Ionicons name="time-outline" size={20} color={colors.primary} />
            </View>
          </View>

          {/* Vacation Mode */}
          <SectionHeader
            title="Vacation Mode"
            actionLabel="Edit Vacation"
            actionTestID={AVAILABILITY.editVacation}
          />
          <View style={styles.card}>
            <View style={styles.vacationRow}>
              <Text style={styles.vacationText}>
                Enable vacation mode to{'\n'}pause job assignments
              </Text>
              <Toggle testID={AVAILABILITY.vacationToggle} value={vacation} onValueChange={setVacation} />
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            testID={AVAILABILITY.updateButton}
            activeOpacity={0.85}
            style={styles.updateButton}
            onPress={() => {}}
          >
            <Text style={styles.updateText}>Update Schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 18,
    paddingTop: 6,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.success,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  divider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.divider,
  },
  day: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
    width: 76,
  },
  timeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  timeChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 86,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  dash: {
    marginHorizontal: 8,
    color: colors.textTertiary,
    fontSize: 14,
  },
  breakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  vacationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  vacationText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginRight: 12,
  },
  footer: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: colors.white,
  },
  updateButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AvailabilityScreen;
