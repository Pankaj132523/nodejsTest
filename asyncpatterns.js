const http =require('http')

const server= http.createServer((req,res)=>{
    console.log('request')
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url === '/about'){
        //Blocking Code
        for(i=0;i<1000;i++){
            for(j=0;j<1000;j++){
                console.log(i,j)
            }
        }
        res.end('about page')
        // this blocking code does not only block one user which has request but also other users which are trying to access different things
    }
})

server.listen(5000, ()=>{
    console.log('server listening to 5000')
})