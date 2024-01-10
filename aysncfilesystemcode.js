const {readFile} = require('fs') //aysnc requires a callback 
const util= require('util')// we can use it to promisify


const promiseit=util.promisify(readFile)//usinh this skips the promise function



// readFile('./content/subfolder/secod/newfile.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
// }) //will get buffer if 

// readFile('./content/subfolder/file','utf-8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
// }) //will get buffer if 

const getText= (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,result)=>{
            if(err){
                // console.log(err);
                // return
                reject(err)
            }
            resolve(result)
            //console.log(result);
        })
    })
}



// promise without async await

// getText('./content/subfolder/secod/newfile.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(err))


//promise with async await

const start = async()=>{
    try{
        const first= await getText('./content/subfolder/secod/newfile.txt')
        const second=await getText('./content/subfolder/file')
        console.log(first,second)
    }
    catch (err){ 
        console.log(error)
    }
}
start()