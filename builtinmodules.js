//////////////////////  OS Modules ////////////////////
const { log } = require('console');
const os = require('os') // no ./

// info about current user
const user = os.userInfo()
console.log(user)

//system uptime in secs
const uptime = os.uptime();
console.log(uptime);

const currentos ={
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentos);

////////////////////////// Path Module //////////////////////////

const path =require('path')
console.log(path)

// separator returns platform specific separator
console.log(path.sep)

// joins sequence of paths using the spearartor and returns normalized path
const filepath = path.join('./content','subfolder','file')
console.log(filepath)

//gives the basename from the path
const base= path.basename(filepath);
console.log(base)

//returns absolute path ie whole path with home and al

const absolute = path.resolve(__dirname,'content','subfolder','file');
console.log(absolute); 

/////////////////////////// FS Module ///////////////////

/*
    two types async (non blocking) and sync (blocking)



*/

////synchronous
const {readFileSync,writeFileSync}= require('fs'); // destructured the fs mdoule for a particular part

const first = readFileSync('./content/subfolder/file','utf-8');
const second = readFileSync('./content/subfolder/secod/newfile.txt','utf-8');

console.log(first,second);

writeFileSync('./content/subfolder/yo.txt',`yoyoyoyoyoyoyoy${second}`) //appending is possible


/////aysnchronous

const {readFile,writeFile} =require('fs'); //aysnc requires a callback 

readFile('./content/subfolder/secod/newfile.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
}) //will get buffer if encoding not added

writeFile('./content/no.txt',`${second}`,{flag:'a'},(err,result)=>{
    if(err){
    console.log(err);
        return;
    }
    console.log(result);
})


////////////////////////////// HTTp Module ////////////////////////

   const http =require('http');

   const server= http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.write('Hello welcome to our home page')
        res.end()
    }
    else{
        res.end(`
        <h1>Get lost<h1>
        `) //directly can send the response on the end and also we can send html in response
    }
   })
server.listen(5000)