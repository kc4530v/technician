# Technician App — UI Screens

A collection of **36 mobile UI screens** for an AC service technician app
(“Cool Breeze AC Services”), each built as a small, self‑contained
**Expo (React Native)** application. Every screen faithfully reproduces a
design and is grouped by feature area.

> These are **static UI reproductions** — fully interactive on the surface
> (tabs switch, toggles flip, fields edit, dialogs open), but there is **no
> backend**; all data is mock/static.

---

## Tech stack

| | |
|---|---|
| Framework | **Expo SDK 54** (React Native 0.81) |
| Language | **TypeScript** |
| Routing | **expo-router** (file‑based) |
| Icons | `@expo/vector-icons` (Ionicons) + original images extracted from the designs |
| Charts / maps | `react-native-svg` (a few screens); static map/illustration images elsewhere |
| Targets | Web, iOS, Android (via Expo) |

**Brand colour:** the single brand purple is **`#6A4DBB`** (headers, primary
buttons, links). Destructive actions use red; success uses green.

---

## Repository layout

The repo is a **monorepo** of six feature folders. Each feature folder contains
one subfolder per screen, and **each screen is an independent Expo app** living
in its own `frontend/`:

```
technician/
├─ earnings/         transactions, withdraw
├─ job/              dashboard, job list/details, the full job lifecycle, OTP, etc.
├─ leave_request/    apply / view / approved / rejected / submitted
├─ notifications/    notifications
├─ profile/          login, profile, settings, availability, performance, …
└─ reviews/          my_review, overall_review

<feature>/<screen>/
├─ frontend/         ← the Expo app (run from here)
│  ├─ app/           expo-router routes (index.tsx renders the screen)
│  ├─ src/
│  │  ├─ screens/    the screen component
│  │  ├─ components/ reusable UI (headers, badges, rows, …)
│  │  ├─ constants/  colors.ts (palette) + mock data
│  │  └─ hooks/      use-icon-fonts.ts
│  ├─ assets/        images/fonts (icons & illustrations extracted from designs)
│  ├─ constants/testIds/   testID registry for automated testing
│  ├─ app.json · package.json · tsconfig.json · metro.config.js
└─ README             short description of that screen
```

Each screen’s `frontend/` also has its own **`README.md`** with a file‑by‑file
breakdown of that specific screen.

---

## Screen catalog

### `profile/` (10)
| Folder | Screen |
|---|---|
| `Login` | Employee‑ID login |
| `otp_verifying` | Auto OTP verification (progress ring + stepper) |
| `Profile` | Profile & Stats |
| `Edit_Profile` | Edit profile form |
| `Settings` | App settings (toggles) |
| `timings` | Availability (status, work schedule, breaks, vacation) |
| `edit_timings` | Edit schedule (checkboxes, time dropdowns, add day) |
| `performance_report` | Metrics grid, satisfaction bar, earnings line chart |
| `service_areas` | Coverage map + area list |
| `Logout` | Logout confirmation dialog |

### `job/` (15)
| Folder | Screen |
|---|---|
| `Dashboard` | Technician home (summary + today’s jobs + earnings) |
| `Assigned` / `In_progress` / `Completed` | Jobs list (tabbed) |
| `Job_details` | Full job details + photos |
| `view_job` | Notifications / new job assigned |
| `accept_job` | Accept‑job confirmation |
| `navigation` | Route map to customer |
| `reached_customer` | Customer details + actions |
| `start_work` | Job summary + checklist before starting |
| `work_progress` | In‑progress checklist + timer + photos |
| `work_completed` | Work summary + service charge |
| `request_otp` / `enter_otp` | Collect & enter close‑out OTP |
| `ticket_closed` | Ticket closed success |

### `earnings/` (2)
`transactions` (All/Completed/Cancelled tabs) · `withdraw` (earnings overview + withdraw)

### `leave_request/` (6)
`my_leave_request` (list) · `new_leave` (form) · `request_submitted` ·
`leave_request_pending` (details + timeline) · `leave_request_approved` · `leave_request_rejected`

### `notifications/` (1)
`notifications` (Today / Yesterday grouped, tabbed)

### `reviews/` (2)
`my_review` · `overall_review`

---

## Getting started

### Prerequisites
- **Node.js 18+** and npm
- (Optional) the **Expo Go** app on a phone, or an Android/iOS emulator

### Run any screen
Each screen is independent — install and run it from its own `frontend/`:

```bash
cd <feature>/<screen>/frontend      # e.g. cd profile/Login/frontend
npm install
npx expo start
```

Then in the Expo terminal:
- press **`w`** to open in the **browser** (quickest), or
- press **`a`** / **`i`** for an Android/iOS emulator, or
- scan the QR code with **Expo Go**.

**Tip (web preview):** the screens are phone‑sized. In the browser, open
DevTools (`F12`) and toggle the device toolbar (`Ctrl+Shift+M`) to view at a
phone resolution (e.g. iPhone 12 Pro / 390×844).

> If you changed image assets, restart with `npx expo start -c` to clear the
> Metro cache.

---

## Conventions

- **Brand purple `#6A4DBB`** is the single source of truth in each screen’s
  `src/constants/colors.ts`.
- **Original icons/illustrations/maps** that aren’t standard glyphs are bundled
  as images under `assets/images/` (extracted from the source designs) so the UI
  matches exactly.
- **`testID`s** are centralised under `constants/testIds/` for automated UI tests.
- **expo-router**: `app/index.tsx` renders the screen component from
  `src/screens/`; there’s also a named route file per screen.

---

## Notes & troubleshooting

- **No backend / no real network calls** — all content is static mock data.
- **`react-native@x` version warning on start** is harmless; run
  `npx expo install --fix` once if you want to silence it.
- **Linux: `ENOSPC: System limit for number of file watchers reached`** — raise
  the inotify limit:
  ```bash
  sudo sysctl fs.inotify.max_user_watches=524288
  sudo sysctl fs.inotify.max_user_instances=1024
  ```
- To save disk/watchers, only `npm install` the screen you’re currently viewing;
  you can `rm -rf node_modules` in a screen when done.
