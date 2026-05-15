# Software Supply Chain Security Frameworks

A comprehensive, community-maintained reference of frameworks, standards, regulations, and tools for software supply chain security.

**[View the live site →](https://OWNER.github.io/supply-chain-security-frameworks/)**

## What's Included

| Category                      | Examples                                               |
| ----------------------------- | ------------------------------------------------------ |
| U.S. Government / NIST        | SSDF, SP 800-161, EO 14028, CISA ESF Series           |
| OpenSSF                        | SLSA, S2C2F, Scorecard, Security Baseline              |
| OWASP                          | SCVS, CycloneDX, SAMM                                  |
| CNCF / Cloud-Native            | Sigstore, in-toto, TUF, GUAC                           |
| EU / International             | Cyber Resilience Act, NIS2, AI Act, ISO 27036          |
| Linux Foundation / Standards   | SPDX                                                    |
| Industry / Meta-Frameworks     | P-SSCRM, BSIMM, SAFECode                              |

## Contributing

The data lives in a single file: **[`src/data.js`](src/data.js)**.

To add or update an entry:

1. Fork this repo
2. Edit `src/data.js` — copy an existing entry, fill in the fields
3. Open a PR

The site rebuilds and deploys automatically on merge to `main`.

### Entry schema

```js
{
  category: "Category Name",       // Must match an existing category (or add a new one)
  name:     "Short Name",          // Displayed in the table row
  fullName: "Full Official Name",  // Shown on expand
  type:     "Framework",           // Framework | Standard | Guidance | Regulation | Tool | etc.
  audience: "Producers",           // Who this is for
  focus:    "One-liner summary",   // Shown in the main table
  status:   "v1.0 (2024)",         // Current version / lifecycle
  notes:    "Extra context",       // Shown on expand
  url:      "https://...",         // Optional — canonical link
}
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Custom Domain

To use a custom domain instead of `<user>.github.io/<repo>`:

1. Add a DNS CNAME record: `your-domain.com` → `<user>.github.io`
2. Create a `public/CNAME` file containing your domain:
   ```
   your-domain.com
   ```
3. Update `base` in `vite.config.js` to `"/"`:
   ```js
   base: "/",
   ```
4. Push to `main` — GitHub will provision a TLS certificate automatically.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — share and adapt with attribution.
