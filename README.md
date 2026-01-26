# Build and deploy frontend

```bash
cd web && \
  npm run build &&  \
  npm run build:sfe &&  \
  rsync -avzrc --delete --exclude='.DS_Store' dist/ root@midgard.drasyl.org:/home/services/authentik/dist
```