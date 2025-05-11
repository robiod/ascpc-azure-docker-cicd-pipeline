const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your HACKED web app!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
