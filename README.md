For nwPlus...

## Purpose:
To simplify development work from our single paged applications by abstracting styling and components into our CMS, very likely to be saving up to dozens of people hours per project.

## Why it'll be better:
Instead of creating a repo and implementing the differences between each website per project, we'll be creating branches based off from `Main` and pass data from Firebase that would style the components. This is doable with [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) and [Dynamic Imports](https://nextjs.org/docs/advanced-features/dynamic-import). With these in mind, we'll be able cut down on a lot of development time by simplifying what's possible into our CMS.

As a bonus, we get rid of the need to implement seperate CI/CD pipelines and unify the language and libraries dev teams are using.

The `Main` branch will contain all templated components with minimal styling. 
Each hackathon branch will be prefixed with their hackathon names. e.g. cmd-f_main, cmd-f_dev

## Getting Started

First, run the development server:

```bash
yarn dev
```

Yes, the production env vars are opened to the public. No, it's not dangerous since we are handling permissions correctly from Firebase.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

This is a [Next.js](https://nextjs.org/) project

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
