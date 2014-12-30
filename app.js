/*
 * Module dependencies
 */
var express = require('express') , 
  YAML = require('yamljs'),
  morgan = require( 'morgan')
  
var app = express()

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use( express.static(__dirname + '/client') )

function get_info ( file ) {
  info = YAML.load( file )
  console.log( "\n "+file+" \n")
  console.log( JSON.stringify(info, undefined, 2) );
  return info
}

app.get('/', function (req, res) {
  res.render('carousel', { 
    projectData : get_info( 'info.yml' ),
    pathToAssets :  '/bower_components/bootstrap', 
    pathToImages : '/img',
    pathToSelectedTemplateWithinBootstrap : '/stylesheets'
    }
  )
})

app.listen(3000)
console.log( "Serving app.js at localhost:3000...")