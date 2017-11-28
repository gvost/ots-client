## Installation

1. [node](https://nodejs.org)/[npm](https://npmjs.com)
  - we're using Node version 7.9.0 and the version of npm that goes with that. If you use nvm, it will install this version automatically because of the .nvmrc file. Note that later versions of npm are incompatible with React Native (at least for now), which is why we're using Node 7.9.0 instead of 8.5.0.

2. [expo](https://expo.io/)
  - install with: `npm install -g exp`

3. [react native debugger](https://github.com/jhen0409/react-native-debugger)
  - a debugging tool for react native with redux.
  - on mac, install with: `brew update && brew cask install react-native-debugger`

## Development

Run the app using expo, and open both the iOS simulator and react native debugger:
```sh
$ npm start
```

Generate a new module with base file structure: `npm run generate-module -- --name=[moduleName]`

## File structure

The structure comes mostly from [this article](https://jaysoo.ca/2016/02/28/applying-code-organization-rules-to-concrete-redux-code/). The differences include:
  - we don't insist on importing from the modules only through an index file. The actions, reducer, selectors, components and containers can all be directly imported from wherever they sit in the structure. This violates the module principle to some extent, but makes imports more flexible and hopefully won't introduce too much confusion.
  - we distinguish between components and containers. This makes the styles folder cleaner (because styling applies only to components) and isolates the connections between the state and the UI.


to connect iOS simulator with react native debugger select sim press: `cmd`+`d` and then select Debug Remote JS
