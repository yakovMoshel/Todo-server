const express = require('express');
const app = express();

const cors=require('cors');
app.use(express.json());
app.use(cors())




const TodoRouter = require('../Server/Todo.router/Todo.router')

const db = require('./db.js');
db.conncet()



app.listen(2700,()=>console.log('🤯🤯🤯'));

