# Logout Screen

A static reproduction of the **Logout** screen from `profile/Logout.pdf`, built as an
Expo (React Native + expo-router) app using the same structure and conventions as
`screen_chat.zip`.

## Functionality

The screen is the **Profile & Stats** page with a **logout confirmation dialog** on top:

- **Profile & Stats background** — a purple header (`← Profile & Stats`), a profile
  card (avatar, "Ramesh Kumar", "AC Technician", ⭐ 4.8 (126 reviews), an *Online*
  pill), and a scrollable settings menu: Edit Profile, My Earnings, My Reviews,
  Performance Report, Availability (Online), Service Areas (Hyderabad),
  My Leave Requests, Settings, Help & Support, and a red **Logout** row.
- **Logout dialog** — a centred modal over a dimmed backdrop with a red logout icon,
  the question *"Are you sure you want to logout from your account?"*, and two actions:
  - **Yes, Logout** (red) — confirms; dismisses the dialog. Hook your real sign-out
    here (e.g. `router.replace('/login')`).
  - **Cancel** (outlined) — dismisses the dialog and returns to the profile.
- Tapping the red **Logout** row re-opens the dialog. The dialog is shown by default
  so the screen matches the design on first load.

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
  index.tsx            Entry route -> <LogoutScreen/>
  logout.tsx           /logout route -> <LogoutScreen/>
  +html.tsx            Web document shell
src/
  screens/LogoutScreen.tsx        Profile background + dialog, with open/close state
  components/
    ScreenHeader.tsx              Purple back + title bar
    ProfileHeaderCard.tsx         Avatar, name, role, rating, online pill
    ProfileMenuRow.tsx            One menu row (icon, label, value, chevron, danger)
    LogoutDialog.tsx              Centred confirmation modal
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    profileData.ts                Mock profile + menu items
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (LOGOUT.*) for automated tests
assets/images/profile-avatar.png  Technician photo (extracted from the PDF)
```

## Notes

- Brand purple is **`#6A4DBB`** (header, Cancel button). The destructive action
  ("Yes, Logout", the Logout row, the dialog icon) uses red, matching the design.
- The profile avatar is the exact image lifted from `Logout.pdf`.
