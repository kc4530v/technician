import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: 'up' | 'rating';
  note?: string;
  star?: boolean;
};

// One metric card: label, big value (optional star), a coloured delta and note.
const StatCard = ({ label, value, delta, deltaTone = 'up', note, star }: Props) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.valueRow}>
      <View style={styles.valueLeft}>
        <Text style={styles.value}>{value}</Text>
        {star && <Ionicons name="star" size={18} color={colors.star} style={styles.star} />}
      </View>
      {(!!delta || !!note) && (
        <View style={styles.deltaCol}>
          {!!delta && (
            <Text style={[styles.delta, deltaTone === 'rating' ? styles.deltaRating : styles.deltaUp]}>
              {delta}
            </Text>
          )}
          {!!note && <Text style={styles.note}>{note}</Text>}
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
  },
  label: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  star: {
    marginLeft: 4,
  },
  deltaCol: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  delta: {
    fontSize: 12.5,
    fontWeight: '700',
  },
  deltaUp: {
    color: colors.success,
  },
  deltaRating: {
    color: colors.warning,
  },
  note: {
    fontSize: 11.5,
    color: colors.textTertiary,
    marginTop: 4,
    textAlign: 'right',
  },
});

export default StatCard;
