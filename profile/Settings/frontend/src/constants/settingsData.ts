// Static config for the App Settings rows. `toggle` rows flip On/Off when
// tapped; `select` rows show a fixed value (e.g. Language).

export type SettingType = 'toggle' | 'select';

export type SettingItem = {
  key: string;
  label: string;
  icon: string; // Ionicons name
  type: SettingType;
  // initial value: boolean for toggles, string for selects
  value: boolean | string;
};

export const initialSettings: SettingItem[] = [
  { key: 'notifications', label: 'Notifications', icon: 'notifications-outline', type: 'toggle', value: true },
  { key: 'sound', label: 'Sound', icon: 'volume-high-outline', type: 'toggle', value: true },
  { key: 'language', label: 'Language', icon: 'globe-outline', type: 'select', value: 'English' },
  { key: 'gps', label: 'GPS Tracking', icon: 'location-outline', type: 'toggle', value: true },
  { key: 'auto-accept', label: 'Auto Accept Jobs', icon: 'bullseye', type: 'toggle', value: false },
];
