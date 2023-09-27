// Load Node modules
var express = require(`express`);
const ejs = require('ejs');

// Initialise Express
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Render static files
app.use(express.static(`public`));
// Port website will run on
app.listen(8080);