
var chat = require('./models/chat.js');
var mongoose = require('mongoose');
var action = function (err, collection) {
    // Locate all the entries using find
    //console.log(collection);
   // collection.find().toArray(function(err, results) {
    	//return results;
    //	console.log(results);
    	//res.json(results);
        /* whatever you want to do with the results in node such as the following
             res.render('home', {
                 'title': 'MyTitle',
                 'data': results
             });
      */
   // });
};

module.exports = function(app) {


  	// server routes ===========================================================
  	// handle things like api calls
  	// authentication routes
  app.get('/api/chatTotalCount', function (req, res) {
          // use mongoose to get all todos in the database
         	mongoose.connection.db.collection('chat', function (err, collection) {
      		collection.find().count(function(err, results) {
      		res.json(results);
      	});

   	});      
  });

  app.get('/api/numUserCount', function (req, res) {
          // use mongoose to get all todos in the database
         	mongoose.connection.db.collection('chat', function (err, collection) {
      		collection.distinct('Speaker', {Speaker: /^((?!subject).)*$/} ,function(err, results) {
      		res.json(results.length)
      	});

   	});      
  });

  app.get('/api/msgpermonth', function (req, res) {
          // use mongoose to get all todos in the database
          mongoose.connection.db.collection('chat', function (err, collection) {
          collection.aggregate([
                  { "$project": {
                        "month": { "$month": "$Date" }
                  }}, 
                    { "$group": {
                       "_id": "$month", 
                        "total": { "$sum": 1 }
                      }}
                      ], function(err, results) {
                            res.json(results)
                      });
    });      
  });


  app.get('/api/msgperweek', function (req, res) {
          // use mongoose to get all todos in the database
          mongoose.connection.db.collection('chat', function (err, collection) {
          collection.aggregate([
                  { "$project": {
                        "week": { "$week": "$Date" }
                  }}, 
                    { "$group": {
                       "_id": "$week", 
                        "total": { "$sum": 1 }
                      }}
                      ], function(err, results) {
                            res.json(results)
                      });
    });      
  });


  app.get('/api/msgperuser', function (req, res) {
          // use mongoose to get all todos in the database
     var db = mongoose.connection;
    var jk = db.collection('chat');
    var m = mongoose.modelNames;
    //console.log(jk)
    var map = function() {
                       emit(this.Speaker, 1);
                   };

    var reduce = function(Speaker, count) {
                          return Array.sum(count);
                      };
    var command = {
      mapreduce: "chat", // the name of the collection we are map-reducing
      map: map.toString(), // a function for mapping
      reduce: reduce.toString(), // a function  for reducing
      out: "map_reduce_example"  // doesn't create a new collection, includes the result in the output obtained
    };        

    mongoose.connection.db.executeDbCommand(command, function(err, dbres) {
        if(err) throw err;
          mongoose.connection.db.collection('map_reduce_example', function (err, collection) {
            if(err) throw err;
              collection.find({ value: { $gt: 5 } } ).toArray(function(err, results) {
                if(err) throw err;
                res.send(results);
            });

          });   
      })
     
  })




  	// frontend routes =========================================================
  	// route to handle all angular requests
  	app.get('*', function(req, res) {
  		res.sendfile('./public/index.html');
  	});

}