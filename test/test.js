/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	router = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'express-router-ping', function tests() {

	it( 'should export a function', function test() {
		expect( router ).to.be.a( 'function' );
	});

});
