// Static data for the Dashboard screen.

export const technician = {
  name: 'Suresh Kumar',
  role: 'AC Technician',
  rating: 4.8,
  reviews: 128,
  avatar: require('../../assets/images/dashboard-avatar.png'),
};

export const summary = { assigned: 3, inProgress: 1, completed: 1 };

export type Job = {
  id: string;
  type: string;
  location: string;
  time: string;
  priority: 'High' | 'Medium' | 'Low';
  icon: any;
};

export const todaysJobs: Job[] = [
  { id: 'AC-25874', type: 'AC Not Cooling', location: 'Miyapur, Hyderabad', time: '10:33 AM', priority: 'High', icon: require('../../assets/images/icons/not-cooling.png') },
  { id: 'AC-26001', type: 'AC Installation', location: 'Kukatpally, Hyderabad', time: '12:30 PM', priority: 'Low', icon: require('../../assets/images/icons/installation.png') },
  { id: 'AC-26015', type: 'AC Gas Filling', location: 'Ameerpet, Hyderabad', time: '02:45 PM', priority: 'Medium', icon: require('../../assets/images/icons/gas-filling.png') },
];

export const earnings = { week: '₹4,200', month: '₹18,600' };
