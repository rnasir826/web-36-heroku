//or you can do it this way
// const dotenv = require('dotenv')
// dotenv.config()
//needs to go on the very top of index.js

const dotenv = require('dotenv').config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const path = require('path')
console.log('web 36 rocks')
console.log(__dirname)
console.log(process.env.LADY)
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.PORT)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

// api, routers
app.use('/api/*', (_, res) => {
  res.json({ data: 'web 36 rocks'})
})

app.use('*', (_, res) => {
    //send back index.html
    res.sendFile(path.koin(__dirname, 'client/build', 'index.html'))
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
