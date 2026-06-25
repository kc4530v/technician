import { useState } from 'react';
import { Image, LayoutChangeEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import AreaRow from '../components/AreaRow';
import { AREAS } from '../../constants/testIds';
import { colors } from '../constants/colors';
import { areas, serviceMap } from '../constants/areasData';

// Service Areas: a map card with the coverage polygon and a list of areas.
const ServiceAreasScreen = () => {
  const router = useRouter();
  // Render the (square) map in a square box matching the card width so the whole
  // coverage map shows with no white space and no zoom/crop.
  const [mapW, setMapW] = useState(0);
  const onMapLayout = (e: LayoutChangeEvent) => setMapW(e.nativeEvent.layout.width);

  return (
    <SafeAreaView testID={AREAS.screen} edges={['top']} style={styles.safeArea}>
      <ScreenHeader
        title="Service Areas"
        backTestID={AREAS.backButton}
        onBack={() => router.canGoBack() && router.back()}
      />

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Map card */}
        <View style={styles.mapCard}>
          <View style={styles.mapHeader}>
            <Text style={styles.mapTitle}>Your Service Areas</Text>
            <TouchableOpacity testID={AREAS.editButton} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View onLayout={onMapLayout} style={styles.mapWrap}>
            {mapW > 0 && (
              <Image source={serviceMap} style={{ width: mapW, height: mapW }} resizeMode="cover" />
            )}
          </View>
        </View>

        {/* Areas list */}
        <View style={styles.listCard}>
          {areas.map((a, i) => (
            <AreaRow
              key={a.key}
              testID={`${AREAS.rowPrefix}-${a.key}`}
              name={a.name}
              distance={a.distance}
              showDivider={i < areas.length - 1}
            />
          ))}
        </View>

        {/* Add new area */}
        <TouchableOpacity testID={AREAS.addButton} activeOpacity={0.85} style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={20} color={colors.white} />
          <Text style={styles.addText}>Add New Area</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  flex: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  mapCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
  },
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  mapTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  editText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  mapWrap: {
    width: '100%',
  },
  listCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    marginBottom: 18,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  addText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});

export default ServiceAreasScreen;
