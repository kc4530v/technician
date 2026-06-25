import { ReactNode } from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  label: string;
  value?: string;
  onChangeText?: (t: string) => void;
  // when false the value is shown as static text (e.g. a select/date field)
  editable?: boolean;
  // trailing Ionicons name (calendar, chevron-down, location, ...)
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  // custom box content (e.g. language chips) instead of value/TextInput
  children?: ReactNode;
  testID?: string;
};

// A labelled form field: small grey label above a bordered input box, with an
// optional trailing purple icon.
const EditField = ({
  label,
  value,
  onChangeText,
  editable = true,
  icon,
  keyboardType,
  children,
  testID,
}: Props) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.box, !!children && styles.boxFlexible]}>
      <View style={styles.content}>
        {children ??
          (editable ? (
            <TextInput
              testID={testID}
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              placeholderTextColor={colors.textTertiary}
            />
          ) : (
            <Text testID={testID} style={styles.input}>
              {value}
            </Text>
          ))}
      </View>
      {!!icon && <Ionicons name={icon as any} size={20} color={colors.primary} />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  field: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#E4E2EC',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
  },
  boxFlexible: {
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '500',
    paddingVertical: 0,
  },
});

export default EditField;
