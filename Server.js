const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'assets')))
  .get('/', (req, res) => res.sendfile(__dirname+'/assets/pages/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
