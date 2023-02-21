const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// todoSchema 
const TodoSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Name required"],
      trim: true,
      maxlenghth: [25, "name must be 25 Charecter long"],
    },
    task: {
      type: [String],
      trim: true,
      maxlenghth: [40, "name must be 40 Charecter long"],
    },
  },
  { timestamps: true }
);


module.exports =mongoose.model("Todo",TodoSchema);

