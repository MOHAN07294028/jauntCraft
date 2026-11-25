**UI**
- Node should be installed
- Install NPM globally
- to start code locally
    use **npm run dev**
**DATABASE**
- If create new Table schema -> should push the schema use this command
    **npx drizzle-kit push**


**Deployments**

**Vercel readiness updates**
Removed package-lock.json so Vercel doesn’t prefer npm over the existing pnpm setup.
Added db:push and db:studio scripts in package.json for Drizzle schema management.
Removed typescript.ignoreBuildErrors from next.config.mjs after tsc --noEmit passed locally. images.unoptimized: true was left unchanged.
Git
Committed as 899c7b5 on mohan07: “Prepare repo for Vercel deployment”.
Pushed successfully to mohan/mohan07 (08b1af3..899c7b5).
Vercel note
Make sure DATABASE_URL is set in Vercel before building/deploying. app/db/index.ts throws at module load when DATABASE_URL is missing,
so builds or routes that import the DB module can fail without it. Use DATABASE_URL_UNPOOLED for pnpm db:push/Drizzle Kit as configured in drizzle.config.ts.
