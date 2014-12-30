/*
 * Module dependencies
 */
var express = require('express') , 
  morgan = require( 'morgan')
  
var app = express()

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use( express.static(__dirname + '/client') )

app.get('/', function (req, res) {
  res.render('carousel', { 
    pathToAssets :  '/bower_components/bootstrap', 
    pathToImages : '/img',
    pathToSelectedTemplateWithinBootstrap : '/stylesheets'
    }
  )
})

app.listen(3000)
console.log( "Serving app.js at localhost:3000...")