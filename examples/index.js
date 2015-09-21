'use strict';

// MODULES //

var request = require( 'request' ),
	express = require( 'express' ),
	router = require( './../lib' );


// APP //

var app = express();

// Mount the router on the application:
app.use( '/', router );

// Create an HTTP server:
app.listen( 7331, onListen );

function onListen() {
	console.log( 'Server is listening for requests on port: 7331.' );
	run();
}


// RUN //

var count = 0;

function run() {
	if ( ++count > 10 ) {
		process.exit( 0 );
	}
	setTimeout( ping, 1000 );
}

function ping() {
	request({
		'method': 'GET',
		'uri': 'http://127.0.0.1:7331/ping'
	}, onResponse );
}

function onResponse( error, response, body ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Status: %s.', response.statusCode );
	console.log( 'Body: %s.', body );
	run();
}
