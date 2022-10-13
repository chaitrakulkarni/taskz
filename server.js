// 1. Git installation, pushing code, cloud connection from Heroku, db connection - atlas and mc-compass.
const bodyParser = require("body-parser")

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const assert = require('assert')
const taskRoute = require('./route/taskRoute')
const connectDb = require('./db/connect')

const port = process.env.PORT || Number(5000)

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())

//view engines
app.set('view engine', 'ejs')
app.set('views', './views')

//default route
app.use(`/`, taskRoute)

//pnf
app.all(`*`, (req,res)=> {
    res.render('pnf')
})

//server call
app.listen(port, () => {
    connectDb()
    console.log(`server is running @http://localhost:${port}`)
})