// this file will contain all the code required to get connected to database

const mongoose = require("mongoose");

// since "promise" of mongoose is depricated, we are using "ES6" promises
mongoose.Promise = global.Promise;

// now whatever we write in "before" function, that will be executed
// before running the tests
// thefore we are pasting our "mongoose.connect" and everything into
// before function

before(function(done) {
  // connect to mongoDB
  mongoose.connect("mongodb://localhost/testarro2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // inside the connect function, we specify the string where we want to connect
  // if we try to connect mongoose to the database which does not exist, it will
  // create that database for us

  // now again "connect" is an asynchronous function, so we need to let mongoose know
  // whenever that function gets over. and we do that with "done" parameter

  mongoose.connection
    .once("open", function() {
      console.log("connection has been made to database...");
      done();
    })
    .on("error", function(error) {
      console.log("connection error", error);
    });
  // "mongoose.connection" gives us the information about the connection that we
  // have opened
  // "once" specifies "just listen to this event once"
  // once the connection is "open", fire up the function specified in second parameter
  // if there is an error, we need to know about it
  // for this purpose, we are attaching event listener to "mongoose.connection"
  // and that event listener is "on"
  // we dont want to listen to error just once, we need to listen to every error
  // hence we are using "on"
});

// deleting the data in collection (in mongo's terminology it is called "dropping the
// collection")

// we are dropping the collection before each test
beforeEach(function(done) {
  // drop the collection "mariochar"
  mongoose.connection.collections.mariochars.drop(function() {
    done();
  });
  // since dropping is asynchronous request, we are using done function
  // recall that mongoose pluralises the name of the collection while storing
  // it in the database
});
