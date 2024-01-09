//GLOBAlS -No window !!!

//_dirname -path to current directory
//__filename -file name
// require - function to use modules(commomnJS)
//module - infor about current module (file)
//process - infor aboit env where the program is executed



////////// MODULES /////////////////////////
//Modules = encapsulated code

//every file in node is a module
const names = require('./module')
const sayhi= require('./module2')
const items = require('./modules3')
require('./autoinvoke') /// invoke automatically only if the function is called because the export is done by wrapping the function around the import
sayhi(names?.pankaj);
console.log(items)