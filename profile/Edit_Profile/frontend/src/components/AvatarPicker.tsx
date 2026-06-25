import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { EDIT_PROFILE } from '../../constants/testIds';
import { colors } from '../constants/colors';

type Props = {
  source: any;
  onPress?: () => void;
};

// Centered circular avatar with a small camera badge for changing the photo.
const AvatarPicker = ({ source, onPress }: Props) => (
  <View style={styles.wrap}>
    <View style={styles.avatarRing}>
      <Image source={source} style={styles.avatar} resizeMode="cover" />
    </View>
    <TouchableOpacity
      testID={EDIT_PROFILE.avatarCamera}
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.cameraBadge}
    >
      <Ionicons name="camera" size={16} color={colors.primary} />
    </TouchableOpacity>
  </View>
);

const SIZE = 96;

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'center',
    width: SIZE,
    height: SIZE,
    marginTop: 18,
    marginBottom: 18,
  },
  avatarRing: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.primarySoft,
    overflow: 'hidden',
  },
  avatar: {
    width: SIZE,
    height: SIZE,
  },
  cameraBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AvatarPicker;
