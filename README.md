# DAPK Demo — Codemagic-ready Android repo

Push **the contents of this folder** to GitHub (so `codemagic.yaml` sits at the
repo root), connect it in Codemagic, and you get real APKs with zero setup.

## Upload (2 minutes)

GitHub web (no git needed):
1. New repository → public or private → Create
2. **Add file → Upload files** → drag in everything from this folder
3. Commit

Or command line, from inside this folder:

```bash
git init -b main
git add .
git commit -m "DAPK demo app"
git remote add origin https://github.com/YOU/REPO.git
git push -u origin main
```

## Build on Codemagic

1. codemagic.io → **Add application** → connect the repo → Android
2. Workflows (all in `codemagic.yaml`, auto-detected):
   - `studio-smoke` — self-test first (no Android needed, ~1 min)
   - `demo-debug` — compiles `demo-app/` → **app-debug.apk** artifact
   - `demo-aab` — compiles `demo-app/` → **.aab** bundle artifact
3. Artifacts tab → download → install on any Android device.

## The only setup (optional, 10 seconds)

Open `codemagic.yaml`, replace `you@example.com` with your email.
Every green build then mails you the APK; failures mail the log link.
No keystores, no bindings, no secret groups — debug builds are auto-signed.

## What's inside

```
codemagic.yaml   # demo-debug (APK) · demo-aab (bundle) · studio-smoke (self-test)
demo-app/        # complete Kotlin + Gradle project (com.dapk.demo)
.gitignore       # keeps build/, local.properties, keystores out of git
```

Built with DAPK Studio. The IDE itself lives outside this folder —
this package is only what GitHub + Codemagic need.
