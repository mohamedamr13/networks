const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
var path = require('path');
//var popup = require('popups');

app.set('view engine', 'ejs');
app.use(express.json());

app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//const popup = require('node-popup');


let database = JSON.parse(fs.readFileSync("user.json"));


app.get('/home', (req, res) => {
  res.render('home.ejs');
  //res.send('Hello World!')

});



app.get('/', (req, res) => {
  res.render('login.ejs');
  //res.send('Hello World!')

});


app.get('/dune', (req, res) => {
  res.render('dune.ejs');
  //res.send('Hello World!')

});

app.get('/fiction', (req, res) => {
  res.render('fiction.ejs');
  //res.send('Hello World!')

});
app.get('/flies', (req, res) => {
  res.render('flies.ejs');
  //res.send('Hello World!')

});
app.get('/grapes', (req, res) => {
  res.render('grapes.ejs');
  //res.send('Hello World!')

});

app.get('/leaves', (req, res) => {
  res.render('leaves.ejs');
  //res.send('Hello World!')

});

app.get('/mockingbird', (req, res) => {
  res.render('mockingbird.ejs');
  //res.send('Hello World!')

});
app.get('/novel', (req, res) => {
  res.render('novel.ejs');
  //res.send('Hello World!')

});

app.get('/poetry', (req, res) => {
  res.render('poetry.ejs');
  //res.send('Hello World!')

});
app.get('/readlist', (req, res) => {
  res.render('readlist.ejs');
  //res.send('Hello World!')

});

app.get('/registration', (req, res) => {
  res.render('registration.ejs');
  //res.send('Hello World!')

});

app.get('/searchresults', (req, res) => {
  res.render('searchresults.ejs');
  //res.send('Hello World!')

});

app.get('/sun', (req, res) => {
  res.render('sun.ejs');
  //res.send('Hello World!')

});


// //var alert = window['alert'];
// const notifier = require('node-notifier');
// // String
// notifier.notify('Message');
// notifier.notify({
//   title: 'ERROR',
//   message: 'USERNAME ARLEADY DEFINED'
// });
// // Object


app.post('/register' , (req,res)=>{
 var x = req.body.username;
 var y = req.body.password;
 var i;
  for(  i = 0; i<database.length ; i++ ){
      if(database[i].username === x){
      popup.alert({
        content: 'WRONG USERNAME'
    });
    res.redirect('/register');
  }
    };
 // let newArr = JSON.parse(fs.readFileSync("user.json"));
  database.push({ username:x , password:y });
  fs.writeFileSync("user.json",JSON.stringify(database));
  res.redirect('/home');
  //console.log( 'length inside' + database.length);
}  );


app.post('/login' , (req,res)=>{
  var x = req.body.username;
  var y = req.body.password;
  var i;
  let noUser= true;
  let wrongUser=  true;
   for(  i = 0; i<database.length ; i++ ){
       if(database[i].username === x &&  database[i].password === y)
       {
        noUser = false;
         res.redirect('/home');
       }
      if(database[i].username === x &&  database[i].password != y)
      {
        res.redirect('/login');
      // error
      }
      
     };
  // let newArr = JSON.parse(fs.readFileSync("user.json"));
   database.push({ username:x , password:y });
   fs.writeFileSync("user.json",JSON.stringify(database));
   res.redirect('/home');
   //console.log( 'length inside' + database.length);
 }  );
 

// var publicDir = require('path').join(__dirname,'/public'); 
// app.use(express.static(publicDir));
//app.use(express.static("public"));

app.use('/css', express.static(__dirname + 'public/css'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


let x = { name:'ali' };
let z = { name:'amr' };

let y = JSON.stringify(x);
let p = JSON.stringify(z);
//fs.writeFileSync("user.json",y);
let arr = JSON.stringify( [x,z] );
//fs.writeFileSync("user.json",arr);

//console.log(z);
 var u = fs.readFileSync("user.json");
 var w = JSON.parse(u);
 //console.log(w);
//console.log(w);

//console.log(database.length  +'length outside');

// let flag = false;
// let j;
// for(i =0 ;i<2 ; i++)
// flag = true;
// console.log(flag);

