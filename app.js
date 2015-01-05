/*
 * Module dependencies
 */
var express = require('express') , 
  YAML = require('yamljs')
  
var app = express()

app.set('views', __dirname + '/client/views')
app.set('view engine', 'jade')
app.use( express.static(__dirname + '/client') )

function load_yaml ( file ) {
  yaml = YAML.load( file )
  console.log( "\n "+file+" \n")
  console.log( JSON.stringify(yaml, undefined, 2) );
  return yaml
}

function render( req, res , template ){
  res.render( template, { 
    general : load_yaml( 'client/content/general.yml' ),
    projects : load_yaml( 'client/content/projects.yml' ),
    pathToAssets :  '/bower_components/bootstrap', 
    pathToImages : '/content/img',
    pathToSelectedTemplateWithinBootstrap : '/stylesheets'
    }
  )
}

app.get('/', function (req, res) {
  render( req, res, 'index' )
})

app.get('/projects', function (req, res) {
   render( req, res, 'projects' )
})

app.get('/about', function (req, res) {
   render( req, res, 'about' )
})

app.get('/contact', function (req, res) {
   render( req, res, 'contact' )
})

app.listen(14670)
console.log( "Serving app.js at 14670...")