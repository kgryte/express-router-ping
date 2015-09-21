'use strict';

/**
* FUNCTION: pong( request, response, next )
*	Returns a `pong` response.
*
* @param {Object} request - HTTP request object
* @param {Object} response - HTTP response object
* @param {Function} next - callback to invoke after sending response
*/
function pong( request, response, next ) {
	response
		.status( 200 )
		.send( 'pong' );
	next();
} // end FUNCTION pong()


// EXPORTS //

module.exports = pong;
