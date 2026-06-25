# Performance Report Screen

<img src="../../../docs/profile/performance_report/screen.png" width="260" align="right" />

A static reproduction of the **Performance Report** screen from
`profile/Performance Report.pdf`, built as an Expo (React Native + expo-router) app using
the same structure and conventions as `screen_chat.zip`.

## Functionality

- **Header** — purple bar with a back chevron and the title *Performance Report*.
- **Period selector** — a "This Month" dropdown with a calendar icon.
- **Stat grid** — six metric cards (2 columns): Jobs Completed, Active Tickets,
  Acceptance Rate, Completion Rate, Average Rating (with a star), Total Earnings — each
  with a coloured delta (green growth, orange for the rating).
- **Customer Satisfaction** — a percentage, an "Excellent" tag, and a green progress bar.
- **Earnings Overview** — total + delta and a line chart (SVG) with grid, markers and
  axis labels.

Static UI; no backend calls.

## Run

```bash
npm install
npx expo start
```

Press `w` for web (use the browser device toolbar for a phone frame), or scan the QR
code with Expo Go.

## Structure

```
app/
  _layout.tsx          Root Stack + icon-font loading (headers hidden)
  index.tsx            Entry route -> <PerformanceScreen/>
  performance.tsx      /performance route -> <PerformanceScreen/>
  +html.tsx            Web document shell
src/
  screens/PerformanceScreen.tsx   Period filter, stat grid, satisfaction, chart
  components/
    ScreenHeader.tsx              Purple back + title bar
    PhoneStatusBar.tsx            Mock phone status bar
    StatCard.tsx                  One metric card (value + delta + note)
    EarningsChart.tsx             SVG line chart
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    performanceData.ts            Stats, satisfaction, chart points
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (PERFORMANCE.*)
```

## Notes

- Brand purple is **`#6A4DBB`**; growth deltas use green, the rating delta uses orange.
- Uses `react-native-svg` for the earnings line chart. No images to extract.
