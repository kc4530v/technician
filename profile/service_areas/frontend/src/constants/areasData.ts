// Static data for the Service Areas screen.

export type Area = {
  key: string;
  name: string;
  distance: string;
};

export const serviceMap = require('../../assets/images/service-map.png');

export const areas: Area[] = [
  { key: 'miyapur', name: 'Miyapur', distance: '5.0 km' },
  { key: 'kukatpally', name: 'Kukatpally', distance: '6.0 km' },
  { key: 'madhapur', name: 'Madhapur', distance: '7.0 km' },
  { key: 'hitech-city', name: 'Hitech City', distance: '8.0 km' },
  { key: 'gachibowli', name: 'Gachibowli', distance: '7.5 km' },
];
