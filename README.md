# React Starter

An hello-world app demonstrating how easy it can be to setup a new React project
without all the cruft.

I'm making use of a build/deploy package I built called [soko](https://github.com/robmclarty/soko).
It transpiles JS using [browserify]() and [babel]() (including object rest/spread
and async/await plugins) and compresses it using [uglify](). It does other
things too, so check it out if you want to know more.

NOTE: `soko` requires Nodejs v8+

## Create a New Project

```
mkdir my-project
cd my-project
npm init
git init
git add -A
git commit -m 'first commit'
```

## Housekeeping

Ensure you aren't going to copy a gajillion files into your repo.

- create `.gitignore`.
- add `node_modules` and `build` to it

## Install Deps

`npm install react react-dom prop-types --save`
`npm install soko --saveDev`

## Create App HTML

- create `assets/index.html`
- define `<div class="app-container"></div>` to be target of react app

## Create React App JS

- create `app/index.js`
- use `ReactDOM.render()` to create outer wrapper for react app
- import other custom components and include them here at the top of the tree

## Build

- build using `npx soko build`
- create custom build commands in `package.json` scripts

## Run It!

- open `build/index.html` in your browser
