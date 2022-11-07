const mongoose = require("mongoose");
const { Schema } = mongoose;
const noteSchema = new Schema({
  phoneno: {
    type: Number,
  },
  name: {
    type: String,
  },
  Report:{
    type:String,
  }
});
module.exports = mongoose.model("data", noteSchema);
