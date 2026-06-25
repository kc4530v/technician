import { useState } from 'react';
import { Image, LayoutChangeEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import ScreenHeader from '../components/ScreenHeader';
import { colors } from '../constants/colors';

const map = require('../../assets/images/nav-map.png');
const MAP_ASPECT = 1.046; // width / height of the extracted map image

const NavigationScreen = () => {
  const router = useRouter();
  // Size the map to its natural aspect so the whole route (origin -> destination)
  // shows with no cropping or white space.
  const [mapW, setMapW] = useState(0);
  const onMapLayout = (e: LayoutChangeEvent) => setMapW(e.nativeEvent.layout.width);

  return (
    <SafeAreaView testID="navigation-screen" edges={['top']} style={styles.safeArea}>
      <ScreenHeader title="Navigation" onBack={() => router.canGoBack() && router.back()} />

      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* From / To */}
          <View style={styles.locCard}>
            <View style={styles.locRow}>
              <View style={styles.locLeft}>
                <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                <View>
                  <Text style={styles.locLabel}>From</Text>
                  <Text style={styles.locValue}>My Location</Text>
                </View>
              </View>
              <Ionicons name="locate" size={20} color={colors.textPrimary} />
            </View>
            <View style={styles.locDivider} />
            <View style={styles.locRow}>
              <View style={styles.locLeft}>
                <View style={[styles.dot, { backgroundColor: colors.danger }]} />
                <View>
                  <Text style={styles.locLabel}>To</Text>
                  <Text style={styles.locValue}>Miyapur, Hyderabad</Text>
                </View>
              </View>
              <Ionicons name="locate" size={20} color={colors.textPrimary} />
            </View>
          </View>

          {/* Map */}
          <View onLayout={onMapLayout} style={styles.mapWrap}>
            {mapW > 0 && (
              <Image source={map} style={{ width: mapW, height: mapW / MAP_ASPECT }} resizeMode="cover" />
            )}
          </View>

          {/* ETA */}
          <View style={styles.etaCard}>
            <View style={styles.etaLeft}>
              <Text style={styles.etaTime}>18 min <Text style={styles.etaDist}>(7.2 km)</Text></Text>
              <Text style={styles.etaVia}>Via Miyapur Rd</Text>
              <Text style={styles.etaTraffic}>Traffic: Light</Text>
            </View>
            <Ionicons name="car" size={22} color={colors.textPrimary} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity testID="navigation-start" style={styles.startBtn} activeOpacity={0.85}>
            <Text style={styles.startText}>Start Navigation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.primary },
  flex: { flex: 1, backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  content: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 20 },
  locCard: { backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16 },
  locRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14 },
  locLeft: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 12, height: 12, borderRadius: 6, marginRight: 12 },
  locLabel: { fontSize: 12, color: colors.textSecondary },
  locValue: { fontSize: 15, fontWeight: '600', color: colors.textPrimary, marginTop: 1 },
  locDivider: { height: StyleSheet.hairlineWidth, backgroundColor: colors.divider, marginLeft: 24 },
  mapWrap: { width: '100%', borderRadius: 16, overflow: 'hidden', marginTop: 16, backgroundColor: colors.divider },
  etaCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.white, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 16, marginTop: 16 },
  etaLeft: { flex: 1 },
  etaTime: { fontSize: 18, fontWeight: '800', color: colors.textPrimary },
  etaDist: { fontSize: 14, fontWeight: '600', color: colors.textSecondary },
  etaVia: { fontSize: 13, color: colors.textSecondary, marginTop: 4 },
  etaTraffic: { fontSize: 13, color: colors.textSecondary, marginTop: 2 },
  footer: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18, backgroundColor: colors.background },
  startBtn: { height: 54, borderRadius: 12, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  startText: { color: colors.white, fontSize: 16, fontWeight: '700' },
});

export default NavigationScreen;
