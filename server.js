const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression());
app.use(express.static('dist'))

app.listen(8080,function () {
    console.log('hi')
})
