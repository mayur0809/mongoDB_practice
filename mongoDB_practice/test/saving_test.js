// "mocha" should work without "requiring" it
// the way mocha works is we have to "describe" our tests
// to use "assert" we are going to "require" assert
const assert = require("assert");

// to use our model "MarioChar", we "require" the file "mariochar.js"
const MarioChar = require("../models/mariochar");

// describe takes in two parameters, first is string(which is description) and second is
// a function
describe("saving records", function() {
  // we create different tests within this block with the help of "it" block
  // each "it" block describes a single test
  // it("adds two numbers together", function() {
  //   // within "it" we "assert" something
  //   // means we predict whether we are asserting is true or false
  //   // if whatever we are asserting is true, the test "adds two numbers together"
  //   // is going to pass, otherwise it is going to fail
  //   assert(2 + 3 === 5);
  // });

  it("Saves a record to the database", function() {
    // creating a new record in the collection
    var char = new MarioChar({
      name: "mario"
    });
    // since we have already established the connnection to database in "connection.js" file
    // mongoose knows which database to put the record in
    // also we have already specified in our model "mariochar.js", which collection should the
    // data be put in
    // saving the character in the database
    char.save().then(function(done) {
      assert(char.isNew === false);
      done();
    });
  });
});

// note
// normally when we want to run any test we would say "npm run test"
// but for this we have to set "test" in package.json file
// in package.json we set "test" as "mocha"
// this means, when we run "npm run test", it will run mocha
// and mocha will go through our tests
