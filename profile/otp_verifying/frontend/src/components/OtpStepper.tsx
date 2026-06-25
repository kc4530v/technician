import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

export type Step = {
  label: string;
  state: 'done' | 'active' | 'pending';
};

type Props = {
  steps: Step[];
};

// Horizontal 3-step progress: done (check), active (filled dot), pending (ring).
const OtpStepper = ({ steps }: Props) => (
  <View style={styles.wrap}>
    <View style={styles.row}>
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <View style={styles.dotWrap}>
            <View
              style={[
                styles.dot,
                step.state === 'done' && styles.dotDone,
                step.state === 'active' && styles.dotActive,
                step.state === 'pending' && styles.dotPending,
              ]}
            >
              {step.state === 'done' && <Ionicons name="checkmark" size={14} color={colors.primary} />}
              {step.state === 'active' && <View style={styles.innerDot} />}
            </View>
          </View>
          {i < steps.length - 1 && <View style={styles.line} />}
        </Fragment>
      ))}
    </View>
    <View style={styles.labels}>
      {steps.map((step) => (
        <Text
          key={step.label}
          style={[styles.label, step.state === 'active' && styles.labelActive]}
        >
          {step.label}
        </Text>
      ))}
    </View>
  </View>
);

const DOT = 26;

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotWrap: {
    width: DOT,
  },
  dot: {
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotDone: {
    backgroundColor: colors.primarySoft,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  dotPending: {
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  innerDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    width: 80,
    textAlign: 'center',
  },
  labelActive: {
    color: colors.primary,
    fontWeight: '700',
  },
});

export default OtpStepper;
