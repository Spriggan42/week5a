const express = require('express')
const app = express()
app.get('/', (req, res) =>
{
  res.render('index.ejs', {name:"Herry", lastname:"Potter"})
})
const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})