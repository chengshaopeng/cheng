// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8081;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var session  = require('express-session');
var FileStore= require('session-file-store')(session);
var ejs      = require('ejs');

var identityKey = 'skey';

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

var expressLayouts = require('express-ejs-layouts');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', './views');

app.set('layout extractScripts',true);
app.set('layout extractStyles', true);

app.use(expressLayouts);

// required for passport
app.use(session({
    name: identityKey,
//    secret: 'ilovescotchscotchyscotchscotch', // session secret
    secret: 'chyingp',
    store: new FileStore(),
    resave: false,
    saveUninitialized: false,
    cookie: {
          maxAge: 10 * 1000
    }
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/public', express.static( __dirname + '/public/'));

//app.use('/',require('./controller/main.js'));

require('./controller/routes.js')(app, passport);

// routes ======================================================================
//require('./controller/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
