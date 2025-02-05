const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    // console.log('request made');
    // console.log(req.url,req.method);

    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log('hello');
    });

    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-us':
            path+='about.html';
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }

    //writing html file
    fs.readFile(path ,(err,data)=>{// can do manually by putting instead of path > './views/index.html'
        if(err){
            console.log(err);
        }else{
            // to do in multiple lines
            // res.write(data);
            //res.end();
            
            //one line
            res.end(data);
        }
    })

    //writing as it is
    // res.write('<strong><p>hello, ninjas</p></strong>');
    // res.write('<em><p>hello again, ninjas</p></em>');
    // res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
})