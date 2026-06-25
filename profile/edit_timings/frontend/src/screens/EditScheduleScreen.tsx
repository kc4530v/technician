import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import Toggle from '../components/Toggle';
import TimeDropdown from '../components/TimeDropdown';
import Checkbox from '../components/Checkbox';
import AddDayButton from '../components/AddDayButton';
import { EDIT_SCHEDULE } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { DayRow, initialBreak, initialDays, initialVacation } from '../constants/editScheduleData';

const Dash = () => <Text style={styles.dash}>–</Text>;

// Editable schedule form: work days, break time, vacation mode.
const EditScheduleScreen = () => {
  const router = useRouter();
  const [days, setDays] = useState<DayRow[]>(initialDays);
  const [vacationOn, setVacationOn] = useState(initialVacation.enabled);

  const toggleDay = (id: string) =>
    setDays((prev) => prev.map((d) => (d.id === id ? { ...d, enabled: !d.enabled } : d)));
  const removeDay = (id: string) => setDays((prev) => prev.filter((d) => d.id !== id));

  return (
    <SafeAreaView testID={EDIT_SCHEDULE.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Edit Schedule"
        backTestID={EDIT_SCHEDULE.backButton}
        rightLabel="Save"
        rightTestID={EDIT_SCHEDULE.saveTopButton}
        onBack={() => router.canGoBack() && router.back()}
        onRight={() => {}}
      />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>Update your work days and timings</Text>

          {/* Work Schedule */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Work Schedule</Text>
            {days.map((row) => (
              <View key={row.id} style={styles.dayRow}>
                <Checkbox
                  testID={`${EDIT_SCHEDULE.dayCheckboxPrefix}-${row.id}`}
                  checked={row.enabled}
                  onToggle={() => toggleDay(row.id)}
                />
                <Text style={styles.day}>{row.day}</Text>
                <TimeDropdown value={row.start} />
                <Dash />
                <TimeDropdown value={row.end} />
                <TouchableOpacity
                  testID={`${EDIT_SCHEDULE.dayDeletePrefix}-${row.id}`}
                  onPress={() => removeDay(row.id)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  style={styles.trash}
                >
                  <Ionicons name="trash-outline" size={20} color={colors.danger} />
                </TouchableOpacity>
              </View>
            ))}
            <AddDayButton testID={EDIT_SCHEDULE.addDayButton} />
          </View>

          {/* Break Time */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Break Time</Text>
            <View style={styles.timeRow}>
              <TimeDropdown value={initialBreak.start} />
              <Dash />
              <TimeDropdown value={initialBreak.end} />
              <Ionicons name="time-outline" size={20} color={colors.primary} style={styles.clock} />
            </View>
            <Text style={styles.caption}>Set your daily break time</Text>
          </View>

          {/* Vacation Mode */}
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>Vacation Mode</Text>
              <Toggle
                testID={EDIT_SCHEDULE.vacationToggle}
                value={vacationOn}
                onValueChange={setVacationOn}
                onColor={colors.primary}
              />
            </View>
            <Text style={styles.fieldLabel}>Vacation Time</Text>
            <View style={styles.timeRow}>
              <TimeDropdown value={initialVacation.start} />
              <Dash />
              <TimeDropdown value={initialVacation.end} />
              <Ionicons name="time-outline" size={20} color={colors.primary} style={styles.clock} />
            </View>
            <Text style={styles.caption}>
              Enable vacation mode to pause job assignments during the selected time period.
            </Text>
          </View>

          {/* Note */}
          <View style={styles.note}>
            <Ionicons name="calendar-outline" size={18} color={colors.primary} />
            <Text style={styles.noteText}>
              <Text style={styles.noteBold}>Note: </Text>
              Changes will be applied to your availability immediately after saving.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            testID={EDIT_SCHEDULE.saveButton}
            activeOpacity={0.85}
            style={styles.saveButton}
            onPress={() => {}}
          >
            <Text style={styles.saveText}>Save Changes</Text>
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
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 0,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 14,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },
  day: {
    width: 64,
    fontSize: 13.5,
    color: colors.textPrimary,
    fontWeight: '500',
    marginLeft: 2,
  },
  trash: {
    paddingLeft: 2,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dash: {
    color: colors.textTertiary,
    fontSize: 14,
  },
  clock: {
    marginLeft: 4,
  },
  fieldLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  caption: {
    fontSize: 12.5,
    color: colors.textTertiary,
    marginTop: 10,
    lineHeight: 18,
  },
  note: {
    flexDirection: 'row',
    backgroundColor: colors.primarySoft,
    borderRadius: 12,
    padding: 14,
  },
  noteText: {
    flex: 1,
    fontSize: 12.5,
    color: colors.textSecondary,
    marginLeft: 10,
    lineHeight: 18,
  },
  noteBold: {
    color: colors.primary,
    fontWeight: '700',
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 18,
    backgroundColor: colors.background,
  },
  saveButton: {
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default EditScheduleScreen;
