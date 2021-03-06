/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var incrcount = require( '@stdlib/stats-incr-count' );
var incrmax = require( '@stdlib/stats-incr-max' );
var incrmin = require( '@stdlib/stats-incr-min' );
var incrrange = require( '@stdlib/stats-incr-range' );
var incrmidrange = require( '@stdlib/stats-incr-midrange' );
var incrsum = require( '@stdlib/stats-incr-sum' );
var incrmean = require( '@stdlib/stats-incr-mean' );
var incrvariance = require( '@stdlib/stats-incr-variance' );
var incrstdev = require( '@stdlib/stats-incr-stdev' );
var incrskewness = require( '@stdlib/stats-incr-skewness' );
var incrkurtosis = require( '@stdlib/stats-incr-kurtosis' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a statistical summary.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrsummary();
*
* var summary = accumulator();
* // returns {}
*
* summary = accumulator( 2.0 );
* // returns {...}
*
* summary = accumulator( -5.0 );
* // returns {...}
*
* summary = accumulator();
* // returns {...}
*/
function incrsummary() {
	var midrange;
	var variance;
	var skewness;
	var kurtosis;
	var summary;
	var count;
	var range;
	var stdev;
	var mean;
	var max;
	var min;
	var sum;

	// Incremental count:
	count = incrcount();

	// Sum:
	sum = incrsum();

	// Sample mean:
	mean = incrmean();

	// Unbiased sample variance:
	variance = incrvariance();

	// Corrected sample standard deviation:
	stdev = incrstdev();

	// Corrected sample skewness:
	skewness = incrskewness();

	// Corrected excess sample kurtosis:
	kurtosis = incrkurtosis();

	// Maximum value:
	max = incrmax();

	// Minimum value:
	min = incrmin();

	// Range (i.e., max-min):
	range = incrrange();

	// Mid-range:
	midrange = incrmidrange();

	// Initial an object for tracking state:
	summary = {};

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated summary. If not provided a value, the accumulator function returns the current summary.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {Object} summary
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return summary;
		}
		summary.count = count( x );
		summary.max = max( x );
		summary.min = min( x );
		summary.range = range( x );
		summary.midrange = midrange( x );
		summary.sum = sum( x );
		summary.mean = mean( x );
		summary.variance = variance( x );
		summary.stdev = stdev( x );
		summary.skewness = skewness( x );
		summary.kurtosis = kurtosis( x );
		return summary;
	}
}


// EXPORTS //

module.exports = incrsummary;
