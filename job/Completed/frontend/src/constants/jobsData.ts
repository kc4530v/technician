// Static data for the Jobs list (Assigned / In Progress / Completed tabs).
// Icons are the original AC-themed images extracted from the PDFs.

const ICON = {
  notCooling: require('../../assets/images/icons/not-cooling.png'),
  installation: require('../../assets/images/icons/installation.png'),
  gasFilling: require('../../assets/images/icons/gas-filling.png'),
  servicing: require('../../assets/images/icons/servicing.png'),
  filterCleaning: require('../../assets/images/icons/filter-cleaning.png'),
  repair: require('../../assets/images/icons/repair.png'),
};

export type TabKey = 'assigned' | 'in-progress' | 'completed';

export type JobItem = {
  id: string;
  type: string;
  customer: string;
  location: string;
  time: string;
  icon: any;
  priority?: 'High' | 'Medium' | 'Low';
  statusLine?: string;
  completed?: boolean;
};

export const jobsByTab: Record<TabKey, JobItem[]> = {
  assigned: [
    { id: 'AC-25874', type: 'AC Not Cooling', customer: 'Suresh Yadav', location: 'Miyapur, Hyderabad', time: '10:33 AM', priority: 'High', icon: ICON.notCooling },
    { id: 'AC-26001', type: 'AC Installation', customer: 'Amit Verma', location: 'Kukatpally, Hyderabad', time: '12:30 PM', priority: 'Low', icon: ICON.installation },
    { id: 'AC-26015', type: 'AC Gas Filling', customer: 'Rahul Singh', location: 'Ameerpet, Hyderabad', time: '02:45 PM', priority: 'Medium', icon: ICON.gasFilling },
  ],
  'in-progress': [
    { id: 'AC-26001', type: 'AC Installation', customer: 'Amit Verma', location: 'Kukatpally, Hyderabad', time: '12:30 PM', priority: 'Low', statusLine: 'Installation in Progress', icon: ICON.installation },
    { id: 'AC-26053', type: 'AC Repair', customer: 'Sanjay Gupta', location: 'Secunderabad, Hyderabad', time: '01:15 PM', priority: 'Medium', statusLine: 'Diagnosing the Issue', icon: ICON.repair },
  ],
  completed: [
    { id: 'AC-25874', type: 'AC Not Cooling', customer: 'Suresh Yadav', location: 'Miyapur, Hyderabad', time: '10:30 AM', statusLine: 'Completed at 12:15 PM', completed: true, icon: ICON.notCooling },
    { id: 'AC-25718', type: 'AC Installation', customer: 'Ravi Kumar', location: 'Kondapur, Hyderabad', time: '09:15 AM', statusLine: 'Completed at 11:40 AM', completed: true, icon: ICON.installation },
    { id: 'AC-25644', type: 'AC Gas Filling', customer: 'Rahul Singh', location: 'Ameerpet, Hyderabad', time: '08:45 AM', statusLine: 'Completed at 10:05 AM', completed: true, icon: ICON.gasFilling },
    { id: 'AC-25592', type: 'AC Servicing', customer: 'Vikram Reddy', location: 'Banjara Hills, Hyderabad', time: '07:50 AM', statusLine: 'Completed at 09:20 AM', completed: true, icon: ICON.servicing },
    { id: 'AC-25503', type: 'AC Filter Cleaning', customer: 'Manoj Kumar', location: 'Gachibowli, Hyderabad', time: '07:15 AM', statusLine: 'Completed at 08:30 AM', completed: true, icon: ICON.filterCleaning },
  ],
};

export const tabs: { key: TabKey; label: string }[] = [
  { key: 'assigned', label: 'Assigned' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
];
