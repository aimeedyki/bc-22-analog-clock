var express = require('express'); 
var session = require('express-session'); 
var app = express(); 
require('dotenv').config() 

var bodyParser = require('body-parser');

var firebase = require( 'firebase');

var config = {
    apiKey: "AIzaSyCB2wcMMLRwABTuhUtl6zjkZrMV-TR_XBs",
    authDomain: "clocks-c2e56.firebaseapp.com",
    databaseURL: "https://clocks-c2e56.firebaseio.com",
    projectId: "clocks-c2e56",
    storageBucket: "clocks-c2e56.appspot.com",
    messagingSenderId: "555017051001"
  };
  
firebase.initializeApp(config);



app.set('view engine', 'ejs')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
app.use(express.static('public'))
app.use(session({
  secret: 'duppy',
  resave: false,
  saveUninitialized: true
}))

app.get('/', function (req, res) {  
  res.render(process.env.rootPath + '/public/login.ejs');
});

app.get('/signup', function (req, res) {  
  res.render(process.env.rootPath + '/public/signup.ejs');
});

app.get('/login', function (req, res) {  
  res.render(process.env.rootPath + '/public/login.ejs');
});

app.post('/login', function (req, res) {  
  var email = req.body.email ;
  var pass = req.body.psw;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
  res.render(process.env.rootPath + '/public/main.ejs');
});

// firebase.auth().onAuthStateChanged(
//     firebaseUser =>{
//       if(firebaseUser){
//         window.location.href = "/main.html";
//         }else {
//           console.log('not logged in')
//         }
//     });



app.get('/', function(req, res, next) {
  if(req.session.user !== undefined && req.session.user.storeurl !== undefined){
    res.redirect('/stores' + req.session.user.storeurl); 
  }    
  res.render('signup', { title: 'world clock Signup',
    message: undefined,
    mtype: undefined,
    description: 'Provide the details to signup for app'});
});
app.post('/signup', function(req, res, next) {
  var FirebaseRef = require('./fireb');
  var firstname =req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userData => { 
      var user = {
        uid: userData.uid,
        email: email,
        firstname: firstname,
        lastname: lastname
      }

      var userRef = firebase.database().ref('user/');
      userRef.child(userData.uid).update(user);
      req.session.user = user
      res.redirect('/main.ejs');
    })
    .catch(error => {      
      var errorCode = error.code;
      var errorMessage = error.message;
      res.render('signup', { title: 'clock Signup',
        message: error.message,
        mtype: 'alert alert-danger',
        description: 'Provide the details to signup for a world clock'});       
    });
});
app.listen(process.env.PORT || 3000, function(){  
console.log('Example app listening on port 3000!')
})
