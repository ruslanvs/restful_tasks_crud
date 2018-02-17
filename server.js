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

let TaskSchema = new mongoose.Schema( {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
}, { timestamps: true } );
let Task = mongoose.model( "Task", TaskSchema );

app.get( "/tasks", function( req, res ){
    Task.find( {}, function( err, data ){
        if( err )
            res.send( err );
        else
            res.send( data );
    });
});

app.get( "/tasks/:id", function( req, res ){
    Task.find( { _id: req.params.id }, function( err, data ){
        if( err )
            res.send( err );
        else
            res.send( data );
    });
});

app.post( "/tasks", function( req, res ){
    let task = new Task( {
        title: req.body.title,
        description: req.body.description
    });
    task.save( function( err ){
        if( err )
            res.send( err );
        else
            res.redirect( "/tasks" );
    });
});

app.put( "/tasks/:id", function( req, res ){
    Task.update( { _id: req.params.id }, {
        title: req.body.title,
        description: req.body.description
    }, function( err ){
        if( err )
            res.send( err );
        else
            res.redirect( "/tasks" );
    });
});

app.delete( "/tasks/:id", function( req, res ){
    Task.remove( { _id: req.params.id }, function( err ){
        if( err )
            res.send( err );
        else
            res.redirect( "/tasks" );
    });
});


app.listen( 8000, function() {
    console.log( "listening on port 8000" );
});