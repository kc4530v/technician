// Test IDs for the auth feature (login, register, logout) — consumed via
// React Native's `testID` prop on TouchableOpacity / Pressable / TextInput /
// Button / Switch and friends. Add new keys here as you wire up additional
// auth UI; see ./index.js for the recipe to add a new feature file.
//
// React Native uses `testID` (camelCase, no dash), not `data-testid`:
//   import { LOGIN } from '../constants/testIds';
//   <TouchableOpacity testID={LOGIN.submitButton} onPress={...} />
//   <TextInput testID={LOGIN.emailInput} ... />
//
// Directive:
//   - Keys are camelCase, values are kebab-case shaped as `<feature>-<element>`
//     (or `<feature>-<element>-<qualifier>` when an element repeats). Examples:
//     'login-submit-button', 'cart-quantity-input', 'product-card-image'.
//
// Why kebab-case values: required by qabot's CSS-attribute-style selector
// matcher and the lint rule `emergent(kebab-case-testid-prop)`.

export const LOGIN = {
	employeeIdInput: 'login-employee-id-input',
	clearButton: 'login-clear-button',
	submitButton: 'login-submit-button',
	contactSupportLink: 'login-contact-support-link',
	backButton: 'login-back-button',
	menuButton: 'login-menu-button',
};

export const REGISTER = {
	nameInput: 'register-name-input',
	emailInput: 'register-email-input',
	passwordInput: 'register-password-input',
	passwordConfirmInput: 'register-password-confirm-input',
	submitButton: 'register-submit-button',
	loginLink: 'register-login-link',
};

export const LOGOUT = {
	button: 'logout-button',
	row: 'logout-row',
	dialog: 'logout-dialog',
	confirmButton: 'logout-confirm-button',
	cancelButton: 'logout-cancel-button',
	backButton: 'logout-back-button',
};

export const PROFILE = {
	screen: 'profile-screen',
	backButton: 'profile-back-button',
	card: 'profile-header-card',
};
