# VaultPeer

Official website and project hub for **VaultPeer** — an open-source, privacy-first KeePass-compatible password manager with live multi-device sync over WebRTC.

**Live site:** [https://mhamzaiqbal1998.github.io/VaultPeer/](https://mhamzaiqbal1998.github.io/VaultPeer/)

---

## About

VaultPeer stores credentials in standard **KDBX** files (KeePass / KeePassXC compatible), encrypts everything at rest, and syncs the encrypted vault directly between your devices over WebRTC data channels.

- [**VaultPeer-Phonebook**](https://github.com/mHamzaIqbal1998/VaultPeer-Phonebook) — WebRTC signaling server (peer discovery only)
- [**VaultPeer-Desktop**](https://github.com/mHamzaIqbal1998/VaultPeer-Desktop) — Windows desktop node with UI
- [**VaultPeer-Mobile**](https://github.com/mHamzaIqbal1998/VaultPeer-Mobile) — Android mobile node with UI
- [**VaultPeer-ServerNode**](https://github.com/mHamzaIqbal1998/VaultPeer-ServerNode) — Headless always-on sync node (no UI)

This repository contains the static marketing site deployed via GitHub Pages.

---

## Local preview

Serve the site locally with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## GitHub Pages deployment

This site is a plain static HTML/CSS/JS project — no build step required.

1. Push the `main` branch to [github.com/mHamzaIqbal1998/VaultPeer](https://github.com/mHamzaIqbal1998/VaultPeer).
2. In the repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/ (root)`**.
5. Click **Save**. GitHub will publish the site at `https://mhamzaiqbal1998.github.io/VaultPeer/` within a few minutes.

The `.nojekyll` file disables Jekyll processing so GitHub Pages serves files as-is.

### Custom domain (optional)

To use a custom domain (e.g. `vaultpeer.dev`):

1. Add a `CNAME` file to the repo root containing your domain name.
2. Configure DNS with your provider (A/CNAME records pointing to GitHub Pages).
3. Enable **Enforce HTTPS** under Settings → Pages.

---

## License

Licensed under the [Apache License, Version 2.0](LICENSE).
