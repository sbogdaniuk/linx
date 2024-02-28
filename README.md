# This is small dashboard application
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So if you have any questions, visit docs.

You can check live here https://linx-jkp33xhgi-sbogdaniuk.vercel.app/

## Prerequisites
To start project you need to
```bash
git clone REPO_URL
npm i
```

## Development
Before running locally, you need to:
1) Create account on https://www.weatherapi.com/
2) And generate API key
3) Create `.env` file and add line with `REACT_APP_WEATHERAPI_KEY=API_KEY_FROM_WEATHER_API`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
To mock BE data we use [https://v1.mswjs.io/docs/](msw@1) server

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
