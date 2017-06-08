// load the todo model
// var Todo = require('./models/todo');
// var socketio = require('./socketio.js');
var request = require('request');

// expose the routes to our app with module.exports
module.exports = function(app) {

    app.use('/api',require('./api.controller'));

    app.use("/",require("./app.controller"));

    // api ---------------------------------------------------------------------
    
};
