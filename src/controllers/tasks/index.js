const expressAsyncHandler = require("express-async-handler");

const { getMonthTasks } = require("./getMonthTasks");
const { postTask } = require("./postTask");
const { patchTask } = require("./patchTask");
const { deleteTask } = require("./deleteTask");

module.exports = {
  getMonthTasks: expressAsyncHandler(getMonthTasks),
  postTask: expressAsyncHandler(postTask),
  patchTask: expressAsyncHandler(patchTask),
  deleteTask: expressAsyncHandler(deleteTask),
};
