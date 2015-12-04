/* global require, describe, it, beforeEach */
'use strict';

var mpath = './../lib/pong.js';


// MODULES //

var chai = require( 'chai' ),
	noop = require( '@kgryte/noop' ),
	pong = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'pong', function tests() {

	// SETUP //

	var request, response;

	request = {};
	response = {
		'status': function status( code ) {
			response._status = code;
			return this;
		},
		'send': function send( str ) {
			response._body = str;
		}
	};

	beforeEach( function before() {
		response._status = null;
		response._body = null;
	});

	// TESTS //

	it( 'should export a function', function test() {
		expect( pong ).to.be.a( 'function' );
	});

	it( 'should return a 200 status', function test() {
		pong( request, response, noop );
		assert.strictEqual( response._status, 200 );
	});

	it( 'should return a response body which is a string reading `pong`', function test() {
		pong( request, response, noop );
		assert.strictEqual( response._body, 'pong' );
	});

});
