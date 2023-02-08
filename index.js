const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
const port = process.env.PORT || 5000
const products = require('./routes/products')
mongoose.connect(process.env.MONGO_STRING, {useNewUrlParser: true}, {strictQuery: true})

const con = mongoose.connection

con.on('open', ()=> {
    console.log('Connected....')
})

app.use(express.json())
app.use('/products',products)

app.listen(port, ()=> {
    console.log('Listening at http://localhost:'+port)
})

