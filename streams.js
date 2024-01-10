//used to read and write data sequentially

const {createReadStream}=require('fs');

const stream =createReadStream('./content/bigfile.txt')


/*default size of buffer 64kb,to change that use highWaterMarkoption in craeteReadStream
    const stream =createReadStream('./content/bigfile.txt',{highWaterMark:9000,encoding:'utf-8'})//90kb

*/

//add encoding to read the data stream

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(error)=>{
    console.log(error);
})