// Static data for the Availability screen.

export type ScheduleRow = {
  key: string;
  day: string;
  start: string;
  end: string;
};

export const workSchedule: ScheduleRow[] = [
  { key: 'weekdays', day: 'Mon – Fri', start: '09:00 AM', end: '06:00 PM' },
  { key: 'saturday', day: 'Saturday', start: '09:00 AM', end: '06:00 PM' },
  { key: 'sunday', day: 'Sunday', start: '09:00 AM', end: '02:00 PM' },
];

export const breakTime = { start: '01:00 PM', end: '02:00 PM' };
