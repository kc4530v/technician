import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import StatCard from '../components/StatCard';
import EarningsChart from '../components/EarningsChart';
import { PERFORMANCE } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { earnings, satisfaction, stats } from '../constants/performanceData';

// Performance Report: period filter, metric grid, satisfaction bar, earnings chart.
const PerformanceScreen = () => {
  const router = useRouter();

  // group stats into rows of two for the grid
  const rows = stats.reduce<(typeof stats)[]>((acc, s, i) => {
    if (i % 2 === 0) acc.push([s]);
    else acc[acc.length - 1].push(s);
    return acc;
  }, []);

  return (
    <SafeAreaView testID={PERFORMANCE.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Performance Report"
        backTestID={PERFORMANCE.backButton}
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Period filter */}
        <TouchableOpacity testID={PERFORMANCE.periodSelect} activeOpacity={0.7} style={styles.period}>
          <Text style={styles.periodText}>This Month</Text>
          <Ionicons name="chevron-down" size={18} color={colors.textSecondary} />
          <View style={styles.flexSpacer} />
          <Ionicons name="calendar-outline" size={20} color={colors.primary} />
        </TouchableOpacity>

        {/* Stat grid */}
        {rows.map((row, i) => (
          <View key={i} style={styles.gridRow}>
            {row.map((s) => (
              <StatCard
                key={s.key}
                label={s.label}
                value={s.value}
                delta={s.delta}
                deltaTone={s.deltaTone}
                note={s.note}
                star={s.star}
              />
            ))}
            {row.length === 1 && <View style={styles.cardSpacer} />}
          </View>
        ))}

        {/* Customer Satisfaction */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Customer Satisfaction</Text>
          <View style={styles.satRow}>
            <Text style={styles.satValue}>{satisfaction.percent}%</Text>
            <Text style={styles.satTag}>{satisfaction.label}</Text>
          </View>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${satisfaction.percent}%` }]} />
          </View>
        </View>

        {/* Earnings Overview */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Earnings Overview</Text>
          <View style={styles.earnRow}>
            <Text style={styles.earnValue}>{earnings.total}</Text>
            <Text style={styles.earnDelta}>{earnings.delta}</Text>
          </View>
          <EarningsChart points={earnings.points} xLabels={earnings.xLabels} yMax={earnings.yMax} />
        </View>
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
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  period: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  periodText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    marginRight: 6,
  },
  flexSpacer: {
    flex: 1,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  cardSpacer: {
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    marginTop: 4,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  satRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  satValue: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  satTag: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.success,
    marginLeft: 10,
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.divider,
    marginTop: 12,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  earnRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  earnValue: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  earnDelta: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.success,
    marginLeft: 10,
  },
});

export default PerformanceScreen;
