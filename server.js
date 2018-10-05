var express = require('express')
var path = require('path')
var hbs = require('hbs')
var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  res.render('index', {
    title : 'animation sandbox'
  })
})

app.get('/public/style/style.css', (req, res, next) => {
  res.sendFile(__dirname + '/public/style/style.css')
})

app.listen(8080, () => {
  console.log('listening on 8080')
})
