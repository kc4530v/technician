# Verifying OTP Screen

<img src="../../../docs/profile/otp_verifying/screen.png" width="260" align="right" />

A static reproduction of the **Verifying OTP** screen from `profile/OTP verifying.pdf`,
built as an Expo (React Native + expo-router) app using the same structure and
conventions as `screen_chat.zip`.

## Functionality

- **Header** — purple company bar: logo + online dot, "Cool Breeze AC Services",
  "Online", a **notification bell with a "2" badge**, and a ⋮ menu.
- **Avatar** — technician illustration with decorative sparkles.
- **Verifying OTP** — title, hint, and a phone chip (`+91 98765 43210`) with an **Edit**
  link.
- **Circular progress ring** — a light track + purple arc with a lock icon (drawn with
  `react-native-svg`), the auto-reading state.
- **Auto reading OTP...** status text + subtitle.
- **Stepper** — OTP Sent (done) → Reading OTP (active) → Logged In (pending).
- **Secure & Safe** info box.

Static UI; no backend or real OTP reading.

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
  index.tsx            Entry route -> <OtpScreen/>
  otp.tsx              /otp route -> <OtpScreen/>
  +html.tsx            Web document shell
src/
  screens/OtpScreen.tsx           Avatar, progress ring, stepper, secure box
  components/
    CompanyHeader.tsx             Purple bar (logo, online, bell+badge, menu)
    PhoneStatusBar.tsx            Mock phone status bar
    CircularProgress.tsx          SVG ring + lock icon
    OtpStepper.tsx                3-step progress indicator
  constants/colors.ts             Central palette (brand purple = #6A4DBB)
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (OTP.*)
assets/images/technician.png      Technician illustration (from the PDF)
```

## Notes

- Brand purple is **`#6A4DBB`**. Uses `react-native-svg` for the progress ring.
- The technician illustration is the exact image lifted from the PDF.
