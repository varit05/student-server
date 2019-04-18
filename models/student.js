const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  hobbies: [
    {
      type: String,
      required: false
    }
  ],
  birthDate: {
    type: Date,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});
const Model = mongoose.model("Student", studentSchema);
module.exports = Model;
