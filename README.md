# React Starter

An hello-world app demonstrating how easy it can be to setup a new completely
custom React project without a lot of cruft.

I'm using of a build/deploy package I built called
[soko](https://github.com/robmclarty/soko). It transpiles JS using
[browserify](http://browserify.org/) and [babel](https://babeljs.io/)
(including object rest/spread and async/await plugins), create source maps, and
compresses it using [uglify]().  It does other things too, so check it out if
you want to know more. NOTE: `soko` requires Nodejs v8+.

I've also built a component using an alternative structure which avoids using
`class`, `this`, `new`, `extends`, `bind`, etc. The point is, there is more than
one way to make a React component. I've created a repo that demonstrates some
different component construction ideas called
[es6-react-component](https://github.com/robmclarty/es6-react-component)  if you
want to learn more.

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

This is a simple static file that does nothing other than define a container
for your React app to target.

- create `assets/index.html`
- define `<div id="app-container"></div>` to be target of react app

## Create React App JS

- create `app/index.js`
- use `ReactDOM.render()` to create outer wrapper for react app and target
the container in the HTML file above using `document.getElementById('app-container')`
- import other custom components and include them here at the top of the tree
however you want to build and organize your app

## Build

- build using `npx soko build`
- create custom build commands in `package.json` scripts

## Run It!

- open `build/index.html` in your browser
