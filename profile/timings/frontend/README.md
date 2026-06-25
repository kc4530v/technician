# Availability Screen

A static reproduction of the **Availability** screen from `profile/timings.pdf`, built as
an Expo (React Native + expo-router) app using the same structure and conventions as
`screen_chat.zip`.

## Functionality

- **Header** — purple bar with a back chevron and the title *Availability*.
- **Current Status** — card showing *Online* (green) with a pill toggle; flips
  Online/Offline.
- **Work Schedule** — card with Mon–Fri / Saturday / Sunday rows (start–end time chips +
  clock icon), and a purple *Edit Schedule* link in the section header.
- **Break Time** — card with a single start–end range and a clock icon, plus an
  *Edit Break Time* link.
- **Vacation Mode** — card with a description and an (off) toggle to pause job
  assignments, plus an *Edit Vacation* link.
- **Update Schedule** — purple button pinned to the bottom.

Toggles use local state; this is a static UI with no backend calls.

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
  index.tsx            Entry route -> <AvailabilityScreen/>
  availability.tsx     /availability route -> <AvailabilityScreen/>
  +html.tsx            Web document shell
src/
  screens/AvailabilityScreen.tsx  Status, schedule, break, vacation + Update button
  components/
    ScreenHeader.tsx              Purple back + title bar
    SectionHeader.tsx             Bold title + optional "Edit" link
    Toggle.tsx                    Custom iOS-style pill toggle
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    availabilityData.ts           Work schedule + break time
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (AVAILABILITY.*)
```

## Notes

- Brand purple is **`#6A4DBB`** (header, Edit links, clock icons, Update button). The
  status toggle uses green when on. No images to extract.
