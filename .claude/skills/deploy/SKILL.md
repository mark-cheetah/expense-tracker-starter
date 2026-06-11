# deploy

Deploy the app to staging: lint, build, then push the production bundle.

## Steps

### 1. Lint

Run ESLint and stop if there are any errors.

```bash
npm run lint
```

If lint fails, report the errors and do NOT continue. Tell the user to fix them first.

### 2. Build

Compile the production bundle.

```bash
npm run build
```

The output lands in `dist/`. If the build fails, report the error and stop.

### 3. Push to staging

Deploy the `dist/` folder to the staging server. The destination is controlled by the `STAGING_DESTINATION` environment variable (e.g. `user@staging-host:/var/www/finance-tracker`).

```bash
rsync -avz --delete dist/ $STAGING_DESTINATION
```

If `STAGING_DESTINATION` is not set, stop and tell the user to set it (e.g. `export STAGING_DESTINATION=user@host:/path`).

## Reporting

After a successful deploy, confirm:
- Lint: passed
- Build: succeeded (report the bundle size from Vite output)
- Staging: pushed to `$STAGING_DESTINATION`
