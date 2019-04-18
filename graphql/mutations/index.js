const addStudent = require("./addStudent").add;
const deleteStudent = require("./removeStudent").remove;
const updateStudent = require("./updateStudent").update;

module.exports = {
  addStudent,
  deleteStudent,
  updateStudent
};
