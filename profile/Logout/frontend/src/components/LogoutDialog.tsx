import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LOGOUT } from '../../constants/testIds';
import { colors } from '../constants/colors';

type Props = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

// Centered "Logout?" confirmation dialog shown over a dimmed backdrop.
const LogoutDialog = ({ visible, onConfirm, onCancel }: Props) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
    <View style={styles.backdrop}>
      <View testID={LOGOUT.dialog} style={styles.card}>
        <View style={styles.iconCircle}>
          <Ionicons name="log-out-outline" size={30} color={colors.danger} />
        </View>

        <Text style={styles.title}>Logout?</Text>
        <Text style={styles.message}>Are you sure you want to logout from your account?</Text>

        <TouchableOpacity
          testID={LOGOUT.confirmButton}
          activeOpacity={0.85}
          style={styles.confirmButton}
          onPress={onConfirm}
        >
          <Text style={styles.confirmText}>Yes, Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID={LOGOUT.cancelButton}
          activeOpacity={0.7}
          style={styles.cancelButton}
          onPress={onCancel}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 36,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FDECEC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  confirmButton: {
    alignSelf: 'stretch',
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.danger,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  confirmText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  cancelButton: {
    alignSelf: 'stretch',
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  cancelText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default LogoutDialog;
