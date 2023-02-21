const asyncHandler = require("../services/asyncHandler");
//need schema to work on routes
const Todo = require("../model/Todo");

//home route

exports.home = (req, res) => {
  console.log("Welcome home");
  res.send("welcome home");
};

//Create new todo

exports.createTodo = asyncHandler(async (req, res, next) => {
  const { title, task } = req.body;

  //checking for input fields
  if (!title || !task) {
    throw new Error("title reqired");
  }

  // checking for duplications
  const todoExist = await Todo.findOne({ title });

  if (todoExist) {
    throw new Error("Todo already already Exists");
  }

  //inserting todo to database
  const todo = await Todo.create({ title, task });

  res.status(200).json({
    success: true,
    todo,
  });
});

// get all todo

exports.getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find().sort({ createdAt: -1 });

  //checking if the todo exist or not
  if (!todos) {
    throw new Error("Todos doesnt exist in db");
  }

  res.status(200).json({
    success: true,
    todos,
  });
});

// single todo
exports.singleTodo = asyncHandler(async (req, res, next) => {
  const todoId = req.params.id;
  const todo = await Todo.findOne({ todoId });
  if (!todo) {
    throw new Error("No such todo exist");
  }
  res.status(200).json({
    success: true,
    todo,
  });
});
// edit todo

exports.editTodo = asyncHandler(async (req, res, next) => {
  const todoId = req.params.id;
  const { title, task } = req.body;
  const update = {
    title: title,
    task: task,
  };

  const todo = await Todo.findByIdAndUpdate(todoId, update, { new: true });

  //checking if the todo exist or not
  if (!todo) {
    throw new Error("Todo doesnt exist in db");
  }

  res.status(200).json({
    success: true,
    todo,
  });
});

// delete todo by id

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todoId = req.params.id;
  const todo = await Todo.findByIdAndDelete(todoId);

  //checking if the todo exist or not
  if (!todo) {
    throw new Error("Todo doesnt exist in db");
  }

  res.status(200).json({
    success: true,
    message: "Todo is Deleted",
  });
});
