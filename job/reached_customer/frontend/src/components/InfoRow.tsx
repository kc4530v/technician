import { ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  icon?: string;
  // original icon image extracted from the PDF (takes priority over `icon`)
  iconImage?: any;
  label: string;
  value?: string;
  // optional extra line under the value (e.g. "2.4 km away")
  sub?: string;
  // optional trailing element (e.g. a call/location button)
  trailing?: ReactNode;
  divider?: boolean;
};

// A labelled info line: leading icon, small grey label, value (+ optional sub),
// and an optional trailing element.
const InfoRow = ({ icon, iconImage, label, value, sub, trailing, divider = true }: Props) => (
  <View style={[styles.row, divider && styles.divider]}>
    {iconImage ? (
      <Image source={iconImage} style={styles.iconImg} resizeMode="contain" />
    ) : (
      <Ionicons name={icon as any} size={18} color={colors.primary} style={styles.icon} />
    )}
    <View style={styles.body}>
      <Text style={styles.label}>{label}</Text>
      {!!value && <Text style={styles.value}>{value}</Text>}
      {!!sub && <Text style={styles.sub}>{sub}</Text>}
    </View>
    {trailing}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  icon: {
    marginTop: 2,
    marginRight: 12,
  },
  iconImg: {
    width: 22,
    height: 22,
    marginTop: 0,
    marginRight: 12,
  },
  body: {
    flex: 1,
  },
  label: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginBottom: 3,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  sub: {
    fontSize: 12.5,
    color: colors.textSecondary,
    marginTop: 2,
  },
});

export default InfoRow;
