const express = require('express')
const sql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const app = express()

const port = 8080

const db = sql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

db.connect(error => {
  if (error) {
    console.log(error)
  } else {
    console.log('MySQL connected!')
  }
})

app.get('/', (req, res) => {
  res.send('<h1>Server running!!</h1>')
})

app.listen(port, () => console.log(`Server running on port: ${port}`))
