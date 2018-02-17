console.log( "******** server.js *******" );

let express = require( "express" );
let app = express();

let bodyParser = require( "body-parser" );
let path = require( "path" );
let mongoose = require( "mongoose" );

mongoose.Promise = global.Promise;

app.use( bodyParser.urlencoded( {extended: true } ) );
app.use( bodyParser.json() );

app.use( express.static( __dirname + "/client/dist" ) );

mongoose.connect( "mongodb://localhost/restful_tasks_crud" );



app.listen( 8000, function() {
    console.log( "listening on port 8000" );
});