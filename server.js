var express = require('express');  
var app = express(); 
require('dotenv').config() 

 
app.use(express.static('public'))

app.get('/', function (req, res) {  
  res.sendFile(process.env.rootPath + '/public/login.html');
});

app.get('/signup', function (req, res){
res.sendFile('C:/Users/ARAWN/clock/public/signup.html')
});

app.listen(process.env.PORT || 3000, function(){  
console.log('Example app listening on port 3000!')
})
