import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  languages: string[];
  onRemove: (lang: string) => void;
};

// Removable language pills shown inside the "Languages Known" field.
const LanguageChips = ({ languages, onRemove }: Props) => (
  <View style={styles.wrap}>
    {languages.map((lang) => (
      <View key={lang} style={styles.chip}>
        <Text style={styles.chipText}>{lang}</Text>
        <TouchableOpacity
          testID={`edit-profile-language-remove-${lang.toLowerCase()}`}
          onPress={() => onRemove(lang)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="close" size={15} color={colors.primary} />
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 6,
  },
  chipText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    marginRight: 6,
  },
});

export default LanguageChips;
