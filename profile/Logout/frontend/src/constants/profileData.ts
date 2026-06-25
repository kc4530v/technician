// Static mock data for the Profile & Stats screen (the screen that sits behind
// the logout confirmation dialog). Swap these for real API data later.

export const technicianProfile = {
  name: 'Ramesh Kumar',
  role: 'AC Technician',
  rating: 4.8,
  reviews: 126,
  online: true,
  avatar: require('../../assets/images/profile-avatar.png'),
};

export type MenuItem = {
  key: string;
  label: string;
  // Ionicons name for the leading icon
  icon: string;
  // optional right-aligned value shown before the chevron
  value?: string;
  // colour the value green (e.g. "Online")
  valueAccent?: boolean;
};

export const profileMenu: MenuItem[] = [
  { key: 'edit-profile', label: 'Edit Profile', icon: 'person-outline' },
  { key: 'my-earnings', label: 'My Earnings', icon: 'wallet-outline' },
  { key: 'my-reviews', label: 'My Reviews', icon: 'star-outline' },
  { key: 'performance', label: 'Performance Report', icon: 'stats-chart-outline' },
  { key: 'availability', label: 'Availability', icon: 'time-outline', value: 'Online', valueAccent: true },
  { key: 'service-areas', label: 'Service Areas', icon: 'location-outline', value: 'Hyderabad' },
  { key: 'leave-requests', label: 'My Leave Requests', icon: 'calendar-outline' },
  { key: 'settings', label: 'Settings', icon: 'settings-outline' },
  { key: 'help', label: 'Help & Support', icon: 'headset-outline' },
];
