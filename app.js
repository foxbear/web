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

app.get('/', function (req, res) {
  res.render('carousel', { 
    projectData : load_yaml( 'info.yml' ),
    imageData : load_yaml( 'client/content/img/img.yml' ),
    pathToAssets :  '/bower_components/bootstrap', 
    pathToImages : '/content/img',
    pathToSelectedTemplateWithinBootstrap : '/stylesheets'
    }
  )
})

app.listen(3000)
console.log( "Serving app.js at localhost:3000...")