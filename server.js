const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todo')

const app = express()

mongoose.connect('mongodb://localhost:27017/todo-app-redux')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if(err) {
      res.send(err)
    }
    res.json(todos)
  })
})


app.post('/api/todo', (req, res) => {
  const record = new Todo()

  record.text = req.body.text
  record.save((err, record) => {
    if(err) {
      res.send(err)
    }
    res.json(record)
  })
})

app.listen(8080, () => console.log("a-ok!") )