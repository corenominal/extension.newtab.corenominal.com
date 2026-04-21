# PN Custom New Tab

A browser extension that replaces the default new tab page with a custom URL of your choosing. Whenever you open a new tab, the extension seamlessly redirects you to your preferred landing page.

## Features

- Set any URL as your new tab page
- Seamless redirect — the blank default tab is automatically closed
- Falls back to the settings page if no URL has been configured
- Clicking the extension icon opens the options page
- Settings are persisted in browser local storage

## How It Works

When a new tab opens, `newtab.js` reads the saved URL from `chrome.storage.local`, opens a new tab at that URL, and closes the blank tab. If no URL is saved, it redirects to the options page instead.

The options page (`options.html`) lets you enter and save a custom URL, with a confirmation modal on success and a button to test the new tab immediately.

`background.js` runs as a service worker and opens the options page when the extension toolbar icon is clicked.

## Permissions

| Permission | Purpose |
|------------|---------|
| `tabs` | Open and close tabs |
| `storage` | Persist the custom URL setting |

## Installation

1. Clone or download this repository.
2. Open your browser's extensions page (e.g. `chrome://extensions`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the repository folder.
5. Open a new tab and you will be prompted to set your custom URL.

## Development

Vendor assets (Bootstrap 5, Bootstrap Icons) are managed via the fetch script:

```bash
npm run fetch-vendors
```

## Browser Support

Compatible with Chrome/Chromium-based browsers (Manifest V3) and Firefox (via `browser_specific_settings` in `manifest.json`).

## License

See [LICENSE](LICENSE).
