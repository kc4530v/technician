import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../constants/colors';

type Props = {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  online?: boolean;
  avatar: any;
};

// White card at the top of the Profile screen: avatar, name, role, star rating
// and an online status pill.
const ProfileHeaderCard = ({ name, role, rating, reviews, online = true, avatar }: Props) => (
  <View testID="profile-header-card" style={styles.card}>
    <View style={styles.avatarWrap}>
      <Image source={avatar} style={styles.avatar} resizeMode="cover" />
    </View>

    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color={colors.star} />
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        <Text style={styles.reviews}> ({reviews} reviews)</Text>
      </View>

      {online && (
        <View style={styles.onlinePill}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>Online</Text>
        </View>
      )}
    </View>
  </View>
);

const AVATAR = 76;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 14,
    marginTop: 14,
    borderRadius: 16,
    padding: 16,
  },
  avatarWrap: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: colors.primarySoft,
    overflow: 'hidden',
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  role: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginLeft: 4,
  },
  reviews: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  onlinePill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.successSoft,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.success,
    marginRight: 6,
  },
  onlineText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.success,
  },
});

export default ProfileHeaderCard;
