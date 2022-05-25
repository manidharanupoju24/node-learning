// GLOBALS - NO WINDOW OBJECT !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname); //current directory
console.log(__filename); // current file name

setInterval(() => {
    console.log("Hello world!");
},3000)