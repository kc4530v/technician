// Static data for the Notifications screen.
// Icons are the original images extracted from the PDF (circle + glyph).

const ICON = {
  job: require('../../assets/images/icons/n-job.png'),
  review: require('../../assets/images/icons/n-review.png'),
  payment: require('../../assets/images/icons/n-payment.png'),
  schedule: require('../../assets/images/icons/n-schedule.png'),
  completed: require('../../assets/images/icons/n-completed.png'),
  offer: require('../../assets/images/icons/n-offer.png'),
};

export type Notif = {
  id: string;
  icon: any;
  title: string;
  desc: string;
  time: string;
  unread?: boolean;
};

export const today: Notif[] = [
  { id: 'n1', icon: ICON.job, title: 'New Job Assigned', desc: 'You have been assigned a new job\nAC-25910', time: '10:30 AM', unread: true },
  { id: 'n2', icon: ICON.review, title: 'Customer Reviewed You', desc: 'Suresh Yadav gave you a 5 star review', time: '08:45 AM', unread: true },
  { id: 'n3', icon: ICON.payment, title: 'Payment Received', desc: 'You have received ₹350 for\nAC-25874', time: '09:20 AM', unread: true },
];

export const yesterday: Notif[] = [
  { id: 'n4', icon: ICON.schedule, title: 'Schedule Updated', desc: 'Your schedule has been updated\nYesterday, 06:30 PM', time: '', unread: true },
  { id: 'n5', icon: ICON.completed, title: 'Job Completed', desc: 'AC-25874 has been marked as completed\nYesterday, 05:15 PM', time: '', unread: true },
  { id: 'n6', icon: ICON.offer, title: 'New Offer Available', desc: 'Check out new offers and benefits for you\nYesterday, 12:00 PM', time: '', unread: true },
];

export const tabs = ['All', 'Unread', 'Important'];
