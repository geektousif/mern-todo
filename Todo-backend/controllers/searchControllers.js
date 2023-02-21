//need schema to work on routes
const Todo = require("../model/Todo");

exports.searchTodo = async (req, res) => {
  try {
    const key = req.query.key;
    const todos = await Todo.find({
      $or: [
        { title: { $regex: key, $options: "i" } },
        { task: { $regex: key, $options: "i" } },
      ],
    });

    res.status(201).json({
      success: true,
      todos,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
