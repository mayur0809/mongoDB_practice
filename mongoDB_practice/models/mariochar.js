const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// we need "Schema" propery of mongoose

// creating a schema
const MarioCharSchema = new Schema({
  // here we mention what are the fields in the schema
  name: String,
  weight: Number
});

// now since we have created the schema, we can create our model
const MarioChar = mongoose.model("mariochar", MarioCharSchema);
// "mariochar" is the name of the collection/model
// model is always based on particular schema
// and in this case the model "mariochar" is based on "MarioCharSchema"
// so whenver a new "MarioChar" will be created, mongoose will create it
// in the collection "mariochar" and basic schema will be "MarioCharSchema"

// we are exporting "MarioChar", so that we can use it in other files
module.exports = MarioChar;
