const express = require('express')
const { getAllTodo } = require('./Todo.Controller')
const todoRouter = express.Router()

todoRouter.route('/')
            .get(getAllTodo)


module.exports = todoRouter