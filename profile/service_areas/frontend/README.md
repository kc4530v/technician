# Service Areas Screen

A static reproduction of the **Service Areas** screen from `profile/Service Areas.pdf`,
built as an Expo (React Native + expo-router) app using the same structure and
conventions as `screen_chat.zip`.

## Functionality

- **Header** — purple bar with a back chevron and the title *Service Areas*.
- **Map card** — "Your Service Areas" with an **Edit** link, and a map showing the
  coverage polygon + pin (a static image extracted from the PDF).
- **Areas list** — each row shows the area name, distance and a red target marker
  (Miyapur, Kukatpally, Madhapur, Hitech City, Gachibowli).
- **Add New Area** — full-width purple button.

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
  index.tsx            Entry route -> <ServiceAreasScreen/>
  service-areas.tsx    /service-areas route -> <ServiceAreasScreen/>
  +html.tsx            Web document shell
src/
  screens/ServiceAreasScreen.tsx  Map card, areas list, add button
  components/
    ScreenHeader.tsx              Purple back + title bar
    PhoneStatusBar.tsx            Mock phone status bar
    AreaRow.tsx                   One area row (name, distance, red target)
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    areasData.ts                  Map asset + area list
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (AREAS.*)
assets/images/service-map.png     Coverage map (extracted from the PDF)
```

## Notes

- Brand purple is **`#6A4DBB`**; the per-row target markers use red.
- The map is a static image lifted from the PDF (no live map SDK).
