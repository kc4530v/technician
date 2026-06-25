import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  onPress?: () => void;
  testID?: string;
};

// Dashed full-width "Add Another Day" button.
const AddDayButton = ({ onPress, testID }: Props) => (
  <TouchableOpacity testID={testID} activeOpacity={0.7} onPress={onPress} style={styles.button}>
    <Ionicons name="add-circle-outline" size={18} color={colors.primary} />
    <Text style={styles.text}>Add Another Day</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderStyle: 'dashed',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 14,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 8,
  },
});

export default AddDayButton;
