# Lab 2: Interactive Registration Form

A client-side registration form built with vanilla HTML, CSS, and JavaScript. It uses the Constraint Validation API to give real-time feedback on username, email, and password fields, and persists the username to `localStorage` between visits.

## Features

- **Real-time validation** on every field as the user types, using `input` events and the Constraint Validation API (`validity`, `setCustomValidity`, `checkValidity`).
- **Custom error messages** displayed inline under each field instead of the browser's default validation bubbles.
- **Password strength checklist** that turns each requirement green as it's met (length, uppercase, lowercase, number).
- **Confirm password matching**, re-checked automatically if the password is edited after confirm password is filled in.
- **Username persistence** via `localStorage`, so the username field is pre-filled on page reload.

## Files

| File | Purpose |
|---|---|
| `index.html` | Form markup |
| `style.css` | Styling, including error and valid states |
| `script.js` | Validation logic and `localStorage` handling |

## Setup

1. Clone or download this repository.
2. Open `index.html` directly in a browser, or serve it with a local dev server (e.g. `npx serve` or the VS Code Live Server extension).
3. No build step or dependencies required.

## Testing and Validation

1. **Test basic registration**: Fill out all fields with valid data and submit the form. Verify the success message and that the username is saved in `localStorage` (check your browser's Developer Tools > Application > Local Storage).
2. **Test username validation**:
   - Try submitting with an empty username.
   - Enter a username that is too short.
   - Verify error messages appear in real-time as you type (or on blur/submit).
3. **Test email validation**:
   - Try submitting with an empty email.
   - Enter an invalid email format (e.g., "test@", "test.com").
4. **Test password validation**:
   - Try submitting with an empty password.
   - Enter a password that is too short.
   - Enter a password that doesn't meet the pattern (e.g., all lowercase, no numbers).
   - Ensure the "Confirm Password" field shows an error if it doesn't match the password.
5. **Test local storage persistence**: After a successful registration, refresh the page. The username field should be pre-filled with the value you entered.
6. **Edge cases**: Think about what happens if a user tries to bypass validation (though client-side validation is mainly for UX, server-side is for security). What happens if `localStorage` is full or disabled (for this lab, we assume it works, but it's a real-world consideration)?

## Known Limitations

- Validation is client-side only. It improves UX but is not a substitute for server-side validation, which is required for actual security.
- `localStorage` is unencrypted and readable by any script on the same origin; it should never be used to store passwords or sensitive data (this lab only stores the username).

## Possible Extensions

- Add server-side validation and persistence.
- Add a password visibility toggle.