const express = require('express')
const cors = require('cors')
const app = express()

// 允许跨域
app.use(cors())
app.use(express.json())

require('./router/index')(app)

app.listen('3000', async(req, res) => {
  console.log("http://localhost:3000")
})

