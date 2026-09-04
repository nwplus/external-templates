# External Templates

Purpose:
To simplify development work from our single paged applications by abstracting some styling, metadata, components into our CMS.
We also get rid of the need to implement seperate CI/CD pipelines and unify the language and libraries dev teams are using.

The Main branch will contain all templated components with minimal styling. Each hackathon branch will be pre-fixed with their hackathon names (e.g. cmd-f_main, cmd-f_dev).

## Getting started

<!--- Make sure to include any additional steps like setting env variables] -->

First, grab `.env` from Notion
https://www.notion.so/nwplus/Dev-15c97474537e49788938e588cad1bacf?p=2d2c848fd6d344099e50ee7bf7b6466d

Then, run the development server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Deploying

Sites are hosted on Firebase Hosting and deployed by `.github/workflows/firebase_deploy.yaml`:

- Pushes to `hackcamp2026_dev` build with staging env vars and deploy to the `dev-nwplus-hackcamp2026` site on the `nwplus-ubc-dev` project.
- Pushes to `hackcamp2026_main` build with production env vars and deploy to the `nwplus-hackcamp2026` site on the `nwplus-ubc` project, which serves hackcamp.nwplus.io. Only create `hackcamp2026_main` when the site is ready to launch, since the first push replaces whatever is live there.
- Pull requests get a 10-day preview channel via `.github/workflows/firebase_hosting_pr.yaml`.

The workflow runs `firebase deploy --only hosting:<branch name>`, so the branch name, the `target` in `firebase.json`, and the key in `.firebaserc` must match exactly. To set up a new year, branch from the previous site, rename those entries for the new `_dev` and `_main` branches, and create the two hosting sites in the Firebase console before the first deploy.

## Contributing

Check out our [contribution guidelines](<!--- Link to CONTRIBUTING.md -->)
