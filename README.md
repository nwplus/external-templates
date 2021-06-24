# MONOREPO
Purpose:
To simplify development work from our single paged applications by abstracting styling and components into our CMS, very likely to be saving up to dozens of people hours per project.

Why it'll be better:
Instead of creating a repo and implementing the differences between each website per project, we'll be creating branches based off from Main and pass data from Firebase that would style the components. This is doable with getStaticProps and Dynamic Imports. With these in mind, we'll be able cut down on a lot of development time by simplifying what's possible into our CMS.

As a bonus, we get rid of the need to implement seperate CI/CD pipelines and unify the language and libraries dev teams are using.

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

## Contributing
Check out our [contribution guidelines](<!--- Link to CONTRIBUTING.md -->)
