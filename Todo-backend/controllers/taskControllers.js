//need schema to work on routes
const Todo = require("../model/Todo");

// Create new task

exports.createTask = async (req, res) => {
        
    try {
      const todoId = req.params.id;
      const {  task } = req.body;
      // console.log("task from user", task);
      if(!task){
        console.log("task not added")
        res.send("task not added");
      }
      const todo = await Todo.findByIdAndUpdate(
        todoId,
        {
          $push: {
            task: task,
          },
        },
        { new: true }
      );
     res.status(201).json({
       success: true,
       todo,
     });
    

        
    } catch (err) {
         console.log(err);
         res.status(401).json({
           success: false,
           message: err.message,
         });
    }
}

//delete task

exports.deleteTask = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { task } = req.body;
    console.log("task from user", task);
    if (!task) {
      console.log("task not added");
      res.send("task not added");
    }
    const todo = await Todo.findByIdAndUpdate(todoId, {
      $pull: {
        task: task,
      },
    },{new:true});
    res.status(201).json({
      success: true,
      todo,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
