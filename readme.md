# Front-end Test

UI Link: [https://projects.invisionapp.com/share/N312IJ0C8GMK#/screens]

## Quick Start

Install dev dependencies

```sh
yarn install // or npm install
```

Start development server with live preview

```sh
yarn dev // or npm run dev
```

Generate build files for production server

```sh
yarn prod // or npm run prod
```

All dev files are present in `src` folder. The build version can be found in `build` folder after running `yarn build` command.

## Configuration

All configurations are found in `config.js` file in the root directory. You can configure browser default port, enable/disable plugins by simply updating boolean values (Default is set to `true`) and many more.

```js
const config = {
  tailwindjs: "./tailwind.config.js",
  port: 9050, // default port
  // purgecss options
  purgecss: {
    content: ["src/**/*.{html,js,php}"],
    ...
  },
  // imagemin options for image optimizations
  imagemin: {
    png: [0.7, 0.7], // range between min (0) and max (1) as quality - 70% with current values for png images,
    jpeg: 70, // % of compression for jpg, jpeg images
  },
};

// tailwind plugins
const plugins = {
  typography: true, // set to false to disable
  forms: true,
  containerQueries: true,
};
...
```