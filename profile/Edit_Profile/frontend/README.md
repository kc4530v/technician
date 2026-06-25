# Edit Profile Screen

A static reproduction of the **Edit Profile** screen from
`profile/Edit profile_Technician.pdf`, built as an Expo (React Native + expo-router) app
using the same structure and conventions as `screen_chat.zip`.

## Functionality

- **Header** — purple bar with a back chevron and the title *Edit Profile*.
- **Avatar** — centred circular photo with a purple **camera badge** (change photo).
- **Form fields** (label above a bordered input):
  - **Full Name**, **Mobile Number**, **Email** — editable text inputs.
  - **Date of Birth** — static value with a calendar icon.
  - **Gender** — select with a chevron.
  - **Languages Known** — removable pills (tap ✕ to remove) with a dropdown chevron.
  - **Address** — editable with a location icon.
- **Save Changes** — full-width purple button. Persist to your backend here.

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
  index.tsx            Entry route -> <EditProfileScreen/>
  edit-profile.tsx     /edit-profile route -> <EditProfileScreen/>
  +html.tsx            Web document shell
src/
  screens/EditProfileScreen.tsx   Avatar + form fields + Save button
  components/
    ScreenHeader.tsx              Purple back + title bar
    AvatarPicker.tsx              Circular avatar with camera badge
    EditField.tsx                 Labelled bordered field (input / select / custom)
    LanguageChips.tsx             Removable language pills
  constants/
    colors.ts                     Central palette (brand purple = #6A4DBB)
    editProfileData.ts            Initial form values
  hooks/use-icon-fonts.ts
constants/testIds/                testID registry (EDIT_PROFILE.*)
assets/images/profile-avatar.png  Technician photo (from the PDF)
```

## Notes

- Brand purple is **`#6A4DBB`** (header, field icons, chips, Save button).
- Spacing was matched to the PDF: ~20pt content margins, ~14pt between fields, ~48pt
  input boxes, ~96pt avatar.
