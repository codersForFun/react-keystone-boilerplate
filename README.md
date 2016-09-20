[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


React-keystone-boilerplate is a scaffolding tool which makes it easy to build isomorphic apps using Keystone, Mongo, Express, React, Redux and NodeJS.

## Quickstart

```
  clone this repo
  cd name_of_new_app
  npm install
  npm start
```

## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled

4. `npm run watch` - start the test runner with watch mode

5. `npm run clean` - removes dist folder

## File Structure

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/).

### Webpack Configs

The Webpack configuration is minimal and beginner-friendly. You can customise and add more features to it for production build.

### Server

Express web framework its our main setup. Our app sits in keystone.js.

#### Server Side Rendering

React Router renders components according to route requested.

We use React Router's match function for handling all page requests so that browser history works.

### Make your project
To make your version, follow these steps

1. Clone this project
    ```
    git clone https://github.com/Davidcreador/react-keystone-boilerplate.git
    ```

2. Make your changes or anything else.

3. npm install & npm start

4. Done!!

## License
React-Keystone-Boilerplate is released under the [MIT License](http://www.opensource.org/licenses/MIT).
