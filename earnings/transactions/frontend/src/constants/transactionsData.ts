// Static data for the Transactions screen.

export type TabKey = 'all' | 'completed' | 'cancelled';

export type Txn = {
  id: string;
  type: string;
  location: string;
  datetime: string;
  amount: string;
  status: 'Completed' | 'Cancelled';
};

const completed: Txn[] = [
  { id: 'AC-25874', type: 'AC Not Cooling', location: 'Miyapur, Hyderabad', datetime: 'May 24, 2025 - 12:05 PM', amount: '₹350', status: 'Completed' },
  { id: 'AC-25741', type: 'AC Gas Filling', location: 'Kukatpally, Hyderabad', datetime: 'May 24, 2025 - 09:15 AM', amount: '₹350', status: 'Completed' },
  { id: 'AC-25688', type: 'AC Installation', location: 'Ameerpet, Hyderabad', datetime: 'May 23, 2025 - 02:30 PM', amount: '₹300', status: 'Completed' },
  { id: 'AC-25610', type: 'AC Maintenance', location: 'Madhapur, Hyderabad', datetime: 'May 22, 2025 - 11:30 AM', amount: '₹280', status: 'Completed' },
  { id: 'AC-25532', type: 'AC Repair', location: 'Gachibowli, Hyderabad', datetime: 'May 22, 2025 - 04:45 PM', amount: '₹300', status: 'Completed' },
];

const cancelled: Txn[] = [
  { id: 'AC-25498', type: 'AC Servicing', location: 'Kondapur, Hyderabad', datetime: 'May 21, 2025 - 03:10 PM', amount: '₹0', status: 'Cancelled' },
];

export const txnsByTab: Record<TabKey, Txn[]> = {
  all: [...completed, ...cancelled],
  completed,
  cancelled,
};

export const tabs: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
];
