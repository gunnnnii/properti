# Int ➡ Roman
This project sets up a webpage that allows you to convert an integer into a standard form roman numeral.

You can see it live here: [https://properti-trea.vercel.app/](https://properti-trea.vercel.app/)
## Running the project
To run it locally, run these commands
```bash
npm install
npm run dev
```

## Project structure
This is a [NextJS](https://nextjs.org/) app, and as such follows the conventions set by the framework. The frontend markup can be found in the [Pages](./pages/index.tsx) folder.

The main functionality of the project is the `toRoman` function. This function takes care of converting integers into roman numerals for us. You can find all the code for that in the [core](./core/toRoman.ts) folder.

## Deploying
The repo is hooked up to Vercel, so all pushing your changes is all it should take to deploy.

## Run Jest Tests

```bash
npm test
```
