const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("finding records", function() {
  // we are writing this, just so that our query will return some result
  // and just to make sure it gets completed before every test, we are putting
  // it in "beforeEach" block
  // now before each test in this describe block, "char" will be saved

  beforeEach(function(done) {
    var char = new MarioChar({
      name: "mario"
    });

    char.save().then(function() {
      done();
    });
  });

  it("finds a record from the database", function(done) {
    // recall that find and findOne work on model itself
    MarioChar.findOne({ name: "mario" }).then(function(result) {
      // function(which is a callback function) will be fired up with the result of the query
      assert(result.name === "mario");
      done();
    });
  });
});
