import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

type Props = {
  // 'High' | 'Medium' | 'Low' (or any label; tone derives from it)
  label: string;
};

const TONES: Record<string, { bg: string; fg: string }> = {
  high: { bg: '#FDECEC', fg: colors.danger },
  medium: { bg: colors.warningSoft, fg: '#B45309' },
  low: { bg: colors.successSoft, fg: colors.success },
};

// Small coloured priority pill (High / Medium / Low).
const PriorityBadge = ({ label }: Props) => {
  const tone = TONES[label.toLowerCase()] ?? TONES.medium;
  return (
    <View style={[styles.badge, { backgroundColor: tone.bg }]}>
      <Text style={[styles.text, { color: tone.fg }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
});

export default PriorityBadge;
