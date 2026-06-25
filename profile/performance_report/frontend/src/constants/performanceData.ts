// Static data for the Performance Report screen.

export type Stat = {
  key: string;
  label: string;
  value: string;
  delta?: string;
  // 'up' => green, 'rating' => orange/star accent
  deltaTone?: 'up' | 'rating';
  note?: string;
  star?: boolean;
};

export const stats: Stat[] = [
  { key: 'jobs', label: 'Jobs Completed', value: '28', delta: '+12%', deltaTone: 'up', note: 'vs last month' },
  { key: 'tickets', label: 'Active Tickets', value: '6' },
  { key: 'acceptance', label: 'Acceptance Rate', value: '92%', delta: '+5%', deltaTone: 'up' },
  { key: 'completion', label: 'Completion Rate', value: '96%', delta: '+3%', deltaTone: 'up' },
  { key: 'rating', label: 'Average Rating', value: '4.8', delta: '+0.1', deltaTone: 'rating', star: true },
  { key: 'earnings', label: 'Total Earnings', value: '₹18,600', delta: '+19%', deltaTone: 'up' },
];

export const satisfaction = { percent: 98, label: 'Excellent' };

export const earnings = {
  total: '₹18,600',
  delta: '+15%',
  // y values in thousands, x labels along the bottom
  points: [5, 4, 6, 6, 5, 9, 8, 12, 13, 13, 18, 16, 17],
  xLabels: ['01', '05', '10', '15', '20', '25', '30'],
  yMax: 20, // 20K
};
