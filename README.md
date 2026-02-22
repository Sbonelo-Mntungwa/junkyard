# Junkyard Website

A cosmic-themed personal portfolio website built with Next.js.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying to GitHub Pages with Custom Domain (GoDaddy)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it anything (e.g., `junkyard-website` or `my-portfolio`)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### Step 2: Push Code to GitHub

```bash
# Navigate to project folder
cd junkyard-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/Sbonelo-Mntungwa/junkyard.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The workflow will automatically run on push

### Step 4: Configure GoDaddy DNS

1. Log in to [GoDaddy](https://godaddy.com)
2. Go to **My Products** → **DNS** for your domain
3. Delete any existing A records or CNAME for @ or www
4. Add these DNS records:

**For apex domain (sbonelo.xyz):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**For www subdomain:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | Sbonelo-Mntungwa.github.io | 600 |

### Step 5: Add Custom Domain in GitHub

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `sbonelo.xyz`)
3. Click **Save**
4. Wait for DNS check (can take up to 24 hours, usually 10-30 minutes)
5. Check **Enforce HTTPS** once available

### Step 6: Create CNAME File

Create a file named `CNAME` (no extension) in the `public/` folder:

```bash
mkdir -p public
echo "sbonelo.xyz" > public/CNAME
```

Then push to GitHub:
```bash
git add .
git commit -m "Add custom domain"
git push
```

---

## How It Works

The GitHub Action (`.github/workflows/deploy.yml`) automatically:

1. **Triggers** on every push to `main` branch
2. **Installs** Node.js and dependencies
3. **Builds** the Next.js site (`npm run build`)
4. **Exports** static files to `out/` folder
5. **Deploys** to GitHub Pages

---

## Troubleshooting

### Site not loading?
- Wait 10-30 minutes for DNS propagation
- Clear browser cache
- Check GitHub Pages settings for errors

### 404 errors on pages?
- Make sure `trailingSlash: true` is in `next.config.js`
- The workflow should handle this automatically

### HTTPS not working?
- Wait for DNS to fully propagate
- The "Enforce HTTPS" option appears after verification

### Changes not showing?
- Check the **Actions** tab on GitHub for build status
- Make sure you pushed to `main` branch

---

## Project Structure

```
junkyard-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions
├── public/
│   └── CNAME                   # Your custom domain
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   └── projects/rustpi/
│   │       └── page.tsx        # RustPi article
│   ├── components/
│   │   ├── CosmicBackground.tsx
│   │   ├── CodeBlock.tsx
│   │   └── DebugItem.tsx
│   └── styles/
│       └── globals.css
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Need Help?

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GoDaddy DNS Help](https://www.godaddy.com/help/manage-dns-records-680)

