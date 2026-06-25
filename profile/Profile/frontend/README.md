# Profile & Stats Screen

A static reproduction of the **Profile & Stats** screen from `profile/Profile.pdf`, built
as an Expo (React Native + expo-router) app using the same structure and conventions as
`screen_chat.zip`.

## Functionality

- **Header** — purple bar with a back chevron and the title *Profile & Stats*.
- **Profile card** — avatar, "Ramesh Kumar", "AC Technician", a ⭐ 4.8 (126 reviews)
  rating, and an *Online* pill.
- **Settings menu** (scrollable rows with leading icon + chevron, some with a value on
  the right): Edit Profile, My Earnings, My Reviews, Performance Report,
  Availability (*Online*), Service Areas (*Hyderabad*), My Leave Requests, Settings,
  Help & Support.
- **Logout** — a red row at the bottom; tapping it opens the centred **"Logout?"**
  confirmation dialog (*Yes, Logout* / *Cancel*). Wire real sign-out in
  `handleConfirm` (e.g. `router.replace('/login')`).

State is local (`useState`) — this is a static UI; no backend calls are wired.

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
  index.tsx            Entry route -> <ProfileScreen/>
  profile.tsx          /profile route -> <ProfileScreen/>
  +html.tsx            Web document shell
src/
  screens/ProfileScreen.tsx       Profile card + menu + logout dialog
  components/
    ScreenHeader.tsx              Purple back + title bar
    ProfileHeaderCard.tsx         Avatar, name, role, rating, online pill
    ProfileMenuRow.tsx            One menu row (icon, label, value, chevron, danger)
    LogoutDialog.tsx              Centred logout confirmation modal
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    profileData.ts                Mock profile + menu items
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (PROFILE.*, LOGOUT.*)
assets/images/profile-avatar.png  Technician photo (extracted from the PDF)
```

## Notes

- Brand purple is **`#6A4DBB`**. Destructive logout actions use red.
- The profile avatar is the exact image lifted from `Profile.pdf`.
