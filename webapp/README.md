# Webapp

## Basic Setup

Less is unsed to complie a CSS file. Install necessary modules globally.

```
npm install -g less less-watch-compiler react-script
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm test`

Test files are named as *.spec.js.

## Production

### Server

Express server is used if a server is needed. Deploy it server.js file with the `build` folder. Then run ```node server.js```.

## Note
This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app).


