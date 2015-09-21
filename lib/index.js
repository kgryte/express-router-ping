'use strict';

// MODULES //

var express = require( 'express' ),
	pong = require( './pong.js' );


// ROUTER //

var router = express.Router();
router.get( '/ping', pong );


// EXPORTS //

module.exports = router;
