# Login Screen

A static reproduction of the **Login** screen from `profile/Login.pdf`, built as an
Expo (React Native + expo-router) app using the same structure and conventions as
`screen_chat.zip`.

## Run

```bash
npm install
npx expo start
```

Open on web, an Android emulator, an iOS simulator, or Expo Go.

## Structure

```
app/
  _layout.tsx          Root Stack + icon-font loading (headers hidden)
  index.tsx            Entry route -> <LoginScreen/>
  login.tsx            /login route -> <LoginScreen/>
  +html.tsx            Web document shell
src/
  screens/
    LoginScreen.tsx    The Login screen layout
  components/
    CompanyHeader.tsx  Purple top bar (logo + online dot + verified title + menu)
  constants/
    colors.ts          Central palette (brand purple = #6A4DBB)
  hooks/
    use-icon-fonts.ts  Loads @expo/vector-icons fonts under Expo Go
constants/
  testIds/             testID registry (LOGIN.*) for automated tests
assets/
  images/technician.png      Technician illustration (extracted from the PDF)
  images/company-logo.png     Cool Breeze AC logo (extracted from the PDF)
```

## Notes

- The single brand purple is **`#6A4DBB`** (header, Login button, "Contact Support"
  link). Lighter/darker purple tints in `colors.ts` are derived shades.
- The technician illustration and company logo are the exact images lifted from
  `Login.pdf`.
- Pre-filled Employee ID (`CBAC1256`) matches the design; the ✕ clears the field.
