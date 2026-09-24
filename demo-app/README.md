# DAPK Demo — sample Android app compiled by Codemagic

Package `com.dapk.demo`. Kotlin WebView wrapper loading `assets/www/`.

Built by the `demo-debug` workflow in the repo-root `codemagic.yaml`:

```
codemagic.io → Add application → connect repo → Start build → demo-debug
→ Artifacts → app-debug.apk
```

No keystore needed (Gradle auto-signs debug builds). Do not commit `local.properties`
or `build/` — both are git-ignored; CI writes `local.properties` itself.
