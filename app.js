//npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular porject
// npm i <packageName>
// npm i <packageName> -D -> install dev dependencies

//global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac) 5/25/2022
// npx is new, study about it later, this is better than global installs 

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const new_items = _.flattenDeep(items)

console.log(new_items)
console.log("hello world")
console.log("hello people")