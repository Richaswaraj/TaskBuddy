const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
console.log('createTodo:', createTodo); // for function defintion and undefined value
console.log('getTodo:', getTodo);  
console.log("/deleteTodo/:id",deleteTodo); 
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;