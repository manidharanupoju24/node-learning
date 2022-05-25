// Modules
/*function sayHi(name) {
    console.log("Hello there, " + name + "!");
}

sayHi("Manidhar"); */

// CommonJS, every file is module (by default), node uses CommonJS under the hood
// Modules - Encapsulated code (only share minimum)

const names = require('./4-first-module-names') // . in the beginning is super important
const sayHi = require('./5-first-module-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

/*console.log(names);
sayHi('Manidhar')
sayHi(names.john)
sayHi(names.peter)
console.log(data)
console.log(data.singlePerson.name)
*/