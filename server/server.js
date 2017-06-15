var express = require('express');
app = express();
var http = require('https').Server(app);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

var io = require('socket.io')(http);
var request = require('request');

var config = require('./config.json');

var port     = process.env.PORT || 8080;

console.log("from serverjs");
app.use(morgan('dev'));




// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

// app.use('/bower_components', express.static('./bower_components'));

app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 5000 }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(session({ secret: "mjt", resave: false, saveUninitialized: true }));

app.use(function(req, res, next) {
  req.io = io;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('./app/routes.js')(app,io);



// app.listen(port);
   // console.log("App listening on port " + port);


http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 
io.on('connection', function (socket) {
	console.log('client connect');
	// socket.on('echo', function (data) {
    var url = config.localApiUri+"/marketlive"
    request.get({url : url},function (error, response, html) {
      if (!error) {
        var resArray = JSON.parse(html);
        console.log("from io first connection");
        console.log(resArray);
        io.emit('update', resArray.data);
      }
    }
      )
      
    // })
		
	});

	// io.emit('update', {msg : 'i reached everywhere'});
// });