const express = require("express");
const { searchTodo } = require("../controllers/searchControllers");
const router = express.Router();

router.get("/searchTodo/", searchTodo);

module.exports = router;
