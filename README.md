# External Templates
Purpose:
To simplify development work from our single paged applications by abstracting some styling, metadata, components into our CMS.
We also get rid of the need to implement seperate CI/CD pipelines and unify the language and libraries dev teams are using.

The Main branch will contain all templated components with minimal styling. Each hackathon branch will be prefixed with their hackathon names. e.g. cmd-f_main, cmd-f_dev

## Getting started
<!--- Make sure to include any additional steps like setting env variables] -->
First, grab `.env` from Notion
https://www.notion.so/nwplus/Dev-15c97474537e49788938e588cad1bacf?p=2d2c848fd6d344099e50ee7bf7b6466d

Then, run the development server:
`yarn` to install dependencies
`yarn dev` to start dev environment
Open http://localhost:3000 with your browser to see the result.

## Deploying
<!--- Guide on how one would deploy this app -->
It is automatically deployed via our firebase pipeline. On new projects, follow the template and change up the branches in `firebase.json` and `.firebaserc`.
