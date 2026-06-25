// Static initial data for the Edit Schedule form.

export type DayRow = {
  id: string;
  day: string;
  start: string;
  end: string;
  enabled: boolean;
};

export const initialDays: DayRow[] = [
  { id: 'weekdays', day: 'Mon – Fri', start: '09:00 AM', end: '06:00 PM', enabled: true },
  { id: 'saturday', day: 'Saturday', start: '09:00 AM', end: '06:00 PM', enabled: true },
  { id: 'sunday', day: 'Sunday', start: '09:00 AM', end: '02:00 PM', enabled: true },
];

export const initialBreak = { start: '01:00 PM', end: '02:00 PM' };

export const initialVacation = { enabled: true, start: '09:00 AM', end: '02:00 PM' };
