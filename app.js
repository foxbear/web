/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , morgan = require( 'morgan')
  
var app = express()

function compile( str, path ) {
    return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use( morgan('combined') )
app.use( stylus.middleware( { 
    src: __dirname + '/client',
    compile: compile
    }
))
app.use( express.static(__dirname + '/client') )

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.listen(3000)