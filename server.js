var express = require('express');  
var app = express();  

 
app.use(express.static('public'))

app.get('/', function (req, res) {  
  res.sendFile('C:/Users/ARAWN/clock/public/login.html');
});

app.get('/signup', function (req, res){
res.sendFile('C:/Users/ARAWN/clock/public/signup.html')
});

app.listen(3000,function(){  
console.log('Example app listening on port 3000!')
})
