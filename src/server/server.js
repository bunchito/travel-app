const dotenv = require('dotenv');
dotenv.config()
const path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const fetch = require('node-fetch')
const port = 8085

// const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'
// const apiKey = process.env.API_KEY
// const lang = 'en'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    res.sendFile(path.resolve('src/client/views/index.html'))
  } else {
    res.sendFile('dist/index.html')
  }
})

app.get('/test', function (req, res) {
  res.json({ msg: 'Hi' })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))