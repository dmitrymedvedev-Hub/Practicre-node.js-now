
// const http = require('http');
// http.createServer(function(request,response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'})
//     response.write('Hello World3\n');
//     response.end();
// }).listen(8888); 

//THE server to send HTML file
// const http = require('http');
// const fs = require('fs');

// function req(request,response){
//     fs.readFile('index.html', function(err, data) {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//         });
//     request.write(data);
//     response.end();
//     })
// }

// http.createServer(req).listen(8080);
// console.log('Server Starter');


// const http = require('http');
// const url = require('url');

// function req(request,response){
//     console.log(request.url);
//     const base = url.parse(request.url);
//     const pathname = base.pathname;
//     console.log(pathname+'received');
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//         });
//     request.write("Welcome");
//     response.end();
//     }


// http.createServer(req).listen(8080);
// console.log('Server Starter');


// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// function req(request,response){
//     const base = url.parse(request.url);
//     const pathname = base.pathname;
//     const fileName = '.'+ pathname;

//     console.log(FileName);
//     fs.readFile(fileName, function(err, data){
//         if(err){
//             response.writeHead(404, {
//                 'Content-Type':'text/html'
//             });
//             return response.end('<h1>Not Found</h1>');
//         }
   
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//         });
//     request.write(data);
//     return response.end();
//      })
//     }


// http.createServer(req).listen(8080);
// console.log('Server Starter');

//Node Module
// const http = require('http');
// const url = require('url');

// function req(request,response){
//    console.log(request.url);
//     const pathname = basename.pathname;
//     console.log(pathname +'received');
   
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//         });
//     request.write('Welcome');
//     return response.end();
//      }


// http.createServer(req).listen(8080);
// console.log('Server Starter');


//File Write And Read Lessone

// const fs = require('fs');
// fs.readFile('./db.json','utf-8', function(err, data) {
// const d = JSON.parse(data);
// console.log(d.Message);
// })
// fs.readdir('./', function(err, data){
//     console.log(data);
// })

// const temp = {
//     greeting :"Welcome to Node.js"
// }
// fs.writeFile('./db1.json', JSON.stringify(temp), function(err, data){
//     console.log("File created");
// })



// File write and read:
// const fs = require('fs');
// fs.readFile('./db.json', 'utf-8', function(err, data){
//     const d = JSON.parse(data);
//     console.log(d.Message)
// })
// fs.readdir('./', function(err, data){
//     console.log(data);
// })
// const temp ={ 
//     greeting: "Welcome to Node.js"
// }
// fs.writeFile('db.json', JSON.stringify(temp), function(err, data){
//     console.log("file created");
// }) 



// //Load Packages:

// const lodash = reqire('lodash');




//Lodash Quick Overview

// const _= require('lodash');
// let randomNum1 = _.random(10);
// let randomNum2 = _.random(1.100);
// console.log(randomNum1);
// console.log(randomNum2);
// let myArr = ['apple','orange','banana','buleberry','grape'];
// let randomItem = _.sample(myArr);
// console.log(myArr);
// console.log(randomItem);
// console.log(_.shuffle(myArr));
// console.log(_.shuffle(myArr));
// let counter = 0;
// _.times(5, function(){
//     counter ++;
//     console.log(counter);
// })
// let arr2 = _.map(myArr, function(item){
//     console.log(item);
//     return item.toUpperCase();
// });
// console.log(arr2);
// console.log(_.map(myArr,_.camelCase));
// console.log(_.map(myArr, _.capitalize));
// console.log(_.map(myArr, _.upperCase));

// let arr3 = _.map(myArr, function(e){
//     return _.startsWith(e, 'b');
// })
// console.log(arr3);

// let arr4 = _.map(myArr, function(e){
//     return _.endsWith(e, 'e');
// })
// console.log(arr4);

// myArr.forEach(function(e){
//     if(_.endsWith(e, 'e')){
//         console.log(e);
//     }
// })



//PACKAGES EXPRESS:  /express.com

// const express = require('express');
// const app = express();
// const port = 8080;
// app.get('/', function(req, res){
//     res.send('Hello World');
// })
// app.get('/foo', function(req,res){
//     res.send('<h1> Foo Page </h1>');
// })
// app.listen(port, function(){
//     return console.log('port' + port);
// })




//EXPRESS STATIC FILES

// const express = require('express');
// const app = express();
// const port = 8080;

// //app.use(express.satatic(__dirname));
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/indext1.html');
// })
// app.get('/2', function(req, res){
//     res.sendFile(__dirname + '/index2.html');
// })

// app.listen(port, function(){
//     return console.log('port is' + port);
// })


//GET DATA:

// const express = require('express');
// const app = express();
// const port = 8080;
// app.use(express.static(__dirname));

// const users = [
//     {user: 'Laurence', pass: 'password'},
//     {user: 'Medvedev', pass: 'secret'},
//     {user: 'Joe', pass: 'pass'},
//     {user: 'lin', pass: 'xxxpass'},
// ];


// app.get('/users', function(req, res){
//     res.send(users);
// })

// app.listen(port, function(){
//     return console.log('port is' + port);
// })


//BODY PARSER


// const express = require('express');
// const app = express();
// const port = 8080;
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//     extended :true
// }))
// app.use(bodyParser.json());//for parser JSON
// app. use(express.static(__dirname + '/public'));
// app.get('/', function(req, res){
//     res.sendFile('index.html');
// })
// app.post('/login', function(req, res){
//     let userName = req.body.user;
//     let passWord = req.body.pass;
//     console.log(userName + "" + passWord);
//     res.json({status : true})
// })




app.listen(port, function(){
    return console.log('port is' + port);
})