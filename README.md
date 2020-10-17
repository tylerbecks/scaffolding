## Fork Me!
This repo is a quick way to start any new project.  It comes configured with the following:
* [NextJS](https://nextjs.org/docs/getting-started)
* [TypeScript](https://www.typescriptlang.org/docs)
* [next-auth](https://next-auth.js.org/getting-started/example) with a sign in and sign out flow
* [Emotion](https://emotion.sh/docs/introduction) for CSS with a basic dashboard layout
* [Jest](https://jestjs.io/docs/en/getting-started) with working tests

## Getting Started

1. Install Dependencies
```bash
npm i
# or
yarn
```

2. Create a copy of .env.local.copy named .env.local (it will be ignored by .gitignore). Add the missing values.  Refer to [next-auth docs](https://next-auth.js.org/providers/google) for help.

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
