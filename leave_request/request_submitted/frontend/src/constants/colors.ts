// Central colour palette for the app. Import as:
//   import { colors } from '../constants/colors';
// Keep all brand/semantic colours here so screens stay consistent.

export const colors = {
  // Primary purple palette — the single brand purple is `primary`.
  primary: '#6A4DBB',
  primaryDark: '#5A22B5',
  primaryLight: '#8B5CF6',
  primarySoft: '#EEE6FB',
  // Status & accent colours
  success: '#16A34A',
  successSoft: '#DCFCE7',
  warning: '#F59E0B',
  warningSoft: '#FEF3C7',
  danger: '#EF4444',
  info: '#3B82F6',
  green: '#22C55E',
  orange: '#F97316',
  // Neutral palette
  white: '#FFFFFF',
  background: '#F6F7FB',
  card: '#FFFFFF',
  border: '#ECEAF3',
  divider: '#F1F0F6',
  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textOnPrimary: '#FFFFFF',
  // Star/rating
  star: '#F5B400',
  // Logo brand colours
  brandBlueDark: '#0B2A5B',
  brandBlue: '#1E5FBF',
} as const;

export type ColorKey = keyof typeof colors;
