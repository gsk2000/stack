

/* module.exports = {
	url : 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/uw45mypu'
} 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
 //mongoose.connection.db.collection('chat', action);
});

var action = function (err, collection) {
    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
    	console.log(results);
        /* whatever you want to do with the results in node such as the following
             res.render('home', {
                 'title': 'MyTitle',
                 'data': results
             });
      
    });
};



*/

