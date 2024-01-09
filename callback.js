const {readFile,writeFile} =require('fs'); //aysnc requires a callback 

readFile('./content/subfolder/secod/newfile.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result,' offloaded');
}) //will get buffer if encoding not added
console.log('immediate')

//event loop//
/*
    javascript interpreter is a single threadded hence runs code line by line which may cause issue if there is any time consuming code, hence event is there , js registers for the event and offloads the task to browser and executes the callback code only when it gets output from browser and immediate code has ended
*/

console.log('first')
setTimeout(() => {
    console.log('second')
}, 0); //offloaded and will execute at last
console.log('third')

//////////////

console.log('first')
//setInterval(() => {
//    console.log('second')
//}, 2000); //offloaded and will execute at last
console.log('third')


